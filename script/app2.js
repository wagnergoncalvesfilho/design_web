"use strict"
class Animal{
    constructor(nome, cor = "desconhecida", altura = 0, peso = 0, raca = "desconhecida"){
        this.nome = nome;
        this.cor = cor;
        this.raca = raca;
        this.altura = altura;
        this.peso = peso;
    }
    falar(){
        alert("oi");
    }
    comer(peso_comida){
        this.peso += peso_comida;
        alert("comi");
    }
    cagar(peso_bosta){
        this.peso -= peso_bosta;
        alert("caguei");
    }
    saudar(){
        let msg = `ola, meu nome é ${this.nome}\n`;
        msg += `altura: ${this.altura} | peso: ${this.peso}\n`;
        msg += `sou da raca ${this.raca}`;
        return msg;
    }
}

class Cachorro extends Animal{
    constructor(nome, cor = "desconhecida", altura = 0, peso = 0, raca = "vira lata"){
        super(nome, cor, altura, peso, raca);
        this.patas = 4;
    }
    falar(){
        alert("au ! auu!");
    }

    saudar(){
        let msg = super.saudar();
        msg += "sou um cachorro \n";
        alert(msg);
    }
}

class Passaro extends Animal{
    constructor(nome, cor = "desconhecida", altura = 0, peso = 0, raca = "pardal"){
        super(nome, cor, altura, peso, raca);
    }
    falar(){
        alert("fiu! fiu!");
    }
    saudar(){
        let msg = super.saudar();
        msg += "eu sou um passaro \n";
        alert(msg);
    }
}
const balu = new Animal('balu');
const thor = new Cachorro("thor", "amarelo claro", 0.6, 4, "pudom");
const leleco = new Passaro("leleco brasil", "verde", 0.4, 0.8, "papagaio");
