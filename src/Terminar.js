const Terminar = (listaChances) => {
    let totalDinero = 0;
    listaChances.forEach((chance) => (totalDinero += parseInt(chance.dinero)));
    return totalDinero
}


export default Terminar
