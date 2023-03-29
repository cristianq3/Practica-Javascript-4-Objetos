/*
1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
*/
let auto = {
  marca: "Ford",
  modelo: "Falcon",
  color: "Rojo",

  encendido: function () {
    document.write(`El ${this.marca} ${this.modelo} se encendió correctamente <br>`);
  },
  apagado: function () {
    document.write(`El ${this.marca} ${this.modelo} se apagó correctamente <br>`);
  }
};

// Mostrar OBjeto

document.write(`<h1> Mostrar el Objeto Auto</h1>`);

document.write(
  `<p> El auto es un ${auto.marca} modelo ${auto.modelo} de color  ${auto.color} </p>`
);

auto.encendido();

auto.apagado();