let anoNasc = Number(prompt("digite seu ano de nascimento"));
let mesNasc = Number(prompt("digite seu mes de nascimento"));
let diaNasc = Number(prompt("digite seu dia de nascimento"));

let idade;

function calcMaiorIdade(ano = 2026, mes = 9, dia = 2){
    let idade = ano - anoNasc
    if ( idade >=18){
        alert("voce é maior de idade");
    }
    else if( idade < 18){
        alert("voce é menor de idade");
    }
    else{
        if ( mesNasc > mes || (mesNasc == mes && dia > 2)){
            idade -= 1
        }
    }
}