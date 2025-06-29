import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";

const Navbar = () => {
  const { user, lognOut } = use(AuthContext);
  const handleLogout = () => {
    lognOut()
      .then(() => {
        alert("you logout success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-button flex gap-5">
        <img src={userIcon} alt="" />
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
