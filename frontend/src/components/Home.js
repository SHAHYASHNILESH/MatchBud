import React, { useState } from "react";
import Navbar from "./Navbar";
import Authmodal from "./Authmodal";
import { useCookies } from "react-cookie";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;

  const handleClick = () => {
    if (authToken) {
      removeCookie("UserId", cookies.UserId);
      removeCookie("AuthToken", cookies.AuthToken);
      window.location.reload();
      return;
    }
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <Navbar
        authToken={authToken}
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 style={{ color: "white" }} className="primary-title">
          Welcome to MatchBud
        </h1>
        <h2
          style={{
            color: "yellow",
            fontStyle: "italic",
            fontSize:'45px',
            fontFamily:'sans-serif',
          }}
        >
          Do you Believe in <b style={{color:'red', fontFamily:'cursive'}}>Love</b> at First Swipe?{" "}
        </h2>

        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
          <Authmodal
            setShowModal={setShowModal}
            setIsSignUp={setIsSignUp}
            isSignUp={isSignUp}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
