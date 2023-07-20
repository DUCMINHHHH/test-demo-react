import { useState } from "react";
import "./signUp.scss";
import { useNavigate } from "react-router-dom";
import { postSignup } from "../../services/apiServices";
import { toast } from "react-toastify";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const [isVisible, setVisible] = useState(false);

  const handleSignup = async () => {
    let data = await postSignup(email, password, username);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="signup-container">
      <div className="header">
        <span>Already have an account? </span>
        <button onClick={() => navigate("/login")}>Log in</button>
      </div>
      <div className="signup-content">
        <div className="title col-4 mx-auto">Marco Minh</div>
        <div className="desc col-4 mx-auto">
          Get better data with conversational form, surveys, quizzes & more
        </div>
        <div className="content-form col-4 mx-auto">
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type={"text"}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>(*) Email</label>
            <input
              type={"email"}
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group pass-group">
            <label>(*) Password</label>
            <input
              className="form-control"
              type={!isVisible ? "password" : "text"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span className="icon" onClick={() => toggle()}>
              {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
          <div>
            <button className="btn-sign-up" onClick={() => handleSignup()}>
              Create my free account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
