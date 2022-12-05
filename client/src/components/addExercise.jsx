import { useState } from "preact/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createExercise } from "../api/client";

import { getColors } from "../utils/colors";

import arrowBack from "../assets/arrow_back.svg";
import add from "../assets/add.svg";

export function AddExercise({ backHandler }) {
  const queryClient = useQueryClient();

  const colors = getColors();

  const [name, setName] = useState("");
  const [chooseColors, setChooseColors] = useState(false);
  const [color, setColor] = useState(colors[0]);

  const exercises = useMutation({
    mutationFn: createExercise,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exercises"] });
      setName("");
    },
  });

  return (
    <div className="flex-col gap-s">
      <div className="flex-row justify-space-between">
        <img
          src={arrowBack}
          alt="Go Back"
          className="icon"
          onClick={backHandler}
        />
        <h2 className="text-center text-s">
          {chooseColors ? "Choose a Color" : "Add an Exercise"}
        </h2>
        <img
          src={add}
          alt="Add an exercise"
          className="icon"
          onClick={() => exercises.mutate({ name, color: color.id })}
        />
      </div>
      <div className="flex-row justify-space-between">
        {chooseColors ? (
          colors.map((color) => (
            <div
              key={color.name}
              style={{ backgroundColor: color.color }}
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
              style={{ backgroundColor: color.color }}
              onClick={() => setChooseColors(true)}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
