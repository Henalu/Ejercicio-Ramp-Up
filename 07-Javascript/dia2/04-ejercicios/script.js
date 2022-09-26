// 0. Una función que devuelva el número de numeros que hay hasta un entero solicitado al usuario //// Este me lo invente sin querer
function ejercicio0() {
    var numero_entero = 0;
    var contador = 3;
    do {
        var numero_entero = parseInt(prompt('Introduce un numero entero'));
        if (isNaN(numero_entero)) {
            contador--;
            alert('Por favor, introduzca unicamente números, los caracteres no son válidos, pruebe otra vez. Le quedan ' + contador + ' intentos');
        } else if (numero_entero <= 0) {
            contador--;
            alert('Por favor, introduzca unicamente números mayores que cero, pruebe otra vez. Le quedan ' + contador + ' intentos');
        }
    } while ((isNaN(numero_entero) && contador > 0) || (contador > 0 && numero_entero <= 0));

    // var numero_entero = toString(numero_entero); Sirve para transformar a string

    for (var i = 1; i < numero_entero; i++) {
        var cifras = [i];
        cifras.length = i;
    }
    console.log(cifras);
    alert('Entre 0 y el numero ' + numero_entero + ' hay ' + cifras.length + ' numeros');
}

// 1. Una función que devuelva el número de cifras de un entero solicitado al usuario //// No lo resolvi yo, pero me vale
function ejercicio1() {
    var numero_entero = 0;
    var contador = 3;
    do {
        var numero_entero = parseInt(prompt('Introduce un numero entero'));
        if (isNaN(numero_entero)) {
            contador--;
            alert('Por favor, introduzca unicamente números, los caracteres no son válidos, pruebe otra vez. Le quedan ' + contador + ' intentos');
        } else if (numero_entero < 0) {
            contador--;
            alert('Por favor, introduzca unicamente números mayores que cero, pruebe otra vez. Le quedan ' + contador + ' intentos');
        }
    } while ((isNaN(numero_entero) && contador > 0) || (contador > 0 && numero_entero < 0));

    console.log(numero_entero);
    console.log(typeof (numero_entero));
    var contador = 0;

    do {
        numero_entero = Math.floor(numero_entero / 10); //El Math.floor hace que se redondee la operacion
        contador++;
    } while (numero_entero != 0);

    alert(contador);

    /*
    203/10 = 20     resto=3
    20 / 10 = 2     resto=0
    2 / 10 = 0      resto=2
    */
}

// 2. Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario //// HECHO CON SUDOR Y LAGRIMAS
var asteriscos = [''];
var contadorAsteriscos = 0;

function cantidadAsteriscos() {
    do {
        var decisionAsteriscos = parseInt(prompt('Introduzca con un número el tamaño de la secuencia de asteriscos que desea ver: '));
        if (isNaN(decisionAsteriscos)) {
            alert('Introduzca un numero, otro tipo de caracteres no son validos');
        } else {
            contadorAsteriscos = decisionAsteriscos;
        }
    } while (isNaN(decisionAsteriscos));

    return contadorAsteriscos;
}

function ejercicio2() {
    cantidadAsteriscos();
    for (var i = 0; i < contadorAsteriscos; i++) {
        asteriscos = asteriscos + ['*'];
        alert(asteriscos);
    }
    asteriscos = [''];
}

// 3. Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno): *+_*+_*+_*+_  //// HECHO CON SUDOR Y LAGRIMAS
var simbolos = [''];
var contadorSimbolos = 0;

function cantidadSimbolos() {
    do {
        var decisionSimbolos = parseInt(prompt('Indique con un numero entero cuan grande quiere que sea la cadena de simbolos'));
        if (isNaN(decisionSimbolos)) {
            alert('Introduzca numeros validos, otro tipo de caracteres no lo son')
        } else {
            contadorSimbolos = decisionSimbolos
        }
    } while (isNaN(decisionSimbolos)) {

    }
    return contadorSimbolos;
}

function ejercicio3() {
    cantidadSimbolos();
    for (i = 0; i < contadorSimbolos; i++) {
        simbolos = simbolos + ['*+_'];
        alert(simbolos);
    }
    contadorSimbolos = ['']; // Para que el contador se reinicie y podamos repetir desde cero cada vez que apretamos el boton ;)
}
//4. Una función que permita mostrar un triángulo como el siguiente:
/*

*
**
***
****
*****     

*/
function prueba() {
    var confirmacion = confirm('¿Quiere ver un triangulo de asteriscos?')
    if (confirmacion == true) {
        alert(
            '*' + '\n'
            + '**' + '\n'
            + '***' + '\n'
            + '****' + '\n'
            + '*****');
    } else {
        alert('Hasta la proxima')
    }
}

var elementosTriangulo = [''];
var contadorTriangulo = 0;

function elegirElementos() {
    do {
        var decisionElementos = parseInt(prompt('Elija el numero de filas (altura) que quiere que tenga la piramide'))
        if (isNaN(decisionElementos)) {
            alert('Solamente los numeros son validos, pruebe otra vez')
        } else {
            contadorTriangulo = decisionElementos;
        }
    } while (isNaN(decisionElementos));
    return contadorTriangulo;
}

function ejercicio4() {
    elegirElementos();
    for (i = 0; i < contadorTriangulo; i++) {
        for (j = 0; j <= i; j++) {
            elementosTriangulo = elementosTriangulo + '*';
        }
        elementosTriangulo = elementosTriangulo + '\n';
    }
    alert(elementosTriangulo);
}

// 5. Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)
var diaDelAño = 0;
var dia = 0;
var mes = [''];

var diaDelAño2 = 0;
var dia2 = 0;
var mes2 = [''];

diferencia = 0;

function elegirDia() {
    do {
        var seleccionarDia = parseInt(prompt('Introduce el día del mes:'));
        if (isNaN(seleccionarDia)) {
            alert('por favor introduce correctamente el día del mes');
        }else if (seleccionarDia > 30){
            alert('por favor introduce correctamente el día del mes');
        }
    } while (isNaN(seleccionarDia) || seleccionarDia > 30);

    dia = seleccionarDia;
    return dia;
}

function elegirMes() {
    do {
        var seleccionarMes = prompt('Introduce el mes:');
        if (!isNaN(seleccionarMes)) {
            alert('por favor, introduzca el mes correctamente')
        }
    } while (!isNaN(seleccionarMes));

    mes = seleccionarMes;
    return mes;
}

function contadorDias() {
    switch (mes) {
        case 'enero':
            diaDelAño = dia;
            break;
        case 'febrero':
            diaDelAño = (dia + 30);
            break;
        case 'marzo':
            diaDelAño = (dia + 60);
            break;
        case 'abril':
            diaDelAño = (dia + 90);
            break;
        case 'mayo':
            diaDelAño = (dia + 120);
            break;
        case 'junio':
            diaDelAño = (dia + 150);
            break;
        case 'julio':
            diaDelAño = (dia + 180);
            break;
        case 'agosto':
            diaDelAño = (dia + 210);
            break;
        case 'septiembre':
            diaDelAño = (dia + 240);
            break;
        case 'octubre':
            diaDelAño = (dia + 270);
            break;
        case 'noviembre':
            diaDelAño = (dia + 300);
            break;
        case 'diciembre':
            diaDelAño = (dia + 330);
            break;
        default:
            diaDelAño = 0;
            break;
    }

    return diaDelAño;
}

function elegirDia2() {
    do {
        var seleccionarDia = parseInt(prompt('Introduce el día del mes:'));
        if (isNaN(seleccionarDia)) {
            alert('por favor introduce correctamente el día del mes');
        }else if (seleccionarDia > 30){
            alert('por favor introduce correctamente el día del mes');
        }
    } while (isNaN(seleccionarDia) || seleccionarDia > 30);

    dia2 = seleccionarDia;
    return dia2;
}

function elegirMes2() {
    do {
        var seleccionarMes = prompt('Introduce el mes:');
        if (!isNaN(seleccionarMes)) {
            alert('por favor, introduzca el mes correctamente')
        }
    } while (!isNaN(seleccionarMes));

    mes2 = seleccionarMes;
    return mes2;
}

function contadorDias2() {
    switch (mes2) {
        case 'enero':
            diaDelAño2 = dia2;
            break;
        case 'febrero':
            diaDelAño2 = (dia2 + 30);
            break;
        case 'marzo':
            diaDelAño2 = (dia2 + 60);
            break;
        case 'abril':
            diaDelAño2 = (dia2 + 90);
            break;
        case 'mayo':
            diaDelAño2 = (dia2 + 120);
            break;
        case 'junio':
            diaDelAño2 = (dia2 + 150);
            break;
        case 'julio':
            diaDelAño2 = (dia2 + 180);
            break;
        case 'agosto':
            diaDelAño2 = (dia2 + 210);
            break;
        case 'septiembre':
            diaDelAño2 = (dia2 + 240);
            break;
        case 'octubre':
            diaDelAño2 = (dia2 + 270);
            break;
        case 'noviembre':
            diaDelAño2 = (dia2 + 300);
            break;
        case 'diciembre':
            diaDelAño2 = (dia2 + 330);
            break;
        default:
            diaDelAño2 = 0;
            break;
    }

    return diaDelAño2;
}

function fecha1() { //Engloba tres funciones dentro de ella
    elegirDia();
    do {
        elegirMes();
        contadorDias();
        if(diaDelAño==0){
            alert('Por favor escriba correctamente el mes, ejemplo: enero')
        }
    } while(diaDelAño==0) //Así evitamos que puedas escribir mal el mes
    alert('La primera fecha elegida se corresponde al dia ' + dia + ' del mes de ' + mes + ' que equivale al dia del año: ' + diaDelAño)
}

function fecha2() { //Engloba tres funciones dentro de ella
    elegirDia2();
    do{
    elegirMes2();
    contadorDias2();
    if(diaDelAño2==0){
        alert('Por favor escriba correctamente el mes, ejemplo: enero')
    }
    }while(diaDelAño2==0)
    alert('La segunda fecha elegida se corresponde al dia ' + dia2 + ' del mes de ' + mes2 + ' que equivale al dia del año: ' + diaDelAño2)
}

function ejercicio5() { //Funcion Final que engloba las anteriores unas dentro de otras.
    fecha1();
    fecha2();

    if (diaDelAño > diaDelAño2) {
        var resultado = (diaDelAño - diaDelAño2);
        diferencia = resultado;
        alert('Hay una diferencia de ' + diferencia + ' dias entre la primera fecha elegida y la segunda');
    } else if (diaDelAño2 > diaDelAño) {
        var resultado = (diaDelAño2 - diaDelAño);
        diferencia = resultado;
        alert('Hay una diferencia de ' + diferencia + ' dias entre la segunda fecha elegida y la primera');
    } else {
        alert('ambas fechas se corresponden al mismo día del año');
        diferencia = 0;
    }


}