/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
  #nombre;
  #precio;
  #codigo;
  constructor(nombre, precio, codigo) {
    this.#nombre = nombre;
    this.#codigo = codigo;
    this.#precio = precio;
  }
  get nombre() {
    return this.#nombre;
  }

  get codigo() {
    return this.#codigo;
  }
  get precio() {
    return this.#precio;
  }

  imprimeDatos() {
    document.write(
      `<p> El producto es ${this.nombre} su precio es $${this.precio} y su codigo es ${this.codigo}  </p>`
    );
  }
}

const teclado = new Producto("Teclado", 20, "004455");
const mouse = new Producto("Mouse", 12, "004544");
const parlante = new Producto("Parlante", 10, "004550");
const listaProductos = [teclado, mouse, parlante];
 
//Mostrar el array 
listaProductos.forEach((element) => {
  element.imprimeDatos();
});
