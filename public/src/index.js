const opcoes = {
  origem: ["011", "016", "017", "018"],
  destino: ["011", "016", "017", "018"],
  valores: [1.9, 2.9, 1.7, 2.7, 0.9, 1.9],
};
// console.log(opcoes.valores);

const faleMais = function () {
  const origem = document.getElementById("origem").value;
  const destino = document.getElementById("destino").value;
  const plano = document.getElementById("plano").value;
  const tempo = document.getElementById("tempo").value;
  console.log(plano);

  if (origem == 11 && destino == 16) {
    if (plano == 30) {
      if (tempo <= 30) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 30) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (2.09 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        let semFalemais = 'Valor da ligação sem o plano FaleMais é ' + ((tempo * 1.9)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return semFalemais;
      }
    }
    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= 60) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 60) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (2.09 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= 120) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 120) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (2.09 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }
  }
  if (origem == 16 && destino == 11) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= 30) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 30) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (3.19 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= 60) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 60) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (3.19 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= 120) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 120) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (3.19 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        let semFalemais = 'Valor da ligação sem o plano FaleMais é ' + ((tempo * 3.19)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return semFalemais;
      }
    }
  }
  if (origem == 11 && destino == 17) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= 30) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 30) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (1.87 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= 60) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 60) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (1.87 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= 120) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 120) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (1.87 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        let semFalemais = 'Valor da ligação sem o plano FaleMais é ' + ((tempo * 1.87)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return semFalemais;
      }
    }
  }
  if (origem == 17 && destino == 11) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= 30) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 30) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (2.97 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= 60) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 60) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (2.97 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= 120) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 120) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (2.97 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        let semFalemais = 'Valor da ligação sem o plano FaleMais é ' + ((tempo * 2.97)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return semFalemais;
      }
    }
  }
  if (origem == 11 && destino == 18) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= 30) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 30) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (0.99 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= 60) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 60) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (0.99 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= 120) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 120) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (0.99 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        let semFalemais = 'Valor da ligação sem o plano FaleMais é ' + ((tempo * 0.99)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return semFalemais;
      }
    }
  }
  if (origem == 18 && destino == 11) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= 30) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 30) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (2.09 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= 60) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 60) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (2.09 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= 120) {
        let comFaleMais = 'Valor da ligação com o plano é ' + ((0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      } else if (tempo >= 120) {
        let = comFaleMais = ('Você excedeu os minutos do seu plano (acréscimo de 10% sobre a tarifa normal do minuto). O valor da ligação COM O PLANO FaleMais é ' + (2.09 * (tempo - plano)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        return comFaleMais;
      }
      return comFaleMais;
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        let semFalemais = 'Valor da ligação sem o plano FaleMais é ' + ((tempo * 2.09)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return semFalemais;
      }
    }
  }
};

const calcular = function () {
  document.getElementById("resultado").innerHTML =
    "" + faleMais();
};
