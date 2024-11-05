import { NavLink } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/signup"}>
        <button className="btn btn-outline-success">
          <Register />
        </button>
      </NavLink>
      <NavLink to={"/login"}>
        <button className="btn btn-outline-success">
          <Login />
        </button>
      </NavLink>
    </div>
  );
};

export default Navbar;
