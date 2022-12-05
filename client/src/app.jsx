import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { AppPage } from "./pages/app";

const queryClient = new QueryClient();

// TODO: Add Auth login
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppPage />
    </QueryClientProvider>
  );
}
