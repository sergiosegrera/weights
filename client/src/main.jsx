import { render } from "preact";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Pages
import { HomePage } from "./pages/home";
import { AppPage } from "./pages/app";
import { ErrorPage } from "./pages/error";

import "normalize.css";
import "./main.css";

// React Query query client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage error={"Page not found"} />,
  },
  {
    path: "/app",
    element: <AppPage />,
  },
]);

render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("app")
);
