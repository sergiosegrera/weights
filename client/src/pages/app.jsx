import { Cards } from "../components/cards";
import { Menu } from "../components/menu";

export function AppPage() {
  return (
    <>
      <div className="flex-row margin-y-m justify-space-between">
        <h1 className="text-m">Weights</h1>
        <div className="avatar drop-shadow"></div>
      </div>
      <Menu />
      <Cards />
    </>
  );
}
