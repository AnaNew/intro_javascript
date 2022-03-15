// ejercicio 1

var arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]

for(contador = 0; contador < arreglo.length; contador++){
    if(arreglo[contador] > 3){
        console.log(arreglo[contador], " es mayor a 3")
    }
}

// ejercicio 2
 var arreglo = []
 var contador = 0
  while(contador < 5){
      arreglo[contador]= contador;
      contador++
  }
  console.log(arreglo)