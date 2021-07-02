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

const nombres = frutas.map((fruta) => {
  return fruta.nombre;
});

console.log(nombres);
