import { Link } from "react-router-dom";

export function ErrorPage({ error }) {
  return (
    <>
      <h1 className="text-m text-center margin-y-m">Weights</h1>
      <div className="margin-y-xl">
        <h2 className="text-l text-center margin-y-m">Oops!</h2>
        <h3 className="text-m text-center">{error}</h3>
      </div>
      <Link to="/" className="margin-y-m">
        <h3 className="text-center">Take me Home</h3>
      </Link>
    </>
  );
}
