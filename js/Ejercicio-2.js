/*
Modelando Clases: Cuenta bancaria
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class Cuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingreso(cantidad) {
    this.saldo += cantidad;
    document.write(`Se ingresó ${this.saldo} <br>`);
  }

  retiro(cantidad) {
    if (this.saldo < cantidad) {
      document.write(
        "Esta intentando retirar mas dinero del que tiene en su cuenta.<br>"
      );
    } else {
      this.saldo -= cantidad;

      document.write(`Se retiran $${cantidad} de su cuenta <br>`);
    }
  }
  informar() {
    document.write(`Usted dispone actualmente de ${this.saldo} <br>`);
  }
}

let cuentaNueva = new Cuenta("Jose López", 0);

document.write(`<h1> Mostrar la cuenta de ${cuentaNueva.titular} </h1> <br>`);

cuentaNueva.informar();
cuentaNueva.ingreso(5000);
cuentaNueva.retiro(3000);
cuentaNueva.informar();
