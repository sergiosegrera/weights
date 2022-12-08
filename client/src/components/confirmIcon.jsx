import { useState } from "preact/hooks";

import check from "../assets/check.svg";

export function ConfirmIcon({ icon, handler, small = false }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {clicked ? (
        <img
          src={check}
          className={`${small ? "icon-s" : "icon-m"}`}
          onClick={() => {
            handler();
            setClicked(false);
          }}
        />
      ) : (
        <img
          src={icon}
          className={`${small ? "icon-s" : "icon-m"}`}
          onClick={() => setClicked(true)}
        />
      )}
    </>
  );
}
