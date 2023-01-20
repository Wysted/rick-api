import './App.css';
import { useEffect, useState } from 'react';
import NavBar from "./components/NavBar"
import Card from "./components/Card"
import Button from "./components/Button"
import { getCharacters } from './services/api';



function App() {

    const [characters, setCharacters] = useState([]);
    const [info,setInfo] = useState({})

    useEffect(() => {
      getCharacters()
        .then(response => {
            setCharacters(response.data.results)
            setInfo(response.data.info)
        });
    }, []);
   
    const onPrevius = () =>{
        getCharacters(info.prev)
        .then(response => {
            setCharacters(response.data.results);
            setInfo(response.data.info);
        })
    }
    
    const onNext = () => {
        getCharacters(info.next)
        .then(response => {
            setCharacters(response.data.results);
            setInfo(response.data.info);
        })
    }
    

    return (
        <div className="App">
            <NavBar/>
            <Button prev={ info.prev } next = { info.next } onPrevius={ onPrevius } onNext = { onNext }/>
            <div className="container__cards">
                {   !characters ? "Cargando..." : 
                    characters.map((item,index) => {
                        return <Card key = {item.id} character={ item } />
                    })

                }
            </div>
            
        </div>
    );
}
export default App;
