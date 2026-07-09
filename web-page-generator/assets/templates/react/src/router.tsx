import { RouterProvider, createHashRouter } from "react-router-dom";
import { routeTree } from "./routeTree.gen";

export const router = createHashRouter(routeTree);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
