
 alert ("Bienvenidos al rincon del bartender ")
 alert("Proximamente tendremos la opcion para que compres todas tus herramietas")
 alert("Registrate para que cuando este todo listo podamos avisarte!")
 
 function edad (){
    let edad = prompt("ingresa tu edad")
     if (edad > "18"){
         alert("Puendes entrar ");
     }
     else if (edad < 18) 
        alert ("No puedes accerder al sitio");
     }
     
 edad();

 function registrarse (){
      let nombre = prompt ( "ingresa tu nombre de usuario");
      let password = prompt("ingrese su contraseña")
     alert("hola" + " " + nombre + "!" + " " + "gracias por registrarte")
     
    }

    registrarse();



// let productos = []

function stock(){
    nombre= prompt(`Que producto estas buscando? ${productos.map((productos => productos.nombre))}`);
    productos = productos.find(productos => productos.nombre === nombre );
    elegir = prompt(`elegiste ${productos.nombre}, tiene un valor de ${productos.precio}`);
    
}

let productos = [
    {id: 1 , nombre : "Coctelera boston" , precio:2500 },
    {id: 2 , nombre : "coctelera bahia" , precio: 2000 },
    {id: 3 , nombre : "coctelera parisian" , precio: 3000 },
    {id: 4 , nombre : "jigger" , precio: 1500 },
    {id: 5 , nombre : "cuchara" , precio: 1000 },
]; 

stock();






// let pesos = (prompt("ingrese el monto a convertir"))
//     let dolar = 290;
//     let resultado = 0;

// function conversor(){  
//     if( dolar = 290){ 
//     resultado = pesos * dolar;
// }
// }
// // function resultado(){
// //     alert("este es el resultado" + resultado)
// // }
//  alert(`el cambio a dolar es de + ${resultado}` )