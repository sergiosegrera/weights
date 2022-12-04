import { AddExercise } from "../components/addExercise";
import { AddSet } from "../components/addSet";
import { Card } from "../components/card";
import { Menu } from "../components/menu";

export function AppPage() {
  return (
    <>
      <div
        className="flex-row margin-y-m"
        style="justify-content: space-between;"
      >
        <h1 className="text-m">Weights</h1>
        <div className="avatar drop-shadow"></div>
      </div>
      <Menu />
      <div className="flex-col margin-y-m" style="gap: 16px;">
        <h2 className="text-center text-s text-regular text-grey">Today</h2>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
