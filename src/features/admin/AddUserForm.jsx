import { useState } from "react";
import { createUser } from "../../services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";

function AddUserForm() {
  const queryClient = useQueryClient();

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

    try {
      await createUser(userFormInfo);
      queryClient.invalidateQueries("users");
      setUserFormInfo({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isAdministrator: false,
      });
    } catch (err) {
      throw new Error(err.message);
    }
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
          autoComplete="off"
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
          autoComplete="off"
          onChange={handleChange}
          value={userFormInfo.password}
          disabled={""}
        />

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={userFormInfo.firstName}
          disabled={""}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={userFormInfo.lastName}
          disabled={""}
        />

        <div className="adminBox">
          <label htmlFor="adminTrue">Administrative Status: </label>
          <input
            id="adminTrue"
            name="isAdministrator"
            type="checkbox"
            value="false"
            autoComplete="off"
            checked={userFormInfo.isAdministrator}
            onChange={handleChange}
          />
          <label htmlFor="adminTrue">True</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default AddUserForm;
