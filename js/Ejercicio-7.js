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

  set tamanio(nuevoTelefono) {
    this.#tamanio = nuevoTamanio;
  }
}
 
