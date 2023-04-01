/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
  #ISBN;
  #titulo;
  #autor;
  #numPag;
  constructor(ISBN, titulo, autor, numPag) {
    this.#ISBN = ISBN;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numPag = numPag;
  }

  get ISBN() {
    return this.#ISBN;
  }

  set ISBN(nuevoISBN) {
    this.#ISBN = nuevoISBN;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(nuevoTitulo) {
    this.#titulo = nuevotitulo;
  }

  get autor() {
    return this.#autor;
  }

  set autor(nuevoautor) {
    this.#autor = nuevoautor;
  }

  get numPag() {
    return this.#numPag;
  }

  set numPag(NuevonumPag) {
    this.#numPag = NuevonumPag;
  }

  mostrarLibro() {
    document.write(
      `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numPag} <br>`
    );
  }
}

let ISBN = prompt("Ingrese ISBN del primer libro");
let titulo = prompt("Ingrese Titulo del primer libro");
let autor = prompt("Ingrese Autor del primer libro");
let numPag = parseInt(prompt("Ingrese Numero de paginas del primer libro"));

const Libro1 = new Libro(ISBN, titulo, autor, numPag);

let ISBN2 = prompt("Ingrese ISBN del segundo libro");
let titulo2 = prompt("Ingrese Titulo del segundo libro");
let autor2 = prompt("Ingrese Autor del segundo libro");
let numPag2 = parseInt(prompt("Ingrese Numero de paginas del segundo libro"));

const Libro2 = new Libro(ISBN2, titulo2, autor2, numPag2);

Libro1.mostrarLibro();
Libro2.mostrarLibro();

if (Libro1.numPag > Libro2.numPag) {
    document.write(`El libro ${Libro1.titulo} tiene más paginas`)
}
else {
    document.write(`El libro ${Libro2.titulo} tiene más paginas`)
}


