import { useRouteError, isRouteErrorResponse } from "react-router";

const ErrorPage: React.FC = () => {
  interface RouterError {
    status: number;
    statusText: string;
  }

  const error = useRouteError() as RouterError;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Oops! Something went wrong.</h1>
      {isRouteErrorResponse(error) ? (
        <i>
          {error.status} - {error.statusText}
        </i>
      ) : (
        <p>
          {error instanceof Error ? error.message : "Unknown error occurred"}
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
