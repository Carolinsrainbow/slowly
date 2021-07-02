const frutas = [
  {
    nombre: "manzana",
    precio: 100,
    existencia: 1,
  },
  {
    nombre: "pera",
    precio: 100,
    existencia: 1,
  },
];

const everyFruta = frutas.every((fruta) => fruta.precio === 100);
console.log(everyFruta);
