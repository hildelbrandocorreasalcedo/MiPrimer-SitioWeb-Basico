document.write("Hola mundo soy Hildelbrando Correa");

//Concatenacion
let nombre= 'Hilde';
let apellido= 'Correa';
let completoNombre = nombre +' '+ apellido;
//console.log(completoNombre);


// Operaciones
let PrimerNumero = 60;
let SegundoNumero = 100;
let resultado = PrimerNumero + SegundoNumero;
//console.log(resultado);


// Condiciones
let password='brayan123';
let input = 'brayan123';
let resultadoContraseña = password == input;
/*
if(resultadoContraseña == true){
    console.log('Contraseña correcta'); 
}else{
    console.log('Cotraseña Incorrecta'); 
}
*/


let typeCard = 'Debid Card';
/*
switch(typeCard){
    case 'Debid Card':
        console.log('Esta es una tarjeta de debito');
        break;
    case 'Credit Card':
        console.log('Esta es una tarjeta de credito');
        break;
    default:
        console.log('No presenta tarjeta')
}
*/

//Bucles
let contador = 0;
while(contador <= 50){
    //console.log(contador);
    contador = contador + 1;
}


//Arrays
let nombres = ['brayan','juan','mario'];
//console.log(nombres[0],nombres[1]);
//console.log(nombres.length);
for(let i = 0; i < nombres.length; i++){
    //console.log(nombres[i]);
}


//funciones
function tarea(nombre){
    //console.log(nombre);
    //console.log('hola ' + nombre);
}
tarea('Hildelbrando');
tarea('Brayan');
tarea('maikol');
tarea();

function add( n1, n2){
    console.log(n1 + n2);
}
add(33,22);
add(3,2);
add(11111,32442);
add(55,'hildel');

