var variable;
variable = "Hola";
console.log(variable);
console.log(typeof(variable));


//Scope local
function saludar(){
    let nombre = "Fran";
    console.log("Hola " + nombre);
}

saludar();

//Scope global
let nombre_2 = "Francisco"
function despedir(){
    console.log("Adios " + nombre_2);
}

despedir();
console.log(nombre_2);