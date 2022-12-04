import { useState } from "preact/hooks";

import { getColors } from "../utils/colors";

import arrowBack from "../assets/arrow_back.svg";
import add from "../assets/add.svg";

export function AddExercise({ backHandler }) {
  const colors = getColors();

  const [name, setName] = useState();
  const [chooseColors, setChooseColors] = useState(false);
  const [color, setColor] = useState(colors[0]);

  return (
    <div className="flex-col gap-s">
      <div className="flex-row justify-space-between">
        <img
          src={arrowBack}
          alt="Go Back"
          className="icon"
          onClick={() => backHandler()}
        />
        <h2 className="text-center text-s">
          {chooseColors ? "Choose a Color" : "Add an Exercise"}
        </h2>
        <img src={add} alt="Add an exercise" className="icon" />
      </div>
      <div className="flex-row justify-space-between">
        {chooseColors ? (
          colors.map((color) => (
            <div
              key={color.name}
              style={"background-color: " + color.color + ";"}
              className="avatar"
              onClick={() => {
                setColor(color);
                setChooseColors(false);
              }}
            />
          ))
        ) : (
          <>
            <input
              className="input flex-grow margin-r-m"
              type="text"
              name="exerciseName"
              id="exerciseName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div
              className="avatar"
              style={"background-color: " + color.color + ";"}
              onClick={() => setChooseColors(true)}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
