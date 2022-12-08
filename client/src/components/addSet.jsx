import { useState } from "preact/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import arrowBack from "../assets/arrow_back.svg";
import add from "../assets/add.svg";
import { createSet, getExercises } from "../api/client";

export function AddSet({ backHandler }) {
  const queryClient = useQueryClient();

  const [exercise, setExercise] = useState();
  const [repetitions, setRepetitions] = useState(8);
  const [weight, setWeight] = useState(45);

  const { data } = useQuery({
    queryKey: ["exercises"],
    queryFn: getExercises,
    staleTime: 5000,
    onSuccess: (exercises) => {
      exercises.length > 0 && setExercise(exercises[0].id);
    },
  });

  const sets = useMutation({
    mutationFn: createSet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sets"] });
    },
  });

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
        <img
          src={add}
          alt="Log a set"
          className="icon"
          onClick={() => sets.mutate({ exercise, repetitions, weight })}
        />
      </div>
      <div className="flex-row justify-space-between gap-s">
        <select
          name="exercise"
          id="exercise"
          className="input flex-grow flex-3"
          onChange={(e) => setExercise(e.target.value)}
        >
          {data &&
            data.map((exercise) => (
              <option key={exercise.id} value={exercise.id}>
                {exercise.name}
              </option>
            ))}
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
