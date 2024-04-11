import { useState } from "react";
import { createUser } from "../../services/apiAuth";

function AddUserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdministrator, setIsAdministrator] = useState(false);

  async function handleSignUp(e) {
    e.preventDefault();
    createUser({
      email,
      password,
      firstName,
      lastName,
      isAdministrator,
    });
  }

  return (
    <main>
      <h1>Add a new User</h1>
      <form className="userForm" onSubmit={handleSignUp}>
        <label htmlFor="userEmail">Email</label>
        <input
          id="userEmail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={""}
        />

        <label htmlFor="userPassword">Password</label>
        <input
          id="userPassword"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={""}
        />

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          disabled={""}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          disabled={""}
        />

        <div className="adminBox">
          <label htmlFor="adminTrue">Administrative Status: </label>
          <input
            id="adminTrue"
            type="radio"
            value="true"
            checked={isAdministrator === "true"}
            onChange={() => setIsAdministrator("true")}
            required
          />
          <label htmlFor="adminTrue">True</label>
          <input
            id="adminFalse"
            type="radio"
            value="false"
            checked={isAdministrator === "false"}
            onChange={() => setIsAdministrator("false")}
            required
          />
          <label htmlFor="adminFalse">False</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default AddUserForm;
