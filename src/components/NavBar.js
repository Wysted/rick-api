import React from "react";
import "../style/navBar.css"
import Imagen from "../images/Rick-and-Morty.png"

function NavBar(){
    return (
        <div className="container__navbar">
            <img src={Imagen} alt="Imagen rick and morty"></img>
        </div>
    );
}

export default NavBar