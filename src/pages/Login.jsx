import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";

export default function Login() {
  const [email, setEmail] = useState("joe@rpd.com");
  const [password, setPassword] = useState("SecretP@ssword123");
  const { isLoading, login } = useLogin();

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <main className="logInForm">
      <form className="" onSubmit={handleLogin}>
        <div className="">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
          />
        </div>

        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
          />
        </div>

        <div>
          <button type="primary">Log In</button>
        </div>
      </form>
    </main>
  );
}
