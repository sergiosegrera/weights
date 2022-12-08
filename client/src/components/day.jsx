import { Card } from "./card";

export function Day({ day, sets }) {
  return (
    <>
      <h2 className="text-center text-s text-regular text-grey">{day}</h2>
      {Object.keys(sets).map((set) => (
        <Card sets={sets[set]} />
      ))}
    </>
  );
}
