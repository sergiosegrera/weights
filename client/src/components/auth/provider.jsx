import { set } from "../../utils/ls";

import google from "../../assets/google.svg";

import "./providers.css";

export function Provider({ provider, redirectUrl }) {
  return (
    <a
      className="provider"
      href={provider.authUrl + redirectUrl}
      onClick={() => {
        provider.redirectUrl = redirectUrl;
        set("provider", provider);
      }}
    >
      {provider.name == "google" && (
        <>
          <img src={google} />
          <p>Sign in with Google</p>
        </>
      )}
    </a>
  );
}
