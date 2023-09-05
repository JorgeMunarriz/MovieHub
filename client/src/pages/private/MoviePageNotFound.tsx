import { useNavigate } from "react-router-dom";

export const MoviePageNotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <div>
      <h2>Movie Page Not Found</h2>
    </div>
  );
};
