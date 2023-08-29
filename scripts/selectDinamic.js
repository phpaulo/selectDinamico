
/*  ***Este trecho de código serve apenas para teste ***
const evento = new Date('August 28, 2023 23:15:30');
evento.setFullYear('2015');
const anoAtual = evento.getFullYear(); 
*/


const anoAtual = new Date().getFullYear();
const anos = [];

for (let ano = 2017; ano <= anoAtual; ano++) {
  anos.push(ano);
}

anos.reverse();

function criarOpcoes() {
  for (let ano of anos) {
    const option = document.createElement("option");
    option.textContent = ano;
    option.value = ano;
    document.querySelector('[name="ano"]').appendChild(option);
  }
}

document.addEventListener("DOMContentLoaded", criarOpcoes);
