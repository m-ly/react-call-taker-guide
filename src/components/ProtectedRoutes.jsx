import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user) navigate("/login");
    },
    [user, navigate]
  );

  if (isLoading) return <h1>Loading</h1>;

  return children;
}

export default ProtectedRoutes;
