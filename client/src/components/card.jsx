import { getColor } from "../utils/colors";
import { Set } from "./set";

export function Card({ sets }) {
  return (
    <div className="card drop-shadow">
      <div
        className="padding-s"
        style={{
          backgroundImage:
            "linear-gradient(" +
            getColor(sets[0].expand.exercise.color) +
            ", transparent)",
        }}
      >
        <h2 className="text-m">{sets[0].expand.exercise.name}</h2>
      </div>
      <div className="flex-col padding-s-x padding-s-b gap-s">
        {sets.map((set, i) => (
          <Set number={i + 1} set={set} />
        ))}
      </div>
    </div>
  );
}
