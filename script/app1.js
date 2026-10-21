"use strict"
//armazenar
let hoje = new Date();

//entrada de dados
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc =  cadastro.nasc;

//saida
const saudacao = document.getElementById("saudacao");
const aniversario = document.getElementById("aniversario");

//decorrer do programa
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let data_nasc = new Date(nasc.value);
    let data_aniv = new Date(hoje.getFullYear(), data_nasc.getMonth(), data_nasc.getDate());
    let data_formatada = `${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`;
    saudacao.innerHTML = `ola, ${nome.value} | hoje é ${data_formatada}`;
    if (data_aniv > hoje){
    aniversario.innerHTML = `diferenca de hoje pra o aniversario ${data_aniv - hoje}`;
    }
    else{
    aniversario.innerHTML = `diferenca de hoje pra o aniversario ${hoje - data_aniv}`;
    }
    cadastro.reset();
});