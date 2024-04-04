import { Link } from "react-router-dom";
import road from "../assets/road-3.png";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header>
      <span>
        <h1 className="">GuardRails</h1>
        <img src={road} alt="road" className="" width="40px" />
      </span>
      <span>
        {isAuthenticated && <Link to="/admin">Admin</Link>}
        <Link to="/login">Log In</Link>
      </span>
    </header>
  );
}

export default Header;
