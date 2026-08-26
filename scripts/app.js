var nasc = 2009;
let nome = "Wagner";
const viva = true;

function calcIdade(ano = 2026){
    let idade = ano -nasc;
    let menor;
    if (idade < 18){
        menor = true;
        var podebeber = false
    }
    else{
        menor = false;
        var podebeber = true
    }
    alert(`${nome} é menor de idade? ${menor}\n idade: ${idade}\nPode beber: ${podebeber}`);
    return idade;
}

calcIdade();
/*
var vaza a variavel dentro do escopo da mesma funcao
alert(`Pode beber: ${podebeber}`);
*/
