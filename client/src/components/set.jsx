export function Set({ number, set }) {
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
      <h3 className="text-grey">T</h3>
    </div>
  );
}
