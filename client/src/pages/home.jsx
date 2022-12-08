import { Providers } from "../components/auth/providers";

export function HomePage() {
  return (
    <>
      <h1 className="text-m text-center margin-y-m">Weights</h1>
      <h2 className="text-l text-center margin-y-xl">
        Track your <span className="text-blue">progress</span>
      </h2>
      <Providers />
      <p className="text-m text-center text-grey margin-y-xl">Segrera Design</p>
    </>
  );
}
