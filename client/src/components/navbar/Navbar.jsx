import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Destructure logout function
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/"); // Optionally navigate to home or another page
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span className="navItem">Welcome, {user.username}</span>
            <button className="navButton" onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={handleLoginClick}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
