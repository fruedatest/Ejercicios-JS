resultado = Math.round(Math.random());

console.log(resultado);



function caraCruz(){
    if (resultado == 0) {
        return console.log("cruz");
    } else if (resultado == 1) {
        return console.log("cara");
    }
}