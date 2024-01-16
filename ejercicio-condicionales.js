//1.

const respuesta = prompt("Usted es culpable?");

switch (respuesta.toLocaleLowerCase()) {
  case "si":
    document.write("Iras a la carcel");
    break;
  case "no":
    document.write("Iras a casa");
    break;
  default:
    document.write("Documentación por favor");
    break;
}

//2.

let precioTotalHelado;
const precioHelado = 1900;
const topping = prompt("Ingrese el topping deseado");

switch (topping.toLocaleLowerCase()) {
  case "oreo":
    precioTotalHelado = precioHelado + 1000;
    break;
  case "kitkat":
    precioTotalHelado = precioHelado + 1500;
    break;
  case "brownie":
    precioTotalHelado = precioHelado + 750;
    break;
  case "lacasitos":
    precioTotalHelado = precioHelado + 950;
    break;
  default:
    alert("El topping no esta disponible");
    precioTotalHelado = precioHelado;
    break;
}
alert("el valor de su helado es " + precioTotalHelado);
