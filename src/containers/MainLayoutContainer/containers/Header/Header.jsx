import React from "react";
import "../../styled/Header.css";

const Header = ({ onAuth, isAuth }) => {
  const authLogout = () => {
    if (!isAuth) return <button onClick={onAuth}>Sign in as Admin</button>;

    return <button onClick={onAuth}>Logout</button>;
  };

  return (
    <div>
      <div className="header">ShopName</div>
      {authLogout()}
    </div>
  );
};

export default Header;
