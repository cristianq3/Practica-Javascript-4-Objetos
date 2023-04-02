/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
  #nombre;
  #edad;
  #profesion;
  constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
  }

  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get edad() {
    return this.#edad;
  }
  set edad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
  get profesion() {
    return this.#profesion;
  }
  set profesion(nuevaProfesion) {
    this.#profesion = nuevaProfesion;
  }

  saludar() {
    document.write(`Hola soy ${this.nombre} y estoy saludando a todos! <br>`);
    console.log(this.#nombre);
    console.log(this.nombre);
  }

  despedirse() {
    document.write(`Soy ${this.nombre} y me despido de todos!<br>`);
  }
}

let nombre = "Cris";
let edad = 32;
let profesion = "Abogado";

const Cris = new Persona(nombre, edad, profesion);
const Pablito = new Persona("Gonza", 23, "Abogado");

// mostrar metodos con los dos

document.write(`<h1> Mostrar los metodos con distintos Objetos: </h1>`);

Pablito.saludar();
Pablito.despedirse();
Cris.saludar();
Cris.despedirse();
