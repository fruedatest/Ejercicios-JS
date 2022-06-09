function changeOA(palabra0){
    for (let index = 0; index < palabra0.length; index++) {
        let caracter = palabra0.charAt(index);
        if((caracter == 'A') || (caracter = 'a')){
            caracter.replace('a', 'o');
            console.log(caracter[index]);
        }
        
    }
}
changeOA("palabra");



function checkString(palabra){
    if (palabra.startsWith("aca")){
        console.log("La palabra empieza por 'aca'");
    }else{
        console.log("La palabra no empieza por 'aca'");
    }
}

checkString("academia");
checkString("escuela");


function saludar(){
    console.log('Hola\n'.repeat(3));
}

saludar();