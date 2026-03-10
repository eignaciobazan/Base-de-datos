nom = "Maria"
console.log(`Hola ${nom}`) // Output: Hola Maria

// Exemple d'array
let arr = [1, "text", true] //Estoy creando un array 
console.log(`Valor = ${arr[0]}`) // Output: Valor = true

// Exemple de matriu (array de dues dimensions)
var tauler = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 5, 8]
];
console.log(`Valor = ${tauler[1][2]}`) // Output: Valor = 6

function suma(a,b){
    let resultado = a + b
    if (resultado>10)
        console.log(`Error`)
}