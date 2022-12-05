import { ConfirmIcon } from "./confirmIcon";

import deleteIcon from "../assets/delete.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSet } from "../api/client";

// TODO: Add Remove set functionality
export function Set({ number, set }) {
  const queryClient = useQueryClient();

  const sets = useMutation({
    mutationFn: deleteSet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sets"] });
    },
  });

  return (
    <div className="flex-row justify-space-between">
      <h3>
        <span className="text-grey">#</span> {number}
      </h3>
      <h3>
        {set.repetitions}
        <span className="text-grey">reps</span>
      </h3>
      <h3>
        {set.weight}
        <span className="text-grey">lbs</span>
      </h3>
      <ConfirmIcon
        icon={deleteIcon}
        handler={() => sets.mutate({ id: set.id })}
      />
    </div>
  );
}
