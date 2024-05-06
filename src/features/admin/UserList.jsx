import supabase from "../../services/supabase";

import SearchForm from "../sidebar/SearchForm";
import { useUsers } from "../authenticationHooks/useUsers";
import { deleteUser } from "../../services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

function UserList() {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Spinner />;

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
  const {
    id,
    email,
    first_name: firstName,
    last_name: lastName,
    is_administrator: isAdministrator,
  } = user;
  const queryClient = useQueryClient();

  function handleDeleteUser() {
    deleteUser(id);
    toast.success(
      `The record related to ${firstName} ${lastName} has been successfully removed.`
    );
    queryClient.invalidateQueries({ queryKey: ["users"] });
  }

  async function handleResetClick(email) {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `/update-password`,
    });
  }

  return (
    <tr>
      <td>
        {lastName}, {firstName}
      </td>
      <td>{email}</td>
      <td>{isAdministrator}</td>
      <td>
        <button onClick={() => handleResetClick(email)}>Reset Password</button>
      </td>
      <td>
        <button onClick={handleDeleteUser}>X</button>
      </td>
    </tr>
  );
}
