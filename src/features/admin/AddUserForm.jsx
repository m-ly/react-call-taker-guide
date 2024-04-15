import { useState } from "react";
import { createUser } from "../../services/apiAuth";

function AddUserForm() {
  const [userFormInfo, setUserFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdministrator: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setUserFormInfo((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSignUp(e) {
    e.preventDefault();
    createUser(userFormInfo);
  }

  return (
    <main>
      <h1>Add a new User</h1>
      <form className="userForm" onSubmit={handleSignUp}>
        <label htmlFor="userEmail">Email</label>
        <input
          id="userEmail"
          type="email"
          name="email"
          onChange={handleChange}
          value={userFormInfo.email}
          disabled={""}
          required
        />

        <label htmlFor="userPassword">Password</label>
        <input
          id="userPassword"
          name="password"
          type="password"
          onChange={handleChange}
          value={userFormInfo.password}
          disabled={""}
        />

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={userFormInfo.firstName}
          disabled={""}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          value={userFormInfo.lastName}
          disabled={""}
        />

        <div className="adminBox">
          <label htmlFor="adminTrue">Administrative Status: </label>
          <input
            id="adminTrue"
            name="isAdministrator"
            type="radio"
            value="true"
            checked={userFormInfo.isAdministrator === "true"}
            onChange={handleChange}
            required
          />
          <label htmlFor="adminTrue">True</label>
          <input
            id="adminFalse"
            name="isAdministrator"
            type="radio"
            value="false"
            checked={userFormInfo.isAdministrator === "false"}
            onChange={handleChange}
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
