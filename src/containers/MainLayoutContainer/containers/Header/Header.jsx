import React from "react";
import SignUpForm from "./components/SignUpForm";
import "../../styled/Header.css";

const Header = ({ isSignFormOpen, isSignUp, openSignForm, addUser }) => {
  return (
    <div>
      <div className="header">ShopName</div>
      <button onClick={() => openSignForm(true)}>Open Sign Up Form</button>
      <button onClick={() => openSignForm(false)}>Sign In</button>
      <SignUpForm
        addUser={addUser}
        openSignForm={openSignForm}
        isSignFormOpen={isSignFormOpen}
        isSignUp={isSignUp}
      />
    </div>
  );
};

export default Header;
