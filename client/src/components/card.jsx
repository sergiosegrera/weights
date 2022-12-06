import { getColor } from "../utils/colors";
import { ConfirmIcon } from "./confirmIcon";
import { Set } from "./set";

import deleteIcon from "../assets/delete.svg";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExercise } from "../api/client";

export function Card({ sets }) {
  const queryClient = useQueryClient();

  const exercises = useMutation({
    mutationFn: deleteExercise,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sets"] });
    },
  });

  return (
    <div className="card drop-shadow">
      <div
        className="padding-s flex-row justify-space-between"
        style={{
          backgroundImage:
            "linear-gradient(" +
            getColor(sets[0].expand.exercise.color) +
            ", transparent)",
        }}
      >
        <h2 className="text-m">{sets[0].expand.exercise.name}</h2>
        <ConfirmIcon
          icon={deleteIcon}
          handler={() => exercises.mutate({ id: sets[0].expand.exercise.id })}
        />
      </div>
      <div className="flex-col padding-s-x padding-s-b gap-s">
        {sets.map((set, i) => (
          <Set number={i + 1} set={set} />
        ))}
      </div>
    </div>
  );
}
