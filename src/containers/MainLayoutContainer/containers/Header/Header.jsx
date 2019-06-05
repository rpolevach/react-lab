import React from "react";
import "../../styled/Header.css";

const Header = ({ onAuth }) => {
  return (
    <div>
      <div className="header">ShopName</div>
      <button onClick={onAuth}>Sign in as Admin</button>
    </div>
  );
};

export default Header;
