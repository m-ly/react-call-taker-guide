import { getAllUsers } from "../../services/apiAuth";
import { useState, useEffect } from "react";
import SearchForm from "../sidebar/SearchForm";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="userList">
      <h1>Users</h1>
      <div>
        <SearchForm />
        <UserTable users={users} />
      </div>
    </div>
  );
}

export default UserList;

function UserTable({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Administrator Status</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </tbody>
    </table>
  );
}

function User({ user }) {
  const { email } = user;
  const { firstName, lastName, isAdministrator } = user.raw_user_meta_data;

  function handleDeleteUser() {
    console.log("user Deleted!");
  }

  function handleResetClick() {
    console.log("Password Reset");
  }

  return (
    <tr>
      <td>
        {lastName}, {firstName}
      </td>
      <td>{email}</td>
      <td>{isAdministrator}</td>
      <td>
        <button onClick={handleResetClick}>Reset Password</button>
      </td>
      <td>
        <button onClick={handleDeleteUser}>X</button>
      </td>
    </tr>
  );
}
