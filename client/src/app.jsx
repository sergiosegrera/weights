import { useState } from "preact/hooks";

import { HomePage } from "./pages/home";
import { AppPage } from "./pages/app";

export function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return <>{authenticated ? <AppPage /> : <HomePage />}</>;
}
