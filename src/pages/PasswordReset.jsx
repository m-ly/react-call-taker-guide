import { useState } from "react";

export default function PasswordReset() {
  const [password, setPassword] = useState("");
  const [passwordVerify, setPassWordVerify] = useState("");

  function handleReset() {
    console.log("Resetting password");
  }

  function ValidPassword() {
    if (password.length < 14) return false;
    if (password !== passwordVerify) return false;

    return true;
  }

  return (
    <div className="reset-container">
      <h1>Reset Your Password</h1>

      <div className="PasswordFlash" style={{ color: "red" }}>
        {!password
          ? ""
          : !ValidPassword()
          ? "Passwords must be 14 characters long, include 1 letter, and 1 special symbol"
          : ""}
      </div>

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
          type="password"
          value={passwordVerify}
          onChange={(e) => setPassWordVerify(e.target.value)}
        ></input>
        <br></br>
        <button disabled={!ValidPassword()}>Submit</button>
      </form>
    </div>
  );
}
