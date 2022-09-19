//Ejercicio 1
function ejercicio1 (){
    alert("Inserta tres números enteros:");

    var a = prompt("a="); //permite al usuario escribir en la ventana emergente
    b = prompt("b=");
    c = prompt("c=");
        a = parseInt(a); //transforma el texto en numeros enteros
        b = parseInt(b);
        c = parseInt(c);

    if (a <= b && a <= c) // Le damos una condición 
        alert(a); //Si se cumple muestra este pop up

        else { //Si no se cumple busca la siguiente condicion y así hasta que cumpla alguna
            if (b < a && b < c)
            alert(b);
            else { 
                if (c < a && c < b)
                alert(c); 
            }
        }
    }

//Ejercicio 2
    function ejercicio2(){
        alert("Escribe una frase de al menos tres palabras diferentes y una letra");

        var frase = prompt ("Escribe aquí tu frase"); // frase = lo que escriba el usuario
        letra = prompt ("Escribe aquí tu letra"); // letra = letra que escoja el usuario
        
        if (frase == letra)
            alert (letra)
    }

//Ejercicio 3
    function ejercicio3(){
        alert ("Haz una suma o una resta")

        var numero1 = prompt ("Escribe el primer numero");
        numero1 = parseFloat (numero1);

        numero2 = prompt ("Escribe aqui el segundo numero");
        numero2 = parseFloat (numero2);

        decision = prompt ("elije suma o resta")

        suma = (numero1 + numero2);

        resta = (numero1 - numero2);

        if (decision=="suma")
        alert (suma);
            else{
                if (decision=="resta")
                alert(resta)
            }
    }

//Ejercicio 4
    function ejercicio4(){
        var usuario = prompt ("Escriba su nombre de Usuario");
        contraseña = prompt ("Escriba su contraseña");

        validaUsuario = prompt ("¿Es su nombre de usuario correcto?  Usuario:" + usuario + "  " + "Responda si o no");

        if (validaUsuario == "si") // Esto seria más facil con un bucle pero no se cómo cerrarlo
            alert (validaContraseña = prompt ("¿Es su contraseña correcta?  Contraseña:" + contraseña + "  " + "Responda si o no"))
            else {
                usuario = prompt ("Escriba su nombre de Usuario");
                validaUsuario = prompt ("¿Es su nombre de usuario correcto?  Usuario:" + usuario + "  " + "Responda si o no");
                if (validaUsuario == "si")
                alert (validaContraseña = prompt ("¿Es su contraseña correcta?  Contraseña:" + contraseña + "  " + "Responda si o no"))
                    else {
                        usuario = prompt ("Escriba su nombre de Usuario");
                        validaUsuario = prompt ("¿Es su nombre de usuario correcto?  Usuario:" + usuario + "  " + "Responda si o no");
                        if (validaUsuario == "si")
                        alert (validaContraseña = prompt ("¿Es su contraseña correcta?  Contraseña:" + contraseña + "  " + "Responda si o no"))
                            else {
                                usuario = prompt ("Escriba su nombre de Usuario");
                                validaUsuario = prompt ("¿Es su nombre de usuario correcto?  Usuario:" + usuario + "  " + "Responda si o no");
                                if (validaUsuario == "si")
                                alert (validaUContraseña= prompt ("¿Es su contraseña correcta?  Contraseña:" + contraseña + "  " + "Responda si o no"))
                                    else{
                                        alert ("Error")
                                    }
                            }
                    }
            }
            
        if (validaContraseña == "si")
            alert ("Conseguido")
                else{
                    contraseña = prompt ("Escriba su contraseña");
                    validaContraseña = prompt ("¿Es su contraseña correcta?  Contraseña:" + contraseña + "  " + "Responda si o no")
                    if (validaContraseña== "si")
                        alert ("Conseguido")
                            else{
                            contraseña = prompt ("Escriba su contraseña");
                            validaContraseña = prompt ("¿Es su contraseña correcta?  Contraseña:" + contraseña + "  " + "Responda si o no")
                            if (validaContraseña== "si")
                            alert ("Conseguido")
                                else{
                                    contraseña = prompt ("Escriba su contraseña");
                                    validaContraseña = prompt ("¿Es su contraseña correcta?  Contraseña:" + contraseña + "  " + "Responda si o no")
                                    if (validaContraseña== "si")
                                        alert ("Conseguido")
                                            else{
                                                alert ("Error");
                                            }   
                                }   
                        }   
                }      
                    
        
        
    }

//Ejercicio 5
    function ejercicio5(){
        var letra = prompt ("Escribe una letra");

        if (letra == "a")
        alert ("7");
        else {
            if (letra == "b")
            alert ("9");
            else{
                if (letra =="c")
                alert ("101")
                else{
                    alert ("te has equivocado de letra");
                }
            }
        }


    }

//Ejercicio 6
    function ejercicio6(){
        var lista = ["burro", "caballo", "gorila", "jirafa", "leon", "aguila", "leopardo"]
    }