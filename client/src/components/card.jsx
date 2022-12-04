import { Set } from "./set";

export function Card() {
  return (
    <div className="flex-col rounded drop-shadow" style="overflow: hidden;">
      <div className="card-bg-blue padding-s">
        <h2>Hello</h2>
      </div>
      <div className="flex-col padding-s-x padding-s-b" style="gap: 12px;">
        <Set />
        <Set />
        <Set />
        <Set />
      </div>
    </div>
  );
}
