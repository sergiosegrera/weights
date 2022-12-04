import { useState } from "preact/hooks";

import arrowBack from "../assets/arrow_back.svg";
import add from "../assets/add.svg";

export function AddSet({ backHandler }) {
  const [repetitions, setRepetitions] = useState(8);
  const [weight, setWeight] = useState(45);

  return (
    <div className="flex-col gap-s">
      <div className="flex-row justify-space-between">
        <img
          src={arrowBack}
          alt="Go Back"
          className="icon"
          onClick={() => backHandler()}
        />
        <h2 className="text-center text-s">Log a Set</h2>
        <img src={add} alt="Log a set" className="icon" />
      </div>
      <div className="flex-row justify-space-between gap-s">
        <select
          name="exercise"
          id="exercise"
          className="input flex-grow"
          style="flex: 3;"
        >
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
        </select>
        <input
          type="number"
          name="repetitions"
          id="repetitions"
          className="input flex-shrink"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
        />
        <input
          type="number"
          name="weight"
          id="weight"
          className="input flex-shrink"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
    </div>
  );
}
