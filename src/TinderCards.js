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
            "https://www.pngitem.com/pimgs/m/206-2063781_tiny-turtle-pokemon-squirtle-hides-in-its-shell.png",
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
