import React from "react";

import Feedback from "./Feedback";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import "./styles.css";

export default function App() {
  const [username, setUser] = React.useState("");
  const [password, setPassWord] = React.useState("");
  return (
    <>
      <div id="login">
        <img
          id="logo"
          src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
          width="75"
          alt=""
        />
        <form>
          <input
            type="text"
            name="username"
            placeholder="Phone number, username, or email"
            id="username"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassWord(e.target.value)}
          />
          <button
            class="blue-btn"
            type="button"
            onClick={() => {
              console.log(username);
              console.log(password);
            }}
          >
            Log In
          </button>
        </form>

        <div className="orRow">
          <div className="line"></div>
          <div id="or">OR</div>
          <div className="line"></div>
        </div>
        <a href="https://www.instagram.com" id="FBLogin">
          <span className="fab fa-facebook-square"></span>Log in with Facebook
        </a>
        <div>
          <p id="loginError"></p>
        </div>
        <a href="https://www.instagram.com" id="forgotPW">
          Forgot password?
        </a>
      </div>
      <div id="signup">
        <p>
          Don't have an account? <a href="https://www.instagram.com">Sign up</a>
        </p>
      </div>
      <div id="getApp">
        <p>Get the app.</p>
        <div>
          <a href="https://www.instagram.com">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              width="135"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              width="135"
              alt=""
            />
          </a>
        </div>
      </div>

      <footer style={{ display: "flex", justifyContent: "center" }}>
        <p className="copyright">&copy; 2019 INSTAGRAM FROM FACEBOOK</p>
      </footer>
    </>
  );
}
