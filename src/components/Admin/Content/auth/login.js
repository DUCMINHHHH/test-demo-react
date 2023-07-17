import { useState } from "react";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("me");
  };

  return (
    <div className="login-container">
      <div className="header">Dont have an account yet?</div>
      <div className="title col-4 mx-auto">Marco Minh</div>
      <div className="desc col-4 mx-auto">Hello, who is this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={"Password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forget-password">Forgot Your Password ? </span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            Login to Marco Minh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
