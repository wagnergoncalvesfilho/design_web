"use strict"
// variaveis de processamento
const lista = [];

// entradas
const formulario = document.getElementById("formulario");
const texto = formulario.texto;

//saida
const tags = document.getElementById("tags");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let frase = texto.value;
    frase = frase.sp
    tags.innerHTML = frase;
    formulario.resert();
})