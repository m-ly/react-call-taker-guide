import { useState } from "react";

import Header from "../features/app/Header";
import UsersPanel from "../features/admin/UsersPanel";
import AddUserForm from "../features/admin/NewUserForm";
import UserList from "../features/admin/UserList";
import CallTypePanel from "../features/admin/CallTypePanel";
import AdminNavBar from "../features/admin/AdminNavBar";

//import Modal from "../ui/Modal";

function Admin() {
  const [activePanel, setActivePanel] = useState("callTypes");

  return (
    <div>
      <Header />
      <div className="AdminContainer">
        <AdminNavBar
          activePanel={activePanel}
          setActivePanel={setActivePanel}
        />

        {activePanel === "users" && (
          <UsersPanel>
            <AddUserForm />
            <UserList />
          </UsersPanel>
        )}

        {activePanel === "callTypes" && <CallTypePanel />}
      </div>
    </div>
  );
}

export default Admin;
