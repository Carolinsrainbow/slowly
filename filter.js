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

const filtrarFruta = frutas.filter((fruta) => fruta.nombre ==="pera");
console.log(filtrarFruta);