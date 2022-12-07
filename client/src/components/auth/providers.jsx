import { Provider } from "./provider";

import { useQuery } from "@tanstack/react-query";
import { getAuthMethods } from "../../api/client";
import { Spinner } from "../utils/spinner";

export function Providers() {
  const { data, isLoading } = useQuery({
    queryKey: ["providers"],
    queryFn: getAuthMethods,
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        data.authProviders.map((provider) => (
          <Provider
            provider={provider}
            redirectUrl={"http://localhost:5173/auth"}
          />
        ))
      )}
    </>
  );
}
