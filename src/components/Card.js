import React, {useState} from "react";
import "../style/card.css"

function Card({ character }){

    const [isInfoVisible, setInfoVisibility] = useState(false);

    
    return (
        <div  className="container__card" onClick={() => setInfoVisibility(!isInfoVisible)}>
            <img className="card__image" src={ character.image } alt={ character.name }/> 
            {/* <div className={`card__info ${isInfoVisible ? "card__info--visible" : ""}`}> */}
            <div className="card__info">
                <p className="card__info-name">{ character.name }</p>
                <p className="card__info-status">{ character.status }</p>
                <p className="card__info-species">{ character.species }</p>
                <p className="card__info-gender">{ character.gender }</p>
                <p className="card__info-origin">{ character.origin.name }</p>
            </div>
        </div>
    )
}

export default Card;
