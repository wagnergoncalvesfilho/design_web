let vezes = Number(prompt('digite o numero de vezes '));
for(let i = 1; i <=vezes; i++){
    if (vezes >100){
        alert("voce digitou um valor muito alto");
        break;
    }
    alert(`contei ${i} vezes`);
    if (i % 2 != 0){
        continue;
    }
    alert(`${i} é par`);
}