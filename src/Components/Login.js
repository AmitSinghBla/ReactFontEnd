import React from "react";
import '../Styles/Login.css'

const Login = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const onSubmitHandlder = (event) => {
    event.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: password,
        // expiresInMins: 60, // optional
      }),
    }).then((res) => {
      if (res.ok) {
        setSuccess(true);
        setMessage(false);
      } else {
        console.log("Invalid");
        setSuccess(false);
        setMessage(true);
      }
    });
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form className="login-container" onSubmit={onSubmitHandlder}>
    <div className="error-text">
    {message && <p>Invalid userName or Password</p>}
    {success && <p>Login sucessfully</p>}
    </div>

      <input
        placeholder="userame"
        value={userName}
        onChange={userNameHandler}
        type="text"
      />

      <input
        placeholder="password"
        value={password}
        onChange={passwordHandler}
        type="password"
      />

      <button type="submit">LOGIN</button>

      <p className="signup-text">Not registered? <span className="signup-text-account">Create an account</span> </p>
    </form>
  );
};

export default Login;
