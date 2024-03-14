import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SetCurrentUserContext } from "../../App";

const LogoutPage = () => {
  const setCurrentUser = useContext(SetCurrentUserContext);
  const history = useHistory();

  const handleLogout = () => {
    // Clear the user session (example: set currentUser to null)
    setCurrentUser(null);
    // Redirect to the login page
    history.push("/login");
  };

  return (
    <div>
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;