# React Frontend Template

This template is the reusable React project scaffold for `web-page-generator`.

## Scope

- Frontend only.
- React 19 + Vite.
- React Router through `react-router-dom`.
- Route structure inspired by file-based routers:
  - `src/main.tsx` mounts `AppRouter`.
  - `src/router.tsx` owns `createHashRouter` and `RouterProvider`, which keeps static previews and static hosting path-safe.
  - `src/routeTree.gen.ts` wires route modules into a route tree.
  - `src/routes/*` contains route screen modules.
- Routing uses hash URLs such as `#/workspace`; do not switch the scaffold back to History API routing unless the host also adds server-side fallback rewrites.
- Tailwind CSS v4 through `@tailwindcss/vite`.
- Local shadcn/ui-style primitives under `src/components/ui`.
- No backend APIs, database layer, server actions, or Node server runtime.

## Agent Contract

Third-party agents should treat this directory as the fixed scaffold and generate only task-specific route module code.

The default writable/replaceable files are:

- `src/routes/root.tsx`
- `src/routes/index.tsx`
- `src/routes/workspace.tsx`
- `src/routes/settings.tsx`
- `src/routes/not-found.tsx`

For immediate preview, the host runs this generated project like a normal frontend app: `npm ci`, then `npm run dev -- --port <port> --strictPort`, then opens the dev-server URL. Agents should not generate a second preview-only HTML/CSS/JS implementation.

Agents may import from:

- `react-router-dom`
- `@/components/ui/button`
- `@/components/ui/card`
- `@/components/ui/input`
- `@/components/ui/textarea`
- `@/components/ui/badge`
- `@/components/ui/tabs`
- `@/components/ui/label`
- `@/lib/utils`
- `lucide-react`

Agents should not add package dependencies unless the host explicitly allows dependency installation.

The local preview path copies the template `package-lock.json` and may create `node_modules` in the generated project because it intentionally follows the real install/dev workflow.

For multi-page applications, put screen code in `src/routes/*`. Do not add `App.tsx`, another `BrowserRouter`, `createBrowserRouter`, another `RouterProvider`, custom history objects, or another route tree unless the host explicitly changes the scaffold contract.

Treat `workspace.tsx` and `settings.tsx` as route slots. Their visible labels, data, forms, and controls should come from the user request rather than from those filenames.

## Commands

```bash
npm ci
npm run dev
npm run build
npm run preview
```

The deployable static output is `dist/`.
