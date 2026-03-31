function somar(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const btnSomar = document.querySelector("#S");
const btnSub = document.querySelector("#SU");
const btnMult = document.querySelector("#M");
const btnDiv = document.querySelector("#D");

const valor = document.querySelector(".valor");

btnSomar.addEventListener("click", function () {
  valor.textContent = somar(5, 10);
});
btnSub.addEventListener("click", function () {
  valor.textContent = sub(5, 10);
});
btnMult.addEventListener("click", function () {
  valor.textContent = mult(5, 10);
});
btnDiv.addEventListener("click", function () {
  valor.textContent = div(5, 10);
});
