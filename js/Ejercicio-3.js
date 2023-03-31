/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área.
*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  area() {
    return this.alto * this.ancho;
  }

  perimetro() {
    return this.alto * 2 + this.ancho * 2;
  }

  mostrarDatos() {
    return `Este  rectangulo tiene ${this.alto}cm de alto y ${
      this.ancho
    }cm de ancho.<br>
    Su perimetro es ${this.perimetro()}cm. <br>
    Su area es ${this.area()}cm cuadrados.`;
  }
}

let miRectangulo = new Rectangulo(2, 2);
let otroRectangulo = new Rectangulo(4, 5);

document.write(miRectangulo.mostrarDatos());
