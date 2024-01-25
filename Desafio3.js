// Desafíos:
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function masaCorporal(altura, peso){
    let imc = (peso/(altura*altura));
    return imc;
}

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolarAPesos(dolares) {
    var cotizacionDolar = 17;
    var pesos = cotizacionDolar * dolares
    return pesos;
}
let valorEnDolar = 1;
let valorDePesos = convertirDolarAPesos(valorEnDolar);
console.log (`El valor de $ ${valorEnDolar}  Dolar es de ${valorDePesos} pesos mexiacos `)

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let altura = 3; // en metros
  let anchura = 5; // en metros
  calcularAreaYPerimetroRectangular(altura, anchura);
  

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularAreaYPerimetroCircular(radio) {
    let pi=3.1416;
    var area = pi * (radio*radio);
    var perimetro = 2 * pi * radio;
    console.log ("Area : " + area);
    console.log ("Perimetro : " + perimetro);
}

let radio = 10;
calcularAreaYPerimetroCircular (radio);

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numeroC) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numeroC * i;
      console.log(numeroC + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numeroC = 7;
  mostrarTablaDeMultiplicar(numeroC);
  

