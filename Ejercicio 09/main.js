function binario(){
    resultado = Math.round(Math.random());
    
    return resultado;
}

function roundPi(){
    roundedPi = (Math.PI).toFixed(3);
    
    return roundedPi;
}

console.log(binario());
console.log(roundPi());