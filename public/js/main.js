const tarifas = [1.9, 2.9, 1.7, 2.7, 0.9, 1.9];
const tarifasJuros = [2.09, 3.19, 1.87, 2.97, 0.99, 2.09];

function valueSelect() {
  const valueOrigem = parseInt(document.getElementById("origem").value);
  const valueDestino = parseInt(document.getElementById("destino").value);
  const valuePlano = parseInt(document.getElementById("plano").value);
  const valueTempo = parseInt(document.getElementById("tempo").value);  

  if (valueOrigem == 11 && valueDestino == 16 || valueDestino == 11 && valuePlano >= valueTempo) {
    let resultado = 0.0.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    printValueText(resultado);
  } else if (valueOrigem == 16 && valueDestino == 11 || valueDestino == 16 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[1]);
    printValueText(resultado);
  } else if (valueOrigem == 11 && valueDestino == 17 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[2]);
    printValueText(resultado);
  } else if (valueOrigem == 17 && valueDestino == 11 || valueDestino == 17 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[3]);
    printValueText(resultado);
  } else if (valueOrigem == 11 && valueDestino == 18 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[4]);
    printValueText(resultado);
  } else if (valueOrigem == 18 && valueDestino == 11 || valueDestino == 18 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[5]);
    printValueText(resultado);
  } 
  
  if (valueOrigem == 11 && valueDestino == 16 || valueDestino == 11 && valuePlano < valueTempo) {
    let resultado = calculo(valueTempo, valuePlano, tarifasJuros[0]);
    printValueText(resultado);
  } else if (valueOrigem == 16 && valueDestino == 11 || valueDestino == 16 && valuePlano < valueTempo) {
    let resultado = calculo(valueTempo, valuePlano, tarifasJuros[1]);
    printValueText(resultado);
  } else if (valueOrigem == 11 && valueDestino == 17 && valuePlano < valueTempo) {
    let resultado = calculo(valueTempo, valuePlano, tarifasJuros[2]);
    printValueText(resultado);
  } else if (valueOrigem == 17 && valueDestino == 11 || valueDestino == 17 && valuePlano < valueTempo) {
    let resultado = calculo(valueTempo, valuePlano, tarifasJuros[3]);
    printValueText(resultado);
  } else if (valueOrigem == 11 && valueDestino == 18 && valuePlano < valueTempo) {
    let resultado = calculo(valueTempo, valuePlano, tarifasJuros[4]);
    printValueText(resultado);
  } else if (valueOrigem == 18 && valueDestino == 11 || valueDestino == 18 && valuePlano < valueTempo) {
    let resultado = calculo(valueTempo, valuePlano, tarifasJuros[5]);
    printValueText(resultado);
  }   

  if (valueOrigem == 11 && valueDestino == 16 || valueDestino == 11) {
    let resultado = calculoSemPlano(valueTempo, tarifas[0]);
    printSemPlano(resultado);
  } else if (valueOrigem == 16 && valueDestino == 11 || valueDestino == 16) {
    let resultado = calculoSemPlano(valueTempo, tarifas[1]);
    printSemPlano(resultado);
  } else if (valueOrigem == 11 && valueDestino == 17) {
    let resultado = calculoSemPlano(valueTempo, tarifas[2]);
    printSemPlano(resultado);
  } else if (valueOrigem == 17 && valueDestino == 11 || valueDestino == 17) {
    let resultado = calculoSemPlano(valueTempo, tarifas[3]);
    printSemPlano(resultado);
  } else if (valueOrigem == 11 && valueDestino == 18) {
    let resultado = calculoSemPlano(valueTempo, tarifas[4]);
    printSemPlano(resultado);
  } else if (valueOrigem == 18 && valueDestino == 11 || valueDestino == 18) {
    let resultado = calculoSemPlano(valueTempo, tarifas[5]);
    printSemPlano(resultado);
  } 

}
const textExc = "Você excedeu os minutos do seu plano";

function calculo(n1, n2, n3) {
  return ((n1 - n2) * n3).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
function calculoSemPlano(n1, n2) {
  return (n1 * n2).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function printSemPlano(params) {
  return (document.getElementById("resultado2").innerHTML = " Valor da ligação sem o plano FaleMais "  + params );
}

function printValueText(params) {
  return (document.getElementById("resultado").innerHTML = " Valor da ligação com o plano FaleMais " + params + "<br> ");
}