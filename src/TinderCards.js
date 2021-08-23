import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {

    const [people, setpeople] = useState([
        {
            name: 'Pikachu',
            url: 
            "https://www.nintendoworldreport.com/media/38183/4/1.jpg",
        },
        {
            name: 'Squirtle',
            url: 
            "https://i.pinimg.com/originals/c9/97/ce/c997ce49e5bf21dd0c85caf60fba71a8.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map((person) =>(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >

                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>


                    </TinderCard>      
                ))}
            </div>  
        </div>
    );
}

export default TinderCards;
