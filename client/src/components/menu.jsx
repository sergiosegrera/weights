import { useEffect, useState } from "preact/hooks";

import { AddSet } from "./addSet";
import { AddExercise } from "./addExercise";

import assignmentAdd from "../assets/assignment_add.svg";
import fitnessCenter from "../assets/fitness_center.svg";
import download from "../assets/download.svg";
import { getSetsCSV } from "../api/client";

export function Menu() {
  const [state, setState] = useState(0);
  const goHome = () => setState(0);

  const [csv, setCsv] = useState("");
  useEffect(async () => {
    setCsv(await getSetsCSV());
  }, []);

  return (
    <>
      {state === 0 && (
        <div className="flex-row justify-space-between">
          <div className="flex-row">
            <img
              className="icon margin-r-m"
              src={assignmentAdd}
              onClick={() => setState(1)}
            />
            <img
              className="icon"
              src={fitnessCenter}
              onClick={() => setState(2)}
            />
          </div>

          <a href={csv} download="data.csv">
            <img className="icon" src={download} />
          </a>
        </div>
      )}
      {state === 1 && <AddSet backHandler={goHome} />}
      {state === 2 && <AddExercise backHandler={goHome} />}
    </>
  );
}
