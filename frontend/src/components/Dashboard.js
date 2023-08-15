import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "./ChatContainer";

const Dashboard = () => {
  const [lastDirection, setLastDirection] = useState();
  const characters = [
    {
      name: "Yash Shah",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "Nilesh Shah",
      url: "https://i.imgur.com/MWAcQRM.jpeg",
    },
    {
      name: "Ram Shankar",
      url: "https://i.imgur.com/dmwjVjG.jpeg",
    },
  ];

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      <ChatContainer/>
      <div className="swipe-container">
        <div className="card-container">
          {characters.length > 0 &&
            characters.map((character) => (
              <TinderCard
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
              >
                <div
                  style={{ backgroundImage: "url(" + character.url + ")" }}
                  className="card"
                >
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            ))}

          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
