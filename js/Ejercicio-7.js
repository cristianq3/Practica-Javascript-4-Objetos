/*
 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

 */

class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get telefono() {
    return this.#telefono;
  }

  set nombre(nuevoTelefono) {
    this.#nombre = nuevoTelefono;
  }
}

class Agenda {
  #contactos;
  #tamanio;
  constructor(tamanio = 10) {
    this.#contactos = [];
    this.#tamanio = tamanio;
  }

  get contactos() {
    return this.#contactos;
  }

  set contactos(nuevoContacto) {
    this.#contactos.push(nuevoContacto);
  }

  get tamanio() {
    return this.#tamanio;
  }

  set tamanio(nuevoTamanio) {
    this.#tamanio = nuevoTamanio;
  }

  // Agenda llena

  agendaLlena() {
    if (this.contactos.length === this.tamanio) {
      console.log("Agenda llena");
      return true;
    } else {
      console.log("Agenda con espacio");
      return false;
    }
  }

  //Corroborar si existe el contacto

  existeContacto(nombre) {
    const contactoBuscado = this.contactos.find(
      (element) => element.nombre === nombre
    );
    if (contactoBuscado === nombre) {
      alert(`Si existe el contacto con el nombre ${contactoBuscado.nombre}`);
      return true;
    } else {
      alert(`No existe el contacto con el nombre ${nombre}`);
      return false;
    }
  }

  // Añadimos los contactos

  aniadirContacto(nuevoContacto) {
    // si la agenda tiene espacIO disponible recien asignar un contacto
    if (!this.agendaLlena()) {
      this.contactos = nuevoContacto;
      console.log("Nuevo contacto añadido");
    } else {
      console.log("Agenda llena no se agregó contacto");
      alert("Agenda llena no se agregó contacto");
    }
  }
  // Listar los contactos.
  listarContactos() {
    console.log(this.contactos);
    document.write(`<ul>`);
    for (let i = 0; i < this.contactos.length; i++) {
      document.write(
        `<li><b>Nombre:</b> ${this.contactos[i].nombre}.<br> <b>tel: </b> ${this.contactos[i].telefono}</li>`
      );
    }
    document.write(`</ul>`);
  }

  // Corroborar is existe un contacto

  //Eliminar contacto por nombre

  eliminarContacto(nombre) {
    if (this.contactos.length === 0) {
      alert("No hay contactos en la agenda.");
    } else if (this.existeContacto(nombre)) {
      this.contactos = this.contactos.filter(nombre);
      alert(`El contacto fue eliminado correctamente`);
    } else {
      alert(`No existe el contacto con el nombre ${nombre} a eliminar`);
    }
  }

  huecosLibres() {
    let espacioLibre = this.tamanio - this.contactos.length;
    console.log(
      `Hay lugar disponible para ${espacioLibre} contactos en tu agenda.`
    );
    return espacioLibre;
  }
}

let agendaNueva = new Agenda();
let contactoNuevo = new Contacto();

console.log(agendaNueva);

do {
  const opcion = prompt(`Seleccione una de las siguientes opciones:
1- Añadir un contacto
2- Verificar si existe un contacto
3- Listar los contactos
4- Buscar un contacto
5- Eliminar un contacto
6- Verificar si la agenda esta llena
7- Verificar espacios libres en la agenda
8- Modificar el tamaño de Agenda`);

  switch (opcion) {
    case "1":
      console.log("1- Añadir un contacto");
      const nombre = prompt("Ingrese un  Nombre");
      const telefono = prompt("Ingrese un Telefono");
      const NuevoContacto = new Contacto(nombre, telefono);
      agendaNueva.aniadirContacto(NuevoContacto);
      break;
    case "2":
      console.log("2- Verificar si existe");
      const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar");
      agendaNueva.existeContacto(nombreBuscar);

      break;
    case "3":
      console.log("3- Listar contactos");
      // Mostrar todo el objeto
      agendaNueva.listarContactos();

      break;
    case "4":
      console.log("4-Buscar contacto");
      let contactoBuscado = prompt("Ingrese el nombre del contacto a buscar");
      if (agendaNueva.existeContacto(contactoBuscado) === true) {
        alert(`El contacto se encontró`);
      } else {
        alert("No se encontró el contacto");
      }
      break;
    case "5":
      console.log("5- Eliminar contacto");

      const aEliminar = prompt("Ingrese el nombre del contacto a eliminar");

      agendaNueva.eliminarContacto(aEliminar);

      break;
    case "6":
      console.log("6- Verificar Agenda llena");
      if (agendaNueva.agendaLlena() === true) {
        alert("Agenda LLena");
      } else {
        alert(
          `Hay ${agendaNueva.huecosLibres()} lugares disponibles en la agenda `
        );
      }
      break;
    case "7":
      console.log("7- Verificar Espacios libres");
      alert(`Hay ${agendaNueva.huecosLibres()} espacios libres`);

      break;
    case "8":
      console.log("8- Modificar tamaño agenda");
      const nuevoTamanio = parseInt(prompt("Ingrese el nuevo tamaño"));
      agendaNueva.tamanio = nuevoTamanio;
      alert("Se cambio el tamaño de agenda. gracias");
      break;

    default:
      alert("Ingrese una opcion correcta");
  }
} while (confirm("Desea realizar otra operacion?"));
