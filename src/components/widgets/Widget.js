import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MoneyOffCsredOutlined,
  PersonOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";
import "../../sass/widget.scss";

function Widget({ type }) {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: " rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "See all order",
        icon: (
          <ShoppingBagOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: " rgb(133, 90, 90, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "view net earning",
        icon: (
          <MoneyOffCsredOutlined
            className="icon"
            style={{
              color: "bottolgreen",
              backgroundColor: " rgba(351, 90, 90, 0.2)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              color: "orange",
              backgroundColor: " rgb(122, 90, 90, 36)",
            }}
          />
        ),
      };
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
