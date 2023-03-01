import React from 'react';
import './App.css';
import Terminar from './Terminar';
import { useState } from "react";

function App() {

  const [chance, setChance] = useState('');
  const [dinero, setDinero] = useState('');
  const [listaChances, setListaChances] = useState([]);

  const Agregar = () => {
    if(dinero <= 0){
      alert("Digite un precio mayor a 0")
    }
    else if (chance.length == 3 || chance.length == 4){
      console.log(chance)
      console.log(dinero)
      setListaChances([...listaChances, { chance, dinero }]);
      setChance('');
      setDinero('');
    }
    else{
      alert("Digite un numero de chance de 3 a 4 digitos")
    }

}

  return (
    <div className="App">
      <header className="App-header">
      <div>
      <h1>Página de Chances</h1>
      <hr />
      <label>
        Chance:
        <input type="number" value={chance} onChange={(e) => setChance(e.target.value)}/>
      </label>
      <br />
      <label>
        Dinero:
        <input type="number" value={dinero} onChange={(e) => setDinero(e.target.value)}/>
      </label>
      <br />
      <button onClick={Agregar}>Agregar</button>
      <button onClick ={() => Terminar(listaChances)}>Terminar</button>
      <hr />


    </div>
      </header>
    </div>
  );
}

export default App;