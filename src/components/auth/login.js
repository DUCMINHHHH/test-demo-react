import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner2 } from "react-icons/im";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("invalid email");
      return;
    }

    if (!password) {
      toast.error("invalid password");
      return;
    }

    // loading
    setIsLoading(true);

    // submit apis
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      Dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Dont have an account yet? </span>
        <button onClick={() => navigate("/signup")}>sign up</button>
      </div>
      <div className="login-content">
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
            <button
              className="btn-submit"
              onClick={() => handleLogin()}
              disabled={isLoading}
            >
              {isLoading === true && <ImSpinner2 className="loaderIcon" />}
              <span>Login to Marco Minh</span>
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
    </div>
  );
};

export default Login;
