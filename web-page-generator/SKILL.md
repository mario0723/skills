---
name: web-page-generator
description: Use only for creating and previewing a NEW local webpage, website, landing page, frontend project, React app, dashboard/admin UI, or web app from natural language. Simple pages become static HTML + CSS + JavaScript; complex app-like requests become React 19 + Vite + React Router + Tailwind CSS v4 + shadcn/ui projects copied from the reusable template. Do not use for follow-up edits, debugging, reopening, rerunning, style tweaks, or content changes to an existing generated project; those belong to generated_web_project_* source-code and preview tools. Do not use for Eureka/尤里卡/Dify app creation or editing.
---

# Web Page Generator

Use this skill to turn a natural-language webpage request into a previewable webpage project.

This skill is intentionally runtime-neutral: the caller/runtime provides the generation model, output directory, file writer, command runner, and preview opener. The template is a minimal engineering scaffold, not a business UI template.

The generator should pick one of two project shapes:

- `html`: simple landing pages, forms, information pages, single marketing pages, or prototypes that can be published as static files.
- `react`: componentized frontend applications, dashboards, tools, workbenches, or pages likely to grow into a maintained app. The scaffold includes React 19, Vite, React Router, Tailwind CSS v4, bundled shadcn/ui components, `components.json`, and deployment metadata.

## Input

- `prompt`: The user's webpage or web app request. Preserve the domain, target users, key content, and visual direction.
- `projectName`: Optional short project name. Use a filesystem-safe name when supplied.
- `framework`: Optional framework preference: `auto`, `html`, or `react`.
- `projectTier`: Optional complexity hint: `static` or `react`.

## Reusable Template Contract

- React scaffold source lives in the skill's reusable template directory, such as `assets/templates/react/`.
- The scaffold is copied from files, not synthesized from install commands.
- Template placeholders:
  - `{{PROJECT_ID}}`: filesystem-safe generated project id.
  - `{{PROJECT_TITLE}}`: human-readable starter title.
- For React projects, generated files are route modules under `src/routes/`: `root.tsx`, `index.tsx`, `workspace.tsx`, `settings.tsx`, and `not-found.tsx`.
- For React projects, preview follows the real engineering workflow: copy the reusable scaffold, write generated route modules, run `npm ci`, run `npm run dev -- --port <port> --strictPort`, then open the dev server URL. Do not generate a separate preview-only HTML/CSS/JS implementation.
- The runtime adapter provides Vite, React Router, Tailwind CSS v4, bundled shadcn/ui primitives, `components.json`, `tsconfig.json`, `src/main.tsx`, `src/router.tsx`, `src/routeTree.gen.ts`, `src/index.css`, and `src/lib/utils.ts`.
- React projects must use hash routing through the scaffold's `createHashRouter`; generated navigation should resolve under hash URLs such as `#/workspace`, not History API paths that require server rewrites.
- Keep generated imports within the scaffold allowlist so the generated project can install and run without extra dependency decisions.
- Generated React code should put screen code in `src/routes/*` and must not add `App.tsx`, another `BrowserRouter`, `createBrowserRouter`, another `RouterProvider`, custom history objects, or another route tree.
- Unless the user explicitly asks for a single-view React app, generated React projects should include a routed application shell with at least two meaningful routes.
- Treat fixed route filenames as route slots, not business concepts. Route labels, visible navigation, page headings, sample data, forms, and controls should be derived from the user's domain instead of inheriting generic "workspace/settings" copy.
- Do not hardcode domain-specific fallback layouts. If model generation fails, keep the scaffold's minimal starter routes rather than pretending to know the user's application type.

## Workflow

1. Normalize the prompt into a concise product/page brief.
2. Infer the page type from the prompt, such as login/auth, information display, form, pricing, dashboard, tool, or landing page.
3. Choose the project profile:
   - Static pages use HTML/CSS/JS and can be served directly.
   - React frontend apps use React 19 + Vite + React Router + Tailwind CSS v4 + shadcn/ui and include package/build metadata.
4. Create a project directory under the host-provided output root.
5. Select relevant prompt/style guidance when the host provides it. Skip guidance whose descriptions do not fit the inferred page type.
6. Ask the configured generation model to generate the selected project source:
   - Static projects stream page body HTML, CSS, and vanilla JavaScript.
   - React projects stream only route modules under `src/routes/`; the runtime adds the React scaffold, router entrypoint, route tree, Tailwind/shadcn setup, package/config files, and publishing files.
   - For React projects, infer the information architecture, routes, component hierarchy, visible copy, and controls from the user's prompt. The scaffold should not force every application into the same dashboard/card/table layout.
7. Write source files with per-file progress. For React projects, explicitly report each framework/template file and business route file being created.
8. For React projects, run `npm ci` and then `npm run dev -- --port <port> --strictPort`, reporting the active command and latest output while each command is running.
9. Write project metadata, README, and deployment manifest files using the host's metadata format.
10. Open the generated page:
   - Static projects open `index.html`.
   - React projects open the Vite dev server URL, so preview reflects the real React/Tailwind source.
11. Return the page directory, entry file, preview URL, framework, project tier, deployment metadata, model metadata, install/dev-server metadata, and generated asset paths.

## Follow-up Editing

This skill only owns creation. Generated projects are ordinary code projects, so natural-language follow-up edits should be handled by the caller's source-code editing workflow reading and writing files directly.

Use the generated project metadata to locate the framework, original prompt, preview URL, dev-server metadata, and deployment profile. For static projects, edit `index.html`, `styles.css`, and `app.js`. For React projects, edit route modules under `src/routes/*` first, then add or adjust project-local components only when the requested change needs shared structure. Keep hash routing intact and run `npm run typecheck` or `npm run build` before refreshing the existing preview.

## Progress Output

Return and emit a `steps` array so the client can show the flow step by step. Generation should report directory creation, selected project profile, model generation, live code preview chunks when streaming static or React route code, every file being created, dependency install, dev-server startup, preview opening, and completion.

## Guardrails

- Keep generated pages inside the host-approved output root.
- Do not overwrite an existing generated page directory.
- Do not install dependencies or start a dev server for static HTML projects.
- Do not edit files outside the generated project directory.
- React projects may create `package.json`, `package-lock.json`, config files, shadcn/ui component files, `node_modules`, README, and deployment metadata as part of the real install/dev preview workflow.
- Stop any React dev servers started by this skill when the host runtime ends the session.
- Do not generate backend APIs, databases, server actions, Next.js/Nuxt/Vue projects, or Node servers from this skill.
- If the host preview adapter cannot open the preview URL, return `failed` with the entry file path so the user can still inspect it manually.
