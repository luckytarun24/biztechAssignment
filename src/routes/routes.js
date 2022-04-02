import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilePage } from "../Pages";
const Routers = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            key={"/profile/:user"}
            path={"/profile/:user"}
            exact={true}
            element={<ProfilePage />}
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};
export default Routers;
