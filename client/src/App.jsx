import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
export const UserDataContext = React.createContext();

import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <UserDataContext.Provider value={{ user: userData }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </div>{" "}
    </UserDataContext.Provider>
  );
}

export default App;
