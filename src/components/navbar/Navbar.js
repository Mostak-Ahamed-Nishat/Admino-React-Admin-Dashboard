import "../../sass/navbar.scss";
import React from "react";
import {
  SearchOutlined,
  Language,
  NightlightOutlined,
  AspectRatio,
  NotificationsOutlined,
  MenuOpenOutlined,
  ChatBubbleOutline,
} from "@mui/icons-material";
import { Badge } from "@mui/material";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" className="searchBox" placeholder="Search..." />
          <SearchOutlined className="searchIcon" />
        </div>

        <div className="items">
          <div className="item language">
            <Language className="icon" />
            English
          </div>
          <div className="item">
            <NightlightOutlined className="icon" />
          </div>
          <div className="item">
            <AspectRatio className="icon" />
          </div>
          <div className="item">
            <Badge badgeContent={2} color="secondary">
              <NotificationsOutlined className="icon" />
            </Badge>
          </div>
          <div className="item">
            <Badge badgeContent={4} color="secondary">
              <ChatBubbleOutline className="icon" />
            </Badge>
          </div>
          <div className="item">
            <MenuOpenOutlined className="icon" />
          </div>
          <div className="item">
            <img
              alt="user avatar"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
