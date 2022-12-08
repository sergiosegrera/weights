import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { Day } from "./day";

import { getSets } from "../api/client";
import { Spinner } from "./utils/spinner";

// TODO: Add isLoading conditional rendering, Add pagination (infinite scroll)
export function Cards() {
  const [sets, setSets] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["sets"],
    queryFn: getSets,
    onSuccess: (data) => {
      const sets = data.reduce((result, currentValue) => {
        const date = currentValue.created.substring(0, 10);
        const exercise = currentValue.exercise;
        if (!result[date]) {
          result[date] = {};
          result[date][exercise] = [currentValue];
        } else if (!result[date][exercise]) {
          result[date][exercise] = [currentValue];
        } else {
          result[date][exercise] = [...result[date][exercise], currentValue];
        }
        return result;
      }, {});
      setSets(sets);
    },
    staleTime: Infinity,
  });
  return (
    <div className="flex-col margin-y-m gap-s">
      {isLoading ? (
        <Spinner />
      ) : sets && Object.keys(sets).length > 0 ? (
        Object.keys(sets).map((day) => <Day day={day} sets={sets[day]} />)
      ) : (
        <h2 className="text-s text-center">Nothing yet!</h2>
      )}
    </div>
  );
}
