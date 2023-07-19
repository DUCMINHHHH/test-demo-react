import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Dont have an account yet? </span>
        <button>sign up</button>
      </div>
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
            type={"password"}
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
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            Go To HomePage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
