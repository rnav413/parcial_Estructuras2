const Terminar = (listaChances) => {
    let totalDinero = 0;
    listaChances.forEach((chance) => (totalDinero += parseInt(chance.dinero)));
    alert(`Chances: ${JSON.stringify(listaChances)} \nTotal Dinero: ${totalDinero}`);
   
}


export default Terminar