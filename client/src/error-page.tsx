import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}


export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  const { statusText, message } = error;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
}