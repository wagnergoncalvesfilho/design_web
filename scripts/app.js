var nasc = 2009;
let nome = "pedrina";
const viva = true;

function calcIdade(ano = 2026){
    let idade = ano -nasc;
    alert(`Dentro de funcao - Idade ${idade}`);
    return idade;
}

calcIdade();
/* 
alert(`fora da funcao: Idade: ${idade}`);
erro, pois a variavel let nao existe fora do escoppo dele
*/
alert(`fora da funcao: chamando calcIdade ${calcIdade()}`);