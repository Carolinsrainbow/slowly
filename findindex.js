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

const findIndexFruta = frutas.findIndex((fruta) => fruta.precio === 100);
console.log(findIndexFruta);
