import { Provider } from "./provider";

import { useQuery } from "@tanstack/react-query";
import { getAuthMethods } from "../../api/client";
import { Spinner } from "../utils/spinner";

import "./providers.css";

export function Providers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["providers"],
    queryFn: getAuthMethods,
  });

  return (
    <div className="providers">
      {isLoading && <Spinner />}
      {!isLoading &&
        data.authProviders.length > 0 &&
        data.authProviders.map((provider) => (
          <Provider
            provider={provider}
            redirectUrl={window.location.href + "app"}
          />
        ))}
      {isError && <h2>Sorry, it is not possible to login at the moment</h2>}
    </div>
  );
}
