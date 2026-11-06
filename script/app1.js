"use strict"

const cadastro = document.getElementById('cadastro');
const tarefa = cadastro.tarefa;

// saida 
const lista = document.getElementById('lista');
cadastro.addEventListener('submit', function(e){
    e.preventDefault();

    const item = document.createElement("li");
    item.textContent = tarefa.value;
    const remover = document.createElement("button");
    remover.textContent = "remover";
    remover.addEventListener("click", function(v){
        v.preventDefault();
        item.remove();
    })
    lista.append(" ",remover);
    lista.append(item);
    cadastro.reset();
})