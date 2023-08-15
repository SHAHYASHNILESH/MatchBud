import React, { useState } from "react";
import Navbar from "./Navbar";
import Authmodal from "./Authmodal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp,setIsSignUp]=useState(true);

  const authToken = false;

  const handleClick = () => {

    console.log("Clicked");
    setShowModal(true);
    setIsSignUp(true);

  };

  return (
    <div className="overlay">
      <Navbar minimal={false} setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp}/>
      <div className="home">
        <h1 style={{ color: "white" }} className="primary-title">Welcome to MatchBud</h1>
        <h2 style={{ color: "white", fontStyle: "italic", fontWeight:'bolder'}}>
          Find your True Soulmate....
        </h2>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
            <Authmodal setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp}/>
        )}
      </div>
    </div>
  );
};

export default Home;
