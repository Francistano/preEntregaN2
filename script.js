const comidas = [
  { nombre: "Hamburguesa", precio: 100, papas: true },
  { nombre: "Empanadas", precio: 50, papas: false },
  { nombre: "Milanesa", precio: 150, papas: true },
  { nombre: "pizza", precio: 125, papas: false },
  { nombre: "Guiso", precio: 200, papas: false },
];

comidas.forEach((comida) => {
  console.log(comida.nombre);
  console.log(comida.precio);
  console.log(comida.papas);
});

const empanadas = comidas.find((comida) => comida.nombre.includes("Empanadas"));

console.log(empanadas);

const total = comidas.reduce((acum, comida) => acum + comida.precio, 0);
console.log(total);

let ticket = total;
let propina = 1.1

function cuenta(ticket, propina) {
  return ticket + propina;
}
let resultado = cuenta (ticket, propina)

console.log(resultado)