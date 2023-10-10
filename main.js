const form = document.getElementById("form");
const limparBtn = document.getElementById("limpar");

let linhas = "";
const imagemContato = '<img src = "./imagem/contato.png" alt="logo-contato">';
const imagemTelefone = '<img src = "./imagem/telefone.png" alt="logo-telefone">';
const contato = [];
const telefone = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  CriaLinha();
  adicionaCorpo();
  adicionaContador();
  limpaInput();
});

limparBtn.addEventListener("click", function () {
  limparContatos();
});

function CriaLinha() {
  const inputNomeContato = document.getElementById("contato");
  const inputTelefone = document.getElementById("telefone");

  if (inputNomeContato.value === "" || inputTelefone.value === "") {
    alert("Por favor, Preencha todos os campos");
    return;
  }
  if (isNaN(inputTelefone.value) || inputTelefone.value.length !== 11) {
    alert("Por favor, insira um número de telefone válido");
    return;
  }

  contato.push(inputNomeContato.value);
  telefone.push(inputTelefone.value);

  const linha = document.createElement("tr");

  const tdContato = document.createElement("td");
  tdContato.innerHTML = imagemContato;
  tdContato.appendChild(document.createTextNode(`-${inputNomeContato.value}`));
  linha.appendChild(tdContato);

  const tdTelefone = document.createElement("td");
  tdTelefone.innerHTML = imagemTelefone;
  tdTelefone.appendChild(document.createTextNode(`-${parseInt(inputTelefone.value)}`));
  linha.appendChild(tdTelefone);

  linhas += linha.outerHTML;
}

function adicionaCorpo() {
  const corpo = document.querySelector("tbody");
  corpo.innerHTML = linhas;
}

function adicionaContador() {
  const contador = document.getElementById("contatos-salvos");
  contador.textContent = `Contatos Salvos: ${contato.length}`;
}

function limpaInput() {
  document.getElementById("contato").value = "";
  document.getElementById("telefone").value = "";
}

function limparContatos() {
  contato.length = 0;
  telefone.length = 0;
  linhas = "";
  adicionaCorpo();
  adicionaContador();
}
