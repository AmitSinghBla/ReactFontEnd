import React from "react";
import 'D:/ayushi/Project/ReactFontEnd/src/Styles/Login.css'

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
    <div>
    <div>
      {success && <h1>Login sucessfully</h1>}
      {message && <h2>Invalid userName or Password</h2>}
    </div>
    <form className="login-container" onSubmit={onSubmitHandlder}>
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
    </div>
  );
};

export default Login;
