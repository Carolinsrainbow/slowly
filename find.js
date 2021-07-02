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

const findFruta = frutas.find((fruta) => fruta.precio === 100);
console.log(findFruta);
