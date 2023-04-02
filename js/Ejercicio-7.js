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

  agendaLlena() {
    if (this.contactos.length === this.tamanio) {
      console.log("Agenda llena");
      return true;
    } else {
      console.log("Agenda con espacio");
      return false;
      
    }
  }

  aniadirContacto(contactoNuevo) {
    // si la agenda tiene espacIO disponible recien asignar un contacto
    if (!this.agendaLlena()) {
      this.contactos = contactoNuevo;
      console.log("Nuevo contacto añadido")
    }
    else {
        console.log ("Agenda llena no se agregó contacto");
        alert("Agenda llena no se agregó contacto");
    }
  }

  existeContacto(contactoNuevo) {
    if (this.contactos[0] === )
  }


}
