

let numero = document.querySelectorAll(".btn");
let m = document.querySelector(".display");
let AC = document.querySelector("#Eliminar");
let igual = document.querySelector(".igual");
let alterar = document.querySelector("#alterar");
let operadores = document.querySelectorAll(".operadores");
let percentagem=document.querySelector("#porcentos")
let resultado=0
let primeiro = ""
let segundo = ""
let opm = ""

numero.forEach(function(n) {
  n.addEventListener("click", function() {
    if (opm == "") {
      primeiro += n.dataset.number
    } else {
      segundo += n.dataset.number
    }
    m.textContent = primeiro + opm + segundo
  });
});

operadores.forEach(function(o) {
  o.addEventListener("click", function() {
    opm = o.textContent;
    m.textContent += opm
  })
})

igual.addEventListener("click", function() {
  if (opm == "+") {
    resultado= Number(primeiro) + Number(segundo)
    m.textContent = resultado
  }

  if (opm == "x") {
     resultado= Number(primeiro) * Number(segundo)
    m.textContent = resultado
  }

  if (opm == "-") {
    resultado= Number(primeiro) - Number(segundo)
    m.textContent = resultado
    
  }

  if (opm == "/") {
    resultado = Number(primeiro) / Number(segundo)
    m.textContent = resultado
  }

  primeiro = m.textContent
  segundo = ""
  opm = ""
})

AC.addEventListener("click", function() {
  primeiro = ""
  segundo = ""
  opm = ""
  m.textContent = ""
})

function mudar() {
  if (opm == "") {
    primeiro = "" + (Number(primeiro) * -1)
  } else {
    segundo = "" + (Number(segundo) * -1)
  }
  m.textContent = primeiro + opm + segundo
}

alterar.addEventListener("click", mudar);

// percentagem.addEventListener("click",function () {

// })
