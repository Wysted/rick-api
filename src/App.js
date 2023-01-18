import './App.css';
import { useEffect, useState } from 'react';
import NavBar from "./components/NavBar"
import Card from "./components/Card"
import Button from "./components/Button"
import Description  from './components/Description';

function App() {

    const initialUrl = "https://rickandmortyapi.com/api/character";
    
    const [character, setCharacter] = useState([]);
    const [info,setInfo] = useState({})

    const fetchCharacter = (initialUrl) => {
        fetch(initialUrl)
            .then(response => response.json())
            .then(data => {
                setCharacter(data.results)
                setInfo(data.info)
            })
            .catch(error => console.log(error))
    }
    useEffect(()=>{
        fetchCharacter(initialUrl);
    },[])


    const onPrevius = () =>{
        fetchCharacter(info.prev)
    }
    const onNext = () =>{
        fetchCharacter(info.next)
    }
  

    return (
        <div className="App">
            <NavBar/>
            <Button prev={ info.prev } next = { info.next } onPrevius={ onPrevius } onNext = { onNext }/>
            <div className="container__cards">
                {   !character ? "Cargando..." : 
                    character.map((item,index) => {
                        return <Card key = {item.id} character={ item } description={Description}/>
                    })

                }
            </div>
            
        </div>
    );
}

export default App;
