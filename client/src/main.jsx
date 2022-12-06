import { render } from "preact";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage } from "./pages/home";
import { AppPage } from "./pages/app";

import "normalize.css";
import "./main.css";

// React Query query client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/app",
    element: <AppPage />,
  },
]);

render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
  document.getElementById("app")
);
