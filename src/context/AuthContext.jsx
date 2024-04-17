import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return action.payload.isAdmin
        ? {
            ...state,
            user: action.payload,
            isAuthenticated: true,
            isAdmin: true,
          }
        : {
            ...state,
            user: action.payload,
            isAuthenticated: true,
            isAdmin: false,
          };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "reject":
      return { ...state, error: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isAdmin }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login() {}

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ login, logout, isAuthenticated, isAdmin, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of Auth Provider");

  return context;
}

export { AuthProvider, useAuth };
