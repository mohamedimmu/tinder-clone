import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import instance from "../../axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try{
        const req = await instance.get("/tinder/cards");
        console.log(req.data);
        setPeople(req.data);
      }
      catch(err) {
        console.error('Error:', err);
      }
    }

    fetchData();

  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log(`${nameToDelete} removing`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`)
  }; 

  return (
    <div className="tinderCards__container">
      <div className="tinderCards__wrapper">
        {
          people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.id}
              preventSwipe={["up", "down"]}
              onSwipe={(direction) => swiped(direction, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))
        }
      </div>
    </div>
  );
}

export default TinderCards;
