import React from "react";

const SignUpForm = ({ addUser }) => {
  var funcState = {
    userName: "",
    password: "",
    isAdmin: ""
  };

  const handleChangeName = ({ target: { value } }) => {
    funcState.userName = value;
  };

  const handleChangePassword = ({ target: { value } }) => {
    funcState.password = value;
  };

  const handleChangeStatus = ({ target: { value } }) => {
    funcState.isAdmin = value;
  };

  return (
    <div>
      <h3>Enter the form</h3>
      <input placeholder="username" onChange={handleChangeName} />
      <input placeholder="password" onChange={handleChangePassword} />
      <p>
        <input
          type="radio"
          name="status"
          value="true"
          onChange={handleChangeStatus}
        />
        Admin
      </p>
      <p>
        <input
          type="radio"
          name="status"
          value="false"
          onChange={handleChangeStatus}
        />
        User
      </p>
      <button
        type="submit"
        onClick={() =>
          addUser(funcState.userName, funcState.password, funcState.isAdmin)
        }
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUpForm;
