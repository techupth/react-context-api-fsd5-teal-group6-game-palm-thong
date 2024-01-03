import { UserDataContext } from "../App";
import React, { useContext } from "react";
function AppHeader() {
  const context = useContext(UserDataContext).user;
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {context.username}</h2>
    </div>
  );
}

export default AppHeader;
