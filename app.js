"use strict"
const lista = [];
const favoritos = [];

class Cachorro {
    constructor(id, img, nome, port, desc, idade, pers, cov, vac) {
        this.id = id;
        this.img = img;
        this.nome = nome;
        this.porte = port;
        this.desc = desc;
        this.idade = idade;
        this.personalidade = pers;
        this.covivencia = cov;
        this.vacinas = vac;
    }
    comoCard(){
        const card = document.createElement("article");
        card.setAttribute("class", 'dog_card');
        card.innerHTML = `
        <img src = "${this.img}" alt="${this.nome}" />
        <div class="dog-card-body">
            <h3> ${this.nome} </h3>
            <div class="dog-meta"> ${this.porte} </div>
            <div class="dog-meta"> ${this.personalidade} </div>
        </div>
        `;
        return card;
    }
}
window.addEventListener("load", function(e){
    const c1 = new Cachorro(1, "./img/1.jpg", "balu", 'é um viralata brem travesso',
        'pequeno', 6, "alegre e companheiro", 'boa', 3
    );
    const c2 = new Cachorro(2, "./img/2.jpg", "mel", 'anjo de prata',
        'medio', 12, "calma e generosa", 'boa', 9
    );
    const c3 = new Cachorro(3, "./img/3.jpg", "aia", 'dona da porra toda',
        'pequeno', 4, "braba e protetora", 'boa', 3
    );

    lista.push(c1, c2, c3);
    
});

function exibirLista( qtd = null, nome =null ){
    if (qtd != null){
        var tam = qtd;
    }
    else{
        var tam = lista.length;
    }
    const dog_list = document.getElementById("dog_list");
    for(let i = 0; i < tam; i ++){
        let item = lista[i];
        dog_list.append(item.comoCard());
    }
}

const busca = document.getElementById("busca");
busca.addEventListener("submit", function(e){
    e.preventDefault();
    let nome = busca.nome;
    let (nome != undefined ){
        exibirLista(null, nome.value);
    }
});