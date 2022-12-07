import { set } from "../../utils/ls";

export function Provider({ provider, redirectUrl }) {
  return (
    <a
      href={provider.authUrl + redirectUrl}
      onClick={() => set("provider", provider)}
    >
      {provider.name}
    </a>
  );
}
