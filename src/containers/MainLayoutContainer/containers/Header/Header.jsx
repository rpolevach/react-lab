import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import "../../styled/Header.css";

const Header = ({ isSignUpFormOpen, openSignUpForm, addUser }) => {
  return (
    <div>
      <div className="header">ShopName</div>
      <button onClick={openSignUpForm}>Sign up</button>
      <SignUpForm
        addUser={addUser}
        openSignUpForm={openSignUpForm}
        isSignUpFormOpen={isSignUpFormOpen}
      />
    </div>
  );
};

export default Header;
