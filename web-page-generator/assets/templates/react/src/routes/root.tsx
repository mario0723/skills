import { Button } from "@/components/ui/button";
import { Route as RouteIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Overview", end: true },
  { to: "/workspace", label: "Workspace" },
  { to: "/settings", label: "Settings" },
];
const projectTitle = "{{PROJECT_TITLE}}";

export function RootRoute() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/90 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <NavLink to="/" className="flex min-w-0 items-center gap-3 text-sm font-semibold text-foreground">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <RouteIcon className="size-4" aria-hidden="true" />
            </span>
            <span className="truncate">{projectTitle}</span>
          </NavLink>

          <nav className="hidden items-center gap-1 rounded-lg border bg-card p-1 sm:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-1.5 text-sm transition-colors",
                    isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Button className="hidden sm:inline-flex" variant="outline">
            Publish
          </Button>
        </div>
      </header>

      <Outlet />
    </main>
  );
}
