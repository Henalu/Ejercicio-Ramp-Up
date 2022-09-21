//Ejercicio 1: Solicita al usuario tres números enteros e indícale cuál es el menor.
function ejercicio1() {
    alert("Inserta tres números enteros para saber cuál es menor:");

    var numero1 = 0; //permite al usuario escribir en la ventana emergente
    var numero2 = 0; //el parseInt transforma el string en numero entero
    var numero3 = 0;
    var contador = 3;

    do {
        var numero1 = parseInt(prompt("Introduce el primer número", 0));
        var numero2 = parseInt(prompt("Introduce el segundo número", 0));
        var numero3 = parseInt(prompt("Introduce el tercer número", 0));

        if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
            contador--;
            alert('Por favor, introduce solamente número, los caracteres no son válidos. Le quedan: ' + contador + ' intentos');
        }
    } while ((isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) && contador > 0);

    if (numero1 == numero2 && numero1 == numero3) {
        alert('Los tres numeros son iguales ');
    } else if (numero1 < numero2 && numero1 < numero3) {
        alert('El menor de los numeros es: ' + numero1);
    } else if (numero2 < numero1 && numero2 < numero3) {
        alert('El menor de los numeros es: ' + numero2);
    } else if (numero3 < numero1 && numero3 < numero2) {
        alert('El menor de los numeros es: ' + numero3);
    }
}

//Ejercicio 2: Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
//las palabras son arrays de cadenas de caracteres, asi que los podemos recorrer)
function ejercicio2() {
    alert("Escribe una frase de al menos tres palabras diferentes y una letra");

    var frase = prompt("Escribe aquí tu frase"); // frase = lo que escriba el usuario
    var letra = prompt("Escribe aquí tu letra"); // letra = letra que escoja el usuario
    var cont = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == letra) {
            cont++;
        }
    }
    alert("La letra " + letra + " aparece " + cont + " veces");
}

//Ejercicio 3: Suma o resta (según elija el usuario) dos números reales => (se resuelve bien con un switch)
function ejercicio3() {
    alert("Haz una suma o una resta")

    var numero1 = parseFloat(prompt("Escribe el primer numero"));

    var numero2 = parseFloat(prompt("Escribe aqui el segundo numero"));

    do {
        var decision = prompt("elija sumar o restar: + o -")
        if (decision != '+' && decision != '-' && decision != 'restar' && decision != 'sumar') {
            alert('elija bien su opcion')
        }
    } while (decision != '+' && decision != '-' && decision != 'restar' && decision != 'sumar');
}

//Ejercicio 4 (hay que hacerlo con un bucle Do While...)
//Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide. (dispone de 3 intentos)
function ejercicio4() {

    var usuario_fuengirola = 'fuengirola';
    var contraseña_fuengirola = 'fuengirola2022';
    var contador = 3;
    var validacion = '';

    do {
        var usuario = prompt("Escriba su nombre de Usuario");
        var contraseña = prompt("Escriba su contraseña");
        if ((usuario != usuario_fuengirola || contraseña != contraseña_fuengirola) && contador > 0) {
            contador--;
            alert('Su usuario o contraseña son incorrectos, pruebe nuevamente. Le quedan ' + contador + ' intentos');
        } else {
            validacion = confirm('¿El usuario ' + usuario + ' y la contraseña ' + contraseña + ' son correctos?');
            alert('Se ha iniciado sesion correctamente')
        }
    } while ((usuario != usuario_fuengirola || contraseña != contraseña_fuengirola || validacion == false) && contador > 0);
}

//Ejercicio 5 (hacer un switch)
function ejercicio5() {
    var letra = ' ';
    var imprime = ' ';
    do {
        var letra = prompt("Escribe una letra");
        switch (letra) {
            case 'a':
                imprime = 7
                break;
            case 'b':
                imprime = 9
                break;
            case 'c':
                imprime = 101
                break;
            default:
                imprime = 'te has equivocado de letra'
                break;
        }
        alert(imprime);
    } while (imprime == 'te has equivocado de letra')
}

//Ejercicio 6 - La burbuja
function ejercicio6() {
    var lista = ["caballo", "burro", "leon", "jirafa", "gorila", "aguila", "tigre"];
    //decimos lista.lenght -1 porque el bucle va comparando elementos de dos en dos, entonces, en una lista de 7 elementos tienes 6 comparaciones.
    for (let i = 0; i < lista.length - 1; i++) {
        for (let j = 0; j < lista.length - i- 1; j++) {
            if (lista[j] > lista[j + 1]) {
                [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
            }
        }
    }

    alert(lista);
    console.log(lista)
}

function prueba() {
    var lista2 = [34, 245, 134, 2536, 3456, 1, 3, 0, 23, 54, 765, 90];

    for (let i = 0; i < lista2.length - 1; i++) { //importante fijarse bien en la condicion para no iniciar un bucle infinito
        for (let j = 0; j < lista2.length - i - 1; j++) {//le restamos a lista.lengt la i y 1 porque asumimos que el ultimo elemento ya esta ordenado y no hace falta repetir la comparacion
            if (lista2[j] > lista2[j + 1]) {
                [lista2[j], lista2[j + 1]] = [lista2[j + 1], lista2[j]];
            }
        }
    }
    console.log(lista2);
}

function correcion() { //las anteriores estan bien pero no sirven fuera de javascript
    var lista3 = [34, 245, 134, 2536, 3456, 1, 3, 0, 23, 54, 765, 90];

    for (let i = 0; i < lista3.length - 1; i++) { //importante fijarse bien en la condicion para no iniciar un bucle infinito
        for (let j = 0; j < lista3.length - i - 1; j++) {//le restamos a lista.lengt la i y 1 porque asumimos que el ultimo elemento ya esta ordenado y no hace falta repetir la comparacion
            if (lista3[j] > lista3[j + 1]) {
                let aux = lista3[j];
                lista3[j] = lista3[j+1];
                lista3[j+1] = aux;
            }
        }
    }
    console.log(lista3);
}


