
    // Función tradicional
    function suma100_1(a){
        return a + 100;
    }
    console.log(suma100_1(3));
    // Opciones de sintaxis

    //1
    (a) => {
        return a + 100;
    }

    //2
    (a) => a + 100; //Si solo tengo una linea de codigo (como en el caso anterior) puedo omitir las llaves y el return y queda igual

    // Si solo tengo un parametro puedo no meter los parentesis en la 'a', en caso de haber más parametros si que hace falta que ponga parentesis y separe los parametros por comas
    a => a + 100; 

    //para poder llamar las anteriores funciones flecha las tengo que meter dentro de una constante
    const suma100_2 = (a) => a + 100;
    console.log(suma100_2(4));

