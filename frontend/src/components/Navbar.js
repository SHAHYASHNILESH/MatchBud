import React, { useState } from "react";
import MatchBud from "../images/MatchBud.jpeg";
import Logo from "../images/Logo.png"

const Navbar = ({ authToken,minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={MatchBud} alt="logo" />
      </div>

      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Navbar;
