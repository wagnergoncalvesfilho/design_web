const balu = {
    nome: 'balu',
    cor: "amarelo",
    altura : 0.40,
    peso : 11.0, 
    raca : "pudom",
    latir(){
        alert("au!");
    },
    comer(kg){
        this.peso += kg;
        alert("comi, meu peso é " + this.peso.toFixed(2));
    },
    cagar(kg){
        this.peso -= kg;
        alert("caguei, meu peso é " + this.peso.toFixed(2));
    },
    saudar(){
        msg = `ola, meu nome é ${this.nome}\n`;
        msg += `altura: ${this.altura} | peso: ${this.peso}\n`;
        msg += `sou da raca ${this.raca} \n`
        alert(msg)
    }
}