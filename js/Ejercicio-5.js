/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:



esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */

//Crear la clase

class Persona {
  #nombre;
  #edad;
  #DNI;
  #sexo;
  #peso;
  #altura;
  #clase;
  constructor(nombre, edad, DNI, sexo, peso, altura, clase) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#DNI = DNI;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#clase = clase;
  }

  get nombre() {
    return this.#nombre;
  }
  get edad() {
    return this.#edad;
  }
  get DNI() {
    return this.#DNI;
  }
  get sexo() {
    return this.#sexo;
  }
  get peso() {
    return this.#peso;
  }
  get altura() {
    return this.#altura;
  }
  // get clase() {
  //   return this.#clase;
  // }

  mostrarGeneracion() {
    if (this.#clase >= 1930 && this.clase < 1949) {
      document.write(`${this.nombre} pertenece a la <b>generación Silenciosa </b> <br>
      `);
    } else if (this.clase >= 1949 && this.clase < 1969) {
      document.write(
        `${this.nombre} pertenece a la <b>generación Baby Boom </b> <br>`
      );
    } else if (this.clase >= 1969 && this.clase < 1980) {
      document.write(`${this.nombre} pertenece a la <b> Generacion X </b> <br>
      `);
    } else if (this.clase >= 1981 && this.clase < 1994) {
      document.write(`${this.nombre} pertenece a la <b>Generacion Y </b> <br>
      `);
    } else if (this.clase >= 1994 && this.clase < 2010) {
      document.write(`${this.nombre} pertenece a la <b>Generacion Z </b> <br>
      `);
    } else {
      document.write("No tenemos datos sobre su generacion");
    }
  }
  esMayorDeEdad() {
    if (this.edad > 2005) {
      document.write(`Es Menor de Edad <br>`);
    } else {
      document.write(`Es Mayor de Edad <br>`);
    }
  }

  generaDNI() {
    let dni = 0;
    document.write(
      `Se generó automaticament el DNI Nro ${parseInt(
        (dni = Math.random() * 100000000)
      )} <br>`
    );
  }

  mostrarDatos() {
    document.write(`<h2>Datos del Objeto</h2><br> <ul>
    <li>El nombre es ${this.nombre}</li>
    <li>Su edad es ${this.edad}</li>
    <li>Sexo: ${this.sexo}</li>
    <li>Su DNI es ${this.DNI}</li>
    <li>Nació en el año: ${this.clase}</li>
    <li>Su altura y peso es: ${this.altura}</li>  
</ul>`);
  }
}

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let DNI = prompt("Ingrese su DNI");
let sexo = prompt("Ingrese su sexo");
let clase = prompt("Ingrese su año de nacimiento");
let altura = prompt("Ingrese su altura");
let peso = prompt("Ingrese su peso");

const cris = new Persona(nombre, edad, DNI, sexo, peso, altura, clase);

cris.mostrarGeneracion();
cris.esMayorDeEdad();

cris.generaDNI();
cris.mostrarDatos();
