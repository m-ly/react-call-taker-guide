import { useState } from "react";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function PasswordReset() {
  const [password, setPassword] = useState("");
  const [passwordVerify, setPassWordVerify] = useState("");
  const navigate = useNavigate();

  function handleReset() {
    if (!ValidPassword()) return;
    resetPassword();
  }

  function ValidPassword() {
    if (password.length < 14) return false;
    if (password !== passwordVerify) return false;

    return true;
  }

  async function resetPassword() {
    const { error } = await supabase.auth.updateUser({ password: password });

    if (error) toast.error(error.message);

    toast.success("Password successfully updated!");

    navigate("/app");
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
