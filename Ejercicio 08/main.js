var mes = prompt("Introduce el mes (0-12)");

switch (mes) {
  case '1':
    alert("Enero");
    break;

  case '2':
    alert("Febrero");
    break;

  case '3':
    alert("Marzo");
    break;

  case '4':
    alert("Abril");
    break;

  case '5':
    alert("Mayo");
    break;

  case '6':
    alert("Junio");
    break;

  case '7':
    alert("Julio");
    break;

  case '8':
    alert("Agosto");
    break;

  case '9':
    alert("Septiembre");
    break;

  case '10':
    alert("Octubre");
    break;

  case '11':
    alert("Noviembre");
    break;

  case '12':
    alert("Diciembre");
    break;

  default:
    alert("Mes desconocido");
    break;
}


var numero = prompt('Introduce el numero a convertir en String: ');

switch (numero) {
  case '1':
    resultado = numero.toString();
    alert('El numero convertido es: ' 
    + numero + ', en String es: ' 
    + resultado + ' y su tipo de dato es: ' 
    + typeof(resultado));
    break;

    case '2':
    resultado = numero.toString();
    alert('El numero convertido es: ' 
    + numero + ', en String es: ' 
    + resultado + ' y su tipo de dato es: ' 
    + typeof(resultado));
    break;

    case '3':
    resultado = numero.toString();
    alert('El numero convertido es: ' 
    + numero + ', en String es: ' 
    + resultado + ' y su tipo de dato es: ' 
    + typeof(resultado));
    break;

    case '4':
    resultado = numero.toString();
    alert('El numero convertido es: ' 
    + numero + ', en String es: ' 
    + resultado + ' y su tipo de dato es: ' 
    + typeof(resultado));
    break;

    case '5':
    resultado = numero.toString();
    alert('El numero convertido es: ' 
    + numero + ', en String es: ' 
    + resultado + ' y su tipo de dato es: ' 
    + typeof(resultado));
    break;

  default:
    alert('Número no permitido!');
    break;
}
