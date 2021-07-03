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

const newFrutas = {...frutas[0], color:"rojo"}
console.log(newFrutas)