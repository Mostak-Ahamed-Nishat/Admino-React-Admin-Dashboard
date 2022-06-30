import "../../sass/sidebar.scss";
import React from "react";
import {
  Dashboard,
  Person,
  Store,
  LocalShipping,
  Star,
  Notifications,
  SystemSecurityUpdate,
  Psychology,
  Settings,
  ContactPage,
  Logout,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <a href="#">
          <img
            className="logo"
            height={40}
            width={90}
            src={require("../../img/logo.png")}
            alt="Logo"
          />
        </a>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">main</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">lists</p>
          <li>
            <Person className="icon" /> <span>Users</span>
          </li>
          <li>
            <Store className="icon" /> <span> Products</span>
          </li>
          <li>
            <LocalShipping className="icon" /> <span>Delivery</span>
          </li>
          <p className="title">useful</p>
          <li>
            <Star className="icon" /> <span>Stars</span>
          </li>
          <li>
            <Notifications className="icon" /> <span>Notifications</span>
          </li>
          <p className="title">service</p>
          <li>
            <SystemSecurityUpdate className="icon" /> <span>System Health</span>
          </li>
          <li>
            <Psychology className="icon" /> <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">user</p>
          <li>
            <ContactPage className="icon" /> <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
