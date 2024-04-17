function AdminNavBar({ activePanel, setActivePanel }) {
  return (
    <div className="AdminPanelNav">
      <h1>Admin Panel</h1>
      <ul>
        <li>
          <h3
            className={`CallTypePanelMarker ${
              activePanel === "callTypes" ? "active" : ""
            }`}
            onClick={() => setActivePanel("callTypes")}
          >
            CallTypes
          </h3>
        </li>
        <li>
          <h3
            className={`UsersPanelMarker ${
              activePanel === "users" ? "active" : ""
            }`}
            onClick={() => setActivePanel("users")}
          >
            Users
          </h3>
        </li>
      </ul>
    </div>
  );
}

export default AdminNavBar;
