
// ejercicio 2
var numero = 30
var contador = 1
while(contador <= numero){
    if (contador % 5 === 0);
    console.log(contador, " es múltiplo de 5");
    contador ++;
}

// ejercicio 3
var numero = Number(prompt("dame un número"))
var contador = 1
do{ 
    if (contador % 5 === 0){
    console.log(contador, " es múltiplo de 5");
    contador ++;
    }
} while(contador <= numero);

// ejercicio 4

var numero = 50
var contador = 1

for(contador = 1; contador <= numero; contador++){
    if(contador % 2 !== 0){
    console.log(contador, " es un número impar")
    }

}
