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
        {users.map((user) => {
          return <p key={user.id}>{user.email}</p>;
        })}
      </div>
    </div>
  );
}

export default UserList;
