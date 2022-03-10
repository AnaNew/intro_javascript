// ejercicio 1
 var numero = Number(prompt("introduce un número"))
 if(numero %2===0){
    console.log(" este número si es divisible entre 2")
 } else{ 
    console.log("este número no es divisible entre 2")
 }


// ejercicio 2
var numero = Number(prompt("introduce un número"))
if(numero %2===0){
    alert("si es un número par")
} else{
    alert("no es un número par")
}

// ejercicio 3
var numero = Number(prompt("introduce un número"))
if(numero === 1000){
    console.log("Ganaste un premio")
} else{
    console.log("Lo sentimos, sigue participando")
}


// ejercicio 4
var valor1 = Number(prompt("introduce el primer número"))
var valor2 = Number(prompt("introduce el segundo número"))
if(valor1 < valor2){
    console.log(valor1, " es menor que ", valor2)
} else{
    console.log(valor2, " es menor que ", valor1)
}



// ejercicio 5
var valor1 = Number(prompt("introduce el primer número"))
var valor2 = Number(prompt("introduce el segundo número"))
var valor3 = Number(prompt("introduce el tercer número"))
if(valor1 >= valor2 && valor3){
    console.log(valor1, " es el número mayor")
} else if(valor2 >= valor1 && valor3){
    console.log(valor2, " es el número mayor")
} else if(valor3 >= valor1 && valor2){
    console.log(valor3, " es el número mayor")
}
