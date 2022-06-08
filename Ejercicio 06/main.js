function suma(valorA, valorB, valorC){
    sumatorio = valorA + valorB + valorC;
    
    return sumatorio;
}

console.log(suma(2, 3, 4));


function completarNombre(nombre, apellido1, apellido2){
    nombreCompleto = nombre + " " + apellido1 + " " + apellido2;

    return nombreCompleto;
}

console.log("Francisco", "Rueda", "Ruiz-Ruano")

function dosNumeros(numero1, numero2){
    
    if (numero1 > numero2){
        console.log(numero1);

    } else if (numero2 > numero1){
        console.log(numero2);
    }
}

dosNumeros(2, 100);