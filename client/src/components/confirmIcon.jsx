import { useState } from "preact/hooks";

import check from "../assets/check.svg";

export function ConfirmIcon({ icon, handler }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {clicked ? (
        <img
          src={check}
          className="icon-s"
          onClick={() => {
            handler();
            setClicked(false);
          }}
        />
      ) : (
        <img src={icon} className="icon-s" onClick={() => setClicked(true)} />
      )}
    </>
  );
}
