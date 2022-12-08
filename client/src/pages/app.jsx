import { useEffect, useState } from "preact/hooks";
import { redirect, useSearchParams, Navigate } from "react-router-dom";
import {
  authWithOAuth2,
  isAuthValid,
  authClear,
  authRefresh,
  updateUser,
  getUserPicture,
} from "../api/client";
import { Cards } from "../components/cards";
import { Menu } from "../components/menu";
import { Spinner } from "../components/utils/spinner";
import { get } from "../utils/ls";

export function AppPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [params] = useSearchParams();

  useEffect(async () => {
    if (isAuthValid()) {
      authRefresh();
      setAuthenticated(true);
      setIsLoading(false);
      return;
    }

    const provider = get("provider");
    if (params.get("state") && params.get("state") === provider.state) {
      let result;
      try {
        result = await authWithOAuth2(
          provider.name,
          params.get("code"),
          provider.codeVerifier,
          provider.redirectUrl
        );
      } catch (error) {
        setIsLoading(false);
        return;
      }

      updateUser(result.record.id, { avatarUrl: result.meta.avatarUrl });
      setAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!authenticated) {
      redirect("/");
    }
  }, [authenticated]);
  // TODO: Redirect on failed login? Show Error?
  return (
    <>
      {!isLoading && authenticated && (
        <>
          <div className="flex-row margin-y-m justify-space-between">
            <h1 className="text-m">Weights</h1>
            <img
              className="avatar drop-shadow"
              onClick={() => {
                authClear();
                setAuthenticated(false);
              }}
              src={getUserPicture()}
              referrerpolicy="no-referrer"
            ></img>
          </div>
          <Menu />
          <Cards />
        </>
      )}
      {!isLoading && !authenticated && <Navigate to="/" />}
      {isLoading && <Spinner className="m-y-xl" />}
    </>
  );
}
