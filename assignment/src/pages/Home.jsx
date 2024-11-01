import { Link } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";

const Home = () => {
  return (
    <div>
      <button className="btn btn-outline-success">
        <Link to={"/login"} element={<Login />}>
          login
        </Link>
      </button>
      <button to={"/signin"} className="btn btn-outline-success">
       
        <Link to={"/signup"} element={<Register />}>
          Register
        </Link> 
      </button>
    </div>
  );
};

export default Home;
