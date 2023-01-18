import React from "react";
import "../style/button.css"

function Button({ prev, next, onPrevius, onNext }){
    const handlePrevius = () => {
        onPrevius();
    }    
    const handleNext = () => {
        onNext();
    } 
    return (
        <div className="container__buttons">
            {
                prev ? 
                <button className = "buttons_button1" onClick = {handlePrevius} value = "←" >←</button>
                : null
            }
            {
                next ? 
                <button className = "buttons_button2" onClick = {handleNext} value = "→" >→</button>
                : null
            }

        </div>
    );
}

export default Button