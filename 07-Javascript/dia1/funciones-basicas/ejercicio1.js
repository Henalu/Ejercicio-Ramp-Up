/*
    let frutas = ["Manzana", "Banana"];
    console.log(frutas); // Manzana y Banana 
    console.log(frutas.length); // 2

    let primero = frutas[0] // Manzana
    console.log(primero); // Manzana

    let ultimo = frutas[frutas.length - 1]; // Banana
    console.log(ultimo); // Banana

    let nuevaLongitud = frutas.push('Naranja'); // Añade "Naranja" al final
    // ["Manzana", "Banana", "Naranja"]
    console.log(nuevaLongitud);

    ultimo = frutas.pop(); // Elimina "Naranja" del final
    // ["Manzana", "Banana"]
    console.log(frutas);
*/

/*
function listaFrutas(){
    let frutas = ["Manzana", "Banana"];
    alert (frutas);
}

function añadirFrutas(){
    let frutas = ["Manzana", "Banana"];
    let masFrutas = frutas.push("Mango", "Kiwi", "Uva");
    alert (frutas);
}

function borrarFrutas(){
    let frutas = ["Manzana", "Banana"];
    let masFrutas = frutas.push("Mango", "Kiwi", "Uva");
    let menosFrutas = frutas.pop();
    alert (frutas);
}
*/

//Correccion
let frutas = ["Manzana", "Banana"];

function listaFrutas(){
    alert (frutas);
}

function añadirFrutas(){
    frutas.push("Mango", "Kiwi", "Uva");
    alert (frutas);
}

function borrarFrutas(){
    frutas.pop();
    alert (frutas);
}