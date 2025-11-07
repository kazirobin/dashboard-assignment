import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🚨 Oops! Something went wrong.</h1>
      <p>{error?.statusText || error?.message || "Unknown error occurred."}</p>
      {error?.status && <p>Status Code: {error.status}</p>}
    </div>
  );
};

export default ErrorPage;