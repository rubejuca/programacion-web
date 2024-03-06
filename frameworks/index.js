/* function contraseña_valida(nombre) {
    return nombre == "2F" || nombre == "3F"
}

console.log(contraseña_valida("3")) */

function calcular_impuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) {
    return ingresos * 0.4;
  }
  return 0;
  return edad >= 18 && ingresos >= 1000 ? ingresos * 0.4 : 0;
}
console.log(calcular_impuestos(10, 100));

function likes(numero) {
  if (numero < 1000) {
    return numero.toString();
  } else if (numero < 1000000) {
    return Math.trunc(numero / 1000) + "K";
  } else {
    return Math.trunc(numero / 1000000) + "M";
  }
}

let contra = (input) => {
  return input == "2F" || input == "3F";
};
console.log(contra("3"));

let validar_mujer = (mujer) => {
  const mujeres = ["Danna", "darly", "salomé"];
  return mujeres.find((muj) => muj.toLowerCase() == mujer.toLowerCase());
};
console.log(validar_mujer("Danna"));

let splitFun = (nombres) => {
  const nombre = nombres.split("-")[0];
  const apellidos = nombres.split("-")[1];
  const edad = nombres.split("-")[2];
  console.log(`Mi nombre es: ${nombre} ${apellidos} y tengo ${edad}`);
};

splitFun("juan-camilo-20");

//1
let suma = (length, width) => {
  return (suma = length * width);
};

console.log(suma(3, 4.5));
//2
let fizzbuzz = (numero) => {
  if (numero % 3 == 0 && numero % 5 == 0) {
    return "fizzbuzz";
  } else if (numero % 3 == 0) {
    return "fizz";
  } else if (numero % 5 == 0) {
    return "buzz";
  }
  return numero.toString();
};

console.log(fizzbuzz(8));
//3
let numAsteriscos = (matriz) => {
  let cont = 0;
  for (let fila = 0; fila < matriz.length; fila++) {
    for (let col = 0; col < matriz[fila].length; col++) {
      console.log(fila + "," + col + " = " + matriz[fila][col]);
      if (matriz[fila][col] == "*") {
        cont += 1;
      }
    }
  }
  return cont;
};

matriz = [
  ["*", "", "*"],
  ["", "*", ""],
  ["*", "", "*"],
];

console.log("asteriscos = " + numAsteriscos(matriz));

//4
function empiezanConA(arreglo) {
  return arreglo.filter((palabra) => palabra.charAt(0).toLowerCase() === "a");
}

const palabras = ["Amarillo", "azul", "Manzana", "naranja", "Antílope"];
console.log(empiezanConA(palabras));

//5
function terminanConS(arreglo) {
  return arreglo.filter(
    (palabra) => palabra.charAt(palabra.length - 1).toLowerCase() === "s"
  );
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]));

//6
function palabrasANumeros(arreglo) {
  const numeros = {
    cero: 0,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9,
  };

  return arreglo.map((palabra) => {
    const numero = numeros[palabra.toLowerCase()];
    return numero !== undefined ? numero : -1;
  });
}

console.log(
  palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])
);

//7
function duplicar(arreglo) {
  return arreglo.map((numero) => numero * 2);
}

console.log(duplicar([1, 2, 3]));

//8
function password(str) {
  str = str.toLowerCase().replace(/\s/g, "");

  str = str
    .replace(/a/g, "4")
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0");

  return str;
}

console.log(password("esta es una prueba"));

//9
function min(arreglo) {
  if (arreglo.length === 0) {
    return undefined;
  }

  let minimo = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < minimo) {
      minimo = arreglo[i];
    }
  }

  return minimo;
}

console.log(min([67, 35, 54, 26]));

//10
const transcribir = (cadenaADN) => {
  const mapeo = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  let cadenaARN = "";
  for (let nucleotido of cadenaADN) {
    cadenaARN += mapeo[nucleotido];
  }

  return cadenaARN;
};

console.log(transcribir("ACGT"));

/* const array = [
  {
    name: "danna",
    lastName: "flor",
    age: "23",
  },
  {
    name: "camilo",
    lastName: "rubio",
    age: "19",
  },
];

let functionObject = (arrayObject) => {
  arrayObject.map((obj) => {
    obj.name == "danna" ? (obj.name = "farid") : null;
    console.log(`Nombre: ${obj.name} `);
  });
};

functionObject(array); */
