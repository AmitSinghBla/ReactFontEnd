import React from "react";

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
    <form className="login-form" onSubmit={onSubmitHandlder}>
      {success && <h1>Login sucessfully</h1>}
      {message && <h2>Invalid userName or Password</h2>}

      <input
        placeholder="Enter userName"
        value={userName}
        onChange={userNameHandler}
      />

      <input
        placeholder="Enter Password"
        onChange={passwordHandler}
        type="password"
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
