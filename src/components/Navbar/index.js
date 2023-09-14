import React, { useEffect, useState } from "react";
import "./navbar.scss";
import MyLogo from "./logo-app.svg";
import accountWhite from "../../images/customize/account-blue.svg";
import settingsWhite from "../../images/customize/settings-blue.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const [guest, setGuest] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="title">
        <img onClick={() => navigate("/myprofile")} src={MyLogo}></img>
      </div>
      <div
        className="input"
        onClick={() => {
          setGuest(false);
        }}
      >
        {(location.pathname !== "/profile" && location.pathname !== "/login") &&
          (
            <ul
              onClick={() => {
                setGuest(true);
              }}
            >
              <li onClick={() => navigate("/myprofile")}>
                <img src={accountWhite} />
                <a href="">Dashboard</a>
              </li>
              <li onClick={() => navigate("/settings")}>
                <img src={settingsWhite} />
                <a href="">Settings</a>
              </li>
            </ul>
          )}
      </div>
    </div>
  );
};

export default Navbar;
