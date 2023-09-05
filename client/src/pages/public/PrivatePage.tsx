import { useNavigate } from "react-router-dom";

export const PrivatePage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <div>
      <h2>You must to be logged to see this page, please log in. </h2>
    </div>
  );
};
