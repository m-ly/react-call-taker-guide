import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";

export default function Login() {
  const [email, setEmail] = useState("joe@rpd.com");
  const [password, setPassword] = useState("StrongPassword1234!");
  const { login } = useLogin();

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  }

  const isLoading = "";

  return (
    <main className="loginPage">
      <h1>Log In</h1>

      <form className="userForm" onSubmit={handleLogin}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading}
        />

        <button type="primary">Log In</button>
      </form>
    </main>
  );
}
