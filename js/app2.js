let dia = prompt("escolha um dia da semana \n sendo 1:domingo - 7: sabado")
if (dia <=0 || dia >= 8){
    alert('dia invalido')
}
else if (dia == 1){
    alert("voce escolheu domingo")
}
else if (dia == 2){
    alert("voce escolheu segunda")
}
else if (dia == 3){
    alert("voce escolheu terca")
}
else if (dia == 4){
    alert("voce escolheu quarta")
}
else if (dia == 5){
    alert("voce escolheu quinta")
}
else if (dia == 6){
    alert("voce escolheu sexta")
}
else{
    alert("voce escolheu sabado")
}