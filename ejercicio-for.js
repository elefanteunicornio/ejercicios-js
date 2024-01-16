//Calcular factorial del numero entero.
let factorial = 1;
let numero;

do {
  const numeroString = prompt("Ingrese un número entero.");
  numero = parseInt(numeroString);
  console.log(typeof numero);
} while (Number.isNaN(numero) == true);

for (let i = 1; i <= numero; i++) {
  factorial = factorial * i;
  console.log("contador", i);
  console.log("factorial", factorial);
}

console.log("el factorial de ", numero, "es igual a", factorial);
