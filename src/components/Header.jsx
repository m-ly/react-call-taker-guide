import { Link } from "react-router-dom";
import road from "../assets/road-3.png";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";

function Header() {
  const userData = useUser();
  const { logOut, isLoading } = useLogout();
  console.log(userData);

  return (
    <header>
      <div className="logo">
        <h1>GuardRails</h1>
        <img src={road} alt="road" className="" width="40px" />
      </div>
      <span className="headerNav">
        {userData.user ? (
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
