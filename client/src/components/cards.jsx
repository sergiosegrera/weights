import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { Day } from "./day";

import { getSets } from "../api/client";

export function Cards() {
  const [sets, setSets] = useState();

  const { data } = useQuery({
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
      console.log(sets);
      setSets(sets);
    },
  });
  return (
    <div className="flex-col margin-y-m gap-s">
      {sets &&
        Object.keys(sets).map((day) => <Day day={day} sets={sets[day]} />)}
    </div>
  );
}
