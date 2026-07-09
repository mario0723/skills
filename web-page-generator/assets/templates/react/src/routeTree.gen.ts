import { createElement } from "react";
import type { RouteObject } from "react-router-dom";
import { IndexRoute } from "./routes/index";
import { NotFoundRoute } from "./routes/not-found";
import { RootRoute } from "./routes/root";
import { SettingsRoute } from "./routes/settings";
import { WorkspaceRoute } from "./routes/workspace";

export const routeTree: RouteObject[] = [
  {
    path: "/",
    element: createElement(RootRoute),
    errorElement: createElement(NotFoundRoute),
    children: [
      { index: true, element: createElement(IndexRoute) },
      { path: "workspace", element: createElement(WorkspaceRoute) },
      { path: "settings", element: createElement(SettingsRoute) },
      { path: "*", element: createElement(NotFoundRoute) },
    ],
  },
];
