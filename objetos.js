// Ejercicio 6 - Clase Ficha
class Ficha {
  constructor(nombre) {
    this.nombre = nombre;
    this.sesiones = [];
    this.numsesiones = 0;
  }
  anotar(km) {
    this.sesiones.push(km);
    this.numsesiones++;
  }
  media() {
    return this.numsesiones === 0 ? 0 : this.sesiones.reduce((a, b) => a + b, 0) / this.numsesiones;
  }
}

// Ejercicio 7 - Clase Factura
const clientes = [
  { nombre: "Carlos", email: "carlos@mail.com", telefono: "123456" },
  { nombre: "Ana", email: "ana@mail.com", telefono: "654321" },
  { nombre: "Luis", email: "luis@mail.com", telefono: "987654" }
];

class Factura {
  constructor(idCliente, total) {
    this.idCliente = idCliente;
    this.total = total;
    this.estado = "pendiente";
  }
  cobrar() {
    this.estado = "pagada";
  }
  imprimir() {
    const cliente = clientes[this.idCliente];
    return `Factura para ${cliente.nombre} - Total: $${this.total} - Estado: ${this.estado}`;
  }
}

// Ejercicio 8 - Clases Articulo y Proveedor
class Proveedor {
  constructor(nombre, email, telefono) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
  }
}

class Articulo {
  constructor(nombre, precio, proveedor) {
    this.nombre = nombre;
    this.precio = precio;
    this.proveedor = proveedor;
  }

  telefono() {
    return {
      nombre: this.proveedor.nombre,
      telefono: this.proveedor.telefono
    };
  }
}
