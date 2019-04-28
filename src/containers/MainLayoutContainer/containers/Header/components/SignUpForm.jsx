import React from "react";

const SignUpForm = ({ addUser, openSignForm, isSignFormOpen, isSignUp }) => {
  let funcState = {
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
    <>
      {isSignFormOpen && (
        <div>
          <h3>Enter the form</h3>
          <input placeholder="username" onChange={handleChangeName} />
          <input placeholder="password" onChange={handleChangePassword} />
          {isSignUp ? (
            <div>
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
                onClick={() => {
                  addUser(
                    funcState.userName,
                    funcState.password,
                    funcState.isAdmin
                  );
                  openSignForm();
                }}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <button type="submit">Sign In</button>
          )}
        </div>
      )}
    </>
  );
};

export default SignUpForm;
