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
      if (tempo <= plano) {
        return alert(tempo * 1.9);
      } else if (tempo >= 80) {
        return parseInt(alert(2.09 * (tempo - plano)));
      }
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        return parseInt(alert(tempo * 1.9));
      }
    }
    // plano FaleMais 60
    if (plano == 60) {
      if (tempo >= 60) {
        return parseInt(alert(2.09 * (tempo - plano)));
      }
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo >= 120) {
        return parseInt(alert(2.09 * (tempo - plano)));
      } else if (tempo <= 120) {
        return alert("você não excedeu os minutos do seu plano");
      }
    }
  }
  if (origem == 16 && destino == 11) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 30) {
        return parseInt(alert(Math.round(3.19 * (tempo - plano))));
      }
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 60) {
        return parseInt(alert(3.19 * (tempo - plano)));
      }
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 120) {
        return parseInt(alert(3.19 * (tempo - plano)));
      }
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        return parseInt(alert(tempo * 2.9));
      }
    }
  }
  if (origem == 11 && destino == 17) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 30) {
        return parseIntd(alert(1.87 * (tempo - plano)));
      }
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 60) {
        return parseInt(alert(((tempo - plano) * 1.87).toFixed(2)));
      }
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 120) {
        return parseInt(alert(1.87 * (tempo - plano)));
      }
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        return parseInt(alert((tempo * 1.7).toFixed(2)));
      }
    }
  }
  if (origem == 17 && destino == 11) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 30) {
        return parseInt(alert(2.97 * (tempo - plano)));
      }
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 60) {
        return parseInt(alert(2.97 * (tempo - plano)));
      }
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 120) {
        return parseInt(alert(2.97 * (tempo - plano)));
      }
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        return parseInt(alert(tempo * 2.7));
      }
    }
  }
  if (origem == 11 && destino == 18) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 30) {
        return parseInt(alert(0.99 * (tempo - plano)));
      }
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 60) {
        return parseInt(alert(0.99 * (tempo - plano)));
      }
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 120) {
        return parseInt(alert(0.99 * (tempo - plano)));
      }
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        return parseInt(alert(tempo * 0.9));
      }
    }
  }
  if (origem == 18 && destino == 11) {
    // plano FaleMais 30
    if (plano == 30) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 30) {
        return parseInt(alert(2.09 * (tempo - plano)));
      }
    }

    // plano FaleMais 60
    if (plano == 60) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 60) {
        return parseInt(alert(2.09 * (tempo - plano)));
      }
    }
    // plano FaleMais 120
    if (plano == 120) {
      if (tempo <= plano) {
        return alert("você não excedeu os minutos do seu plano");
      } else if (tempo >= 120) {
        return parseInt(alert(2.09 * (tempo - plano)));
      }
    }

    // calculo sem o plano
    if (plano == 1) {
      if (tempo >= 20) {
        return parseInt(alert(tempo * 1.9));
      }
    }
  }
};

const calcular = function () {
  document.getElementById("resultado").innerHTML = "inserir texto";
};
