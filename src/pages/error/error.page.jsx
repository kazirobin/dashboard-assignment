import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          🚨 Oops! Something went wrong.
        </h1>
        <p className="text-gray-700 mb-2">
          {error?.statusText || error?.message || "Unknown error occurred."}
        </p>
        {error?.status && (
          <p className="text-sm text-gray-500">Status Code: {error.status}</p>
        )}
        <button
          onClick={() => window.location.href = "/"}
          className="mt-6 inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
