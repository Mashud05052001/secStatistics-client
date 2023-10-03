import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const { status, statusText, data } = error;
  return (
    <div>
      <h1>
        <span>{status}</span>
        <span>{statusText}</span>
      </h1>
      <h2>{data}</h2>
    </div>
  );
};

export default ErrorPage;
