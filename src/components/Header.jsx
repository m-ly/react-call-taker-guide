import { Link } from "react-router-dom";
import road from "../assets/road-3.png";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header>
      <div className="logo">
        <h1>GuardRails</h1>
        <img src={road} alt="road" className="" width="40px" />
      </div>
      <span className="headerNav">
        {isAuthenticated ? (
          <Link className="link" to="/admin">
            Admin
          </Link>
        ) : (
          <Link className="link" to="/login">
            Log In
          </Link>
        )}

        <Link className="link" to="/">
          Home
        </Link>
      </span>
    </header>
  );
}

export default Header;
