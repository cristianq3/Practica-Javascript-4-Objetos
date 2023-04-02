/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.*/
class Animal {
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevEdad) {
    this.#nombre = nuevoNombre;
  }
  get edad() {
    return this.#edad;
  }
  set edad(nuevEdad) {
    this.#edad = nuevaEdad;
  }

  emitirSonido() {
    document.write(`${this.nombre} esta emitiendo un sonido!<br>`);
  }
}

class Perro extends Animal {
  #raza;
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.#raza = raza;
  }

  get raza() {
    return this.#raza;
  }

  emitirSonido() {
    document.write(`${this.nombre} está Ladrando Guau! Guau! Guau!<br>`);
  }
}

class Gato extends Animal {
  #raza;
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.#raza = raza;
  }

  get raza() {
    return this.#raza;
  }

  emitirSonido() {
    document.write(`${this.nombre} está Maullando Miau! Miau! Miau! <br>`);
  }
}

// Creo un objeto Animal Generico.

document.write(
  `<h1>Mostrar las clases Animal, Perro y Gato con sus metodos de emitirSonido()</h2>`
);
const soloAnimal = new Animal("Elefante", 23);

soloAnimal.emitirSonido();

const Perrito = new Perro("Dogy", 2, "Litbull");

Perrito.emitirSonido();

const Gatito = new Gato("Felin", 4, "Siames");

Gatito.emitirSonido();
