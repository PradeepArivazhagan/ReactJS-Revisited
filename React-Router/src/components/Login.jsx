import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const { user } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <div>Logged in as {user}</div>
      <button onClick={handleNavigate}>Move to home</button>
    </>
  );
};

export default Login;
