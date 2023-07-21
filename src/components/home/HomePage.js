import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-video">
        <video
          poster="/static/homepage/hero/hero-poster.webp"
          // width="900"
          muted
          loop
          autoPlay="autoPlay"
        >
          <source
            data-testid="currentWebmVideo"
            src={videoHomepage}
            type="video/webm"
          />
          <source
            data-testid="currentDefaultVideo"
            src={videoHomepage}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="homepage-content">
        <div className="homepage-title">Forms that break the norm</div>
        <div className="homepage-desc">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be refreshingly different.
        </div>
        <div>
          {isAuthenticated === false ? (
            <button className="btn-homepage" onClick={() => navigate("/login")}>
              Get started—it's free
            </button>
          ) : (
            <button className="btn-homepage" onClick={() => navigate("/users")}>
              Doing Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
