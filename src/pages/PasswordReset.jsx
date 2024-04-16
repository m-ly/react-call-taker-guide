import { useState } from "react";

export default function PasswordReset() {
  const [password, setPassword] = useState("");
  const [passwordVerify, setPassWordVerify] = useState("");
  function handleReset() {
    console.log("Resetting password");
  }
  return (
    <div>
      <h1>Reset Your Password</h1>
      <form onSubmit={handleReset}>
        <label htmlFor="password">New Password</label>
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <br></br>

        <label htmlFor="passwordVerification">Verify the new Password</label>
        <br></br>
        <input
          type="passwordVerification"
          value={passwordVerify}
          onChange={(e) => setPassWordVerify(e.target.value)}
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}
