
const tarifas = [1.9, 2.9, 1.7, 2.7, 0.9, 1.9];
const tarifasJuros = [2.09, 3.19, 1.87, 2.97, 0.99, 2.09];


function valueSelect() {
  const valueOrigem = parseInt(document.getElementById("origem").value);
  const valueDestino = parseInt(document.getElementById("destino").value);
  const valuePlano = parseInt(document.getElementById("plano").value);
  const valueTempo = parseInt(document.getElementById("tempo").value);
  

  if (valueOrigem == 11 && valueDestino == 16 && valuePlano > valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[0]);
    printValue(resultado).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  } else if (valueOrigem == 16 && valueDestino == 11 && valuePlano > valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[1]);
    printValue(resultado).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  } else if (valueOrigem == 11 && valueDestino == 17 && valuePlano > valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[2]);
    printValue(resultado);
  } else if (valueOrigem == 17 && valueDestino == 11 && valuePlano > valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[3]);
    printValue(resultado);
  } else if (valueOrigem == 11 && valueDestino == 18 && valuePlano > valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[4]);
    printValue(resultado);
  } else if (valueOrigem == 18 && valueDestino == 11 && valuePlano > valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifas[5]);
    printValue(resultado);
  } 
  
  if (valueOrigem == 11 && valueDestino == 16 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifasJuros[0]);
    printValueText(resultado);
  } else if (valueOrigem == 16 && valueDestino == 11 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifasJuros[1]);
    printValueText(resultado);
  } else if (valueOrigem == 11 && valueDestino == 17 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifasJuros[2]);
    printValueText(resultado);
  } else if (valueOrigem == 17 && valueDestino == 11 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifasJuros[3]);
    printValueText(resultado);
  } else if (valueOrigem == 11 && valueDestino == 18 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifasJuros[4]);
    printValueText(resultado);
  } else if (valueOrigem == 18 && valueDestino == 11 && valuePlano < valueTempo) {
    let resultado = calculo(valuePlano, valueTempo, tarifasJuros[5]);
    printValueText(resultado);
  }   

  if (valueOrigem == 11 && valueDestino == 16 && valuePlano == 1) {
    let resultado = calculoSemPlano(valueTempo, tarifas[0]);
    printSemPlano(resultado);
  } else if (valueOrigem == 16 && valueDestino == 11 && valuePlano >=1) {
    let resultado = calculoSemPlano(valueTempo, tarifas[1]);
    printSemPlano(resultado);
  } else if (valueOrigem == 11 && valueDestino == 17 && valuePlano >=1) {
    let resultado = calculoSemPlano(valueTempo, tarifas[2]);
    printSemPlano(resultado);
  } else if (valueOrigem == 17 && valueDestino == 11 && valuePlano >=1) {
    let resultado = calculoSemPlano(valueTempo, tarifas[3]);
    printSemPlano(resultado);
  } else if (valueOrigem == 11 && valueDestino == 18 && valuePlano >= 1) {
    let resultado = calculoSemPlano(valueTempo, tarifas[4]);
    printSemPlano(resultado);
  } else if (valueOrigem == 18 && valueDestino == 11 && valuePlano >= 1) {
    let resultado = calculoSemPlano(valueTempo, tarifas[5]);
    printSemPlano(resultado);
  }
  

}
const textExc = "Você excedeu os minutos do seu plano";

function calculo(n1, n2, n3) {
  return ((n1 - n2) * n3).toFixed(2);
}
function calculoSemPlano(n1, n2) {
  return (n1 * n2).toFixed(2);
}

function printValue(params) {
  return (document.getElementById("resultado").innerHTML = params + "Fale mais com seu plano FaleMais");
}

function printSemPlano(params) {
  return (document.getElementById("resultado").innerHTML = " Valor da ligação sem o plano FaleMais "  + params + printValueText());
}

function printValueText(params) {
  return (document.getElementById("resultado").innerHTML = " Valor da ligação com o plano FaleMais" + params + "<br> " + printSemPlano());
}
// const origem = document.getElementById("origem");
// origem.addEventListener("change", function () {
//   return this.value;
// });
// const destino = document.getElementById("destino");
// destino.addEventListener("change", function () {
//   return this.value;
// });
// const plano = document.getElementById("plano");
// plano.addEventListener("change", function () {
//   return this.value;
// });

// const tempo = document.getElementById("tempo");
// tempo.addEventListener("change", function () {
//   return this.value;
// });

// const planoOk =
//   "Valor da ligação com o plano é " +
//   (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// const excedeuPlano =
//   "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ";

// const calcular = function () {
//   document.getElementById("resultado").innerHTML = "= " + tarifas();
//   alert(0)
// };
// const valoresTarifa = [1.9, 2.9, 1.7, 2.7, 0.9];

// const tarifas = function () {

//   if (origem == 11 && destino == 16) {
//     return valoresTarifa[0];
//   } else if (origem == 16 && destino == 11) {
//     return valoresTarifa[1];
//   } else if (origem == 11 && destino == 17) {
//     return valoresTarifa[2];
//   } else if (origem == 17 && destino == 11) {
//     return valoresTarifa[3];
//   } else if (origem == 11 && destino == 18) {
//     return valoresTarifa[4];
// }else{
//   alert("tente novamente")
// }
// console.log(tarifas());

// document.getElementById("submit").onclick = function () {
//   calcular();
//   tarifas();
// };

// function banana (){
//   alert("OK")
// }

// // const faleMais = function () {
// //   if (origem == 11 && destino == 16) {
// //     if (plano == 30) {
// //       if (tempo <= 30) {
// //         return planoOk;
// //       } else if (tempo >= 30) {
// //         return (
// //           excedeuPlano +
// //           (valorTarifa[2] * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           })
// //         );
// //       }
// //       return comFaleMais;
// //     }

// //     // calculo sem o plano
// //     if (plano == 1) {
// //       if (tempo >= 20) {
// //         let semFalemais =
// //           "Valor da ligação sem o plano FaleMais é " +
// //           (tempo * 1.9).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return semFalemais;
// //       }
// //     }
// //     // plano FaleMais 60
// //     if (plano == 60) {
// //       if (tempo <= 60) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 60) {
// //         let comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (2.09 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }
// //     // plano FaleMais 120
// //     if (plano == 120) {
// //       if (tempo <= 120) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 120) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (2.09 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }
// //   }
// //   if (origem == 16 && destino == 11) {
// //     // plano FaleMais 30
// //     if (plano == 30) {
// //       if (tempo <= 30) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 30) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (3.19 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }

// //     // plano FaleMais 60
// //     if (plano == 60) {
// //       if (tempo <= 60) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 60) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (3.19 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }
// //     // plano FaleMais 120
// //     if (plano == 120) {
// //       if (tempo <= 120) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 120) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (3.19 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }

// //     // calculo sem o plano
// //     if (plano == 1) {
// //       if (tempo >= 20) {
// //         let semFalemais =
// //           "Valor da ligação sem o plano FaleMais é " +
// //           (tempo * 3.19).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return semFalemais;
// //       }
// //     }
// //   }
// //   if (origem == 11 && destino == 17) {
// //     // plano FaleMais 30
// //     if (plano == 30) {
// //       if (tempo <= 30) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 30) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (1.87 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }

// //     // plano FaleMais 60
// //     if (plano == 60) {
// //       if (tempo <= 60) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 60) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (1.87 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }
// //     // plano FaleMais 120
// //     if (plano == 120) {
// //       if (tempo <= 120) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 120) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (1.87 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }

// //     // calculo sem o plano
// //     if (plano == 1) {
// //       if (tempo >= 20) {
// //         let semFalemais =
// //           "Valor da ligação sem o plano FaleMais é " +
// //           (tempo * 1.87).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return semFalemais;
// //       }
// //     }
// //   }
// //   if (origem == 17 && destino == 11) {
// //     // plano FaleMais 30
// //     if (plano == 30) {
// //       if (tempo <= 30) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 30) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (2.97 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }

// //     // plano FaleMais 60
// //     if (plano == 60) {
// //       if (tempo <= 60) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 60) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (2.97 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }
// //     // plano FaleMais 120
// //     if (plano == 120) {
// //       if (tempo <= 120) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 120) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (2.97 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }

// //     // calculo sem o plano
// //     if (plano == 1) {
// //       if (tempo >= 20) {
// //         let semFalemais =
// //           "Valor da ligação sem o plano FaleMais é " +
// //           (tempo * 2.97).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return semFalemais;
// //       }
// //     }
// //   }
// //   if (origem == 11 && destino == 18) {
// //     // plano FaleMais 30
// //     if (plano == 30) {
// //       if (tempo <= 30) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 30) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (0.99 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }

// //     // plano FaleMais 60
// //     if (plano == 60) {
// //       if (tempo <= 60) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 60) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (0.99 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }
// //     // plano FaleMais 120
// //     if (plano == 120) {
// //       if (tempo <= 120) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 120) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (0.99 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }

// //     // calculo sem o plano
// //     if (plano == 1) {
// //       if (tempo >= 20) {
// //         let semFalemais =
// //           "Valor da ligação sem o plano FaleMais é " +
// //           (tempo * 0.99).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return semFalemais;
// //       }
// //     }
// //   }
// //   if (origem == 18 && destino == 11) {
// //     // plano FaleMais 30
// //     if (plano == 30) {
// //       if (tempo <= 30) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 30) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (2.09 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //     }

// //     // plano FaleMais 60
// //     if (plano == 60) {
// //       if (tempo <= 60) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 60) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (2.09 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }
// //     // plano FaleMais 120
// //     if (plano == 120) {
// //       if (tempo <= 120) {
// //         let comFaleMais =
// //           "Valor da ligação com o plano é " +
// //           (0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// //         return comFaleMais;
// //       } else if (tempo >= 120) {
// //         let = comFaleMais =
// //           "Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é " +
// //           (2.09 * (tempo - plano)).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return comFaleMais;
// //       }
// //       return comFaleMais;
// //     }

// //     // calculo sem o plano
// //     if (plano == 1) {
// //       if (tempo >= 20) {
// //         let semFalemais =
// //           "Valor da ligação sem o plano FaleMais é " +
// //           (tempo * 2.09).toLocaleString("pt-br", {
// //             style: "currency",
// //             currency: "BRL",
// //           });
// //         return semFalemais;
// //       }
// //     }
// //   }
// // };
