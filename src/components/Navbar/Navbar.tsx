import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/auth.context";

const Navbar = () => {
  const { isLoggedIn, logoutUser } = useAuthContext();
  return (
    <nav className="nav bg-white sticky">
      <div className="nav-brand">
        <h2>
          <Link to="/">FlixQuiz</Link>
        </h2>
      </div>

      {isLoggedIn ? (
        <ul className="nav-link">
          <li className="nav-link-item" style={{ cursor: "pointer" }} onClick={() => logoutUser()}>
            Logout
          </li>
        </ul>
      ) : (
        <ul className="nav-link">
          <li className="nav-link-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
