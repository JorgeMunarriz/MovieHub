import { Link, useNavigate } from "react-router-dom";
import { ErrorPageNotFoundStyles } from ".";

export const ErrorPageNotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <ErrorPageNotFoundStyles>
      <div className="errorPage">
        <h2 className="errorPage__title">
          Error 404, this page not exist, you'll going to redirect in a few seconds. please wait, or click here:
        </h2>
          <Link className="errorPage__linkRedirect" to={"/"}>
            Redirect to home
          </Link>
      </div>
    </ErrorPageNotFoundStyles>
  );
};
