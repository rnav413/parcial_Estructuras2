import React from 'react';
import './App.css';
import Terminar from './Terminar';
import { useState } from "react";

function App() {

  const [chance, setChance] = useState('');
  const [dinero, setDinero] = useState('');
  const [listaChances, setListaChances] = useState([]);
  const [resultado, setResultado] = useState(false);
  const [textoFinal, setTexto] = useState('');

  const Agregar = () => {
    if(dinero <= 0){
      alert("Digite un precio mayor a 0")
    }
    else if (chance.length == 3 || chance.length == 4){
      setListaChances([...listaChances, { chance, dinero }]);
      setChance('');
      setDinero('');
      setResultado(false)
    }
    else{
      alert("Digite un numero de chance de 3 a 4 digitos")
    }
  
    

}
    const res = () => {
      let total = Terminar(listaChances)
      let texto = ""
      listaChances.forEach((elemento) => (texto += "Chance: "+ elemento.chance + "  Precio: " + elemento.dinero + "\n"));
      texto += "------------------- \n"+"Total a Pagar:" + total;
      setTexto(texto)
      setResultado(true)

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
      <button onClick ={res}>Terminar</button>
      
      
      <hr />

      {resultado && <div><textarea value = {textoFinal} onChange={(e) => setTexto(e.target.value)} className='AreaResultado' ></textarea></div>}

    </div>
      </header>
    </div>
  );
}

export default App;
