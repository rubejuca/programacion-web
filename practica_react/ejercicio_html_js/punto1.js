function generarCuadro(numero) {
  let digitos = numero.toString().length;
  let hf = "+ " + "-".repeat(digitos) + " +\n";
  let b = "| " + numero + " |\n";
  return hf + b + hf;
}

function sumarCuadros(arrayNumeros) {
  let texto = "";
  let total = 0;
  for (i = 0; i < arrayNumeros.length; i++) {
    texto = texto + generarCuadro(arrayNumeros[i]);
    total += arrayNumeros[i];
  }
  texto = texto + generarCuadro(total);
  return texto;
}

console.log(sumarCuadros([1, 23, 453, 3267, 12354, 123456]));
