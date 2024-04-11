import { Link } from "react-router-dom";
import road from "../../assets/road-3.png";
import { useLogout } from "../authentication/useLogout";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

function Header() {
  const { logOut } = useLogout();
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return (
    <header>
      <div className="logo">
        <h1>GuardRails</h1>
        <img src={road} alt="road" className="" />
      </div>
      <span className="headerNav">
        <Link className="link" to="/">
          Home
        </Link>
        {user ? (
          <>
            <Link className="link" to="/admin">
              Admin
            </Link>
            <button className="link" onClick={logOut}>
              Logout
            </button>
          </>
        ) : (
          <Link className="link" to="/login">
            <button>Log In</button>
          </Link>
        )}
      </span>
    </header>
  );
}

export default Header;
