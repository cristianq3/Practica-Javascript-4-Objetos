/* 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar. */

class Aeropuerto {
  #nombreAeropuerto;
  constructor(nombreAeropuerto) {
    this.#nombreAeropuerto = nombreAeropuerto;
    this.aviones = [];
  }
  get mostrarNombre() {
    return this.#nombreAeropuerto;
  }
  get mostrarAviones() {
    return this.aviones;
  }
  set cambiarNombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombreAeropuerto = nuevoNombre;
    }
  }
  buscarAvion(avion) {
    if (this.aviones.includes(avion) === true) {
      console.log(`Este avión está en el aeropuerto`);
      return true;
    } else {
      console.log(`No encontramos el avión`);
      return false;
    }
  }
  agregarAvion(avion) {
    this.aviones.push(avion);
  }
}

class Avion {
  #nombre;
  #capacidad;
  #destino;
  constructor(nombre, capacidad, destino) {
    this.#nombre = nombre;
    this.#capacidad = capacidad;
    this.#destino = destino;
    this.pasajeros = [];
  }
  get mostrarNombre() {
    return this.#nombre;
  }
  get mostrarCapacidad() {
    return this.#capacidad;
  }
  get mostrarDestino() {
    return this.#destino;
  }
  get mostrarPasajeros() {
    return this.pasajeros;
  }
  set cambiarNombre(nuevoNombre) {
    if (nuevoNombre.length != 0) {
      this.#nombre = nuevoNombre;
    }
  }
  set cambiarCapacidad(nuevoCapacidad) {
    if (nuevoCapacidad.length != 0) {
      this.#capacidad = nuevoCapacidad;
    }
  }
  set cambiarDestino(nuevoDestino) {
    if (nuevoDestino.length != 0) {
      this.#destino = nuevoDestino;
    }
  }
  IngresarPasajero(pasajero) {
    if (this.mostrarCapacidad > this.pasajeros.length) {
      this.pasajeros.push(pasajero);
      return `Puede ingresar al vuelo y abordar`;
    } else {
      return `No hay lugar para abordar en este avión`;
    }
  }
}

let nuevoAeropuerto1 = new Aeropuerto(
  `Aeropuerto Internacinal Matienzo Tucuman`
);
let avion1 = new Avion(`Cristian`, 24, `Mendoza`);
let avion2 = new Avion(`Luciana`, 250, `Buenos Aires`);
let avion3 = new Avion(`Jesus`, 400, `Cordoba`);

nuevoAeropuerto1.agregarAvion(avion1.mostrarNombre);
nuevoAeropuerto1.agregarAvion(avion2.mostrarNombre);
nuevoAeropuerto1.agregarAvion(avion3.mostrarNombre);
document.write(nuevoAeropuerto1.mostrarAviones);
document.write(`<br>`);

nuevoAeropuerto1.buscarAvion(`Cristian`);

document.write(avion1.mostrarPasajeros);
