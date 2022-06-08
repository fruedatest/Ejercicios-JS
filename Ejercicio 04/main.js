let saludar = () => {
    let nombre = "Francisco", apellidos = "Rueda";
    console.log("Hola" + " " +nombre+ " "+apellidos);

};

saludar();


function funcion(variable){
    
    console.log(variable);
}

funcion(true);


function mostrarValores(...valores){
    valores.forEach(element => {
        console.log(element);
    });
}

mostrarValores(1, 2, 3, 4, 5);