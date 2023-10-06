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
});

limparBtn.addEventListener("click", function () {
  limparContatos();
});

function CriaLinha() {
  const inputNomeContato = document.getElementById("contato");
  const inputTelefone = document.getElementById("telefone");

  contato.push(inputNomeContato.value);
  telefone.push(inputTelefone.value);

  let linha = "<tr>";
  linha += `<td> ${imagemContato}<b>-${inputNomeContato.value}</b></td>`;
  linha += `<td> ${imagemTelefone} -${parseInt(inputTelefone.value)}</td>`;
  linha += "</tr>";

  linhas += linha;

  document.getElementById("contato").value = "";
  document.getElementById("telefone").value = "";
}

function adicionaCorpo() {
  const corpo = document.querySelector("tbody");
  corpo.innerHTML = linhas;
}

function adicionaContador() {
  const contador = document.getElementById("contatos-salvos");
  contador.textContent = `Contatos Salvos: ${contato.length}`;
}

function limparContatos() {
  contato.length = 0;
  telefone.length = 0;
  linhas = "";
  adicionaCorpo();
  adicionaContador();
}
