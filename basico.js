// Ejercicio 1
function ejercicio1() {
  const precio = 300;
  const iva = 21;
  const total = precio + (precio * iva / 100);
  document.getElementById('out1').innerText = "Precio total: $" + total;
}

// Ejercicio 2
function ejercicio2() {
  const lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
  const area = lado * lado;
  const perimetro = lado * 4;
  document.getElementById('out2').innerText = `Área: ${area} | Perímetro: ${perimetro}`;
}

// Ejercicio 3
function ejercicio3() {
  const nombre = prompt("Escribe tu nombre:");
  document.getElementById('out3').innerText = "Hola " + nombre;
}

// Ejercicio 4
function ejercicio4() {
  const n1 = parseInt(prompt("Ingrese número 1:"));
  const n2 = parseInt(prompt("Ingrese número 2:"));
  const n3 = parseInt(prompt("Ingrese número 3:"));
  const promedio = (n1 + n2 + n3) / 3;
  document.getElementById('out4').innerText = "Promedio: " + promedio.toFixed(2);
}

// Ejercicio 5
function ejercicio5() {
  const litros = parseFloat(prompt("Litros consumidos:"));
  const km = parseFloat(prompt("Kilómetros recorridos:"));
  const consumo = litros / km;
  document.getElementById('out5').innerText = `Consumo por km: ${consumo.toFixed(2)} L/km`;
}
