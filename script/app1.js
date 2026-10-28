// saida
const topo = document.getElementById("topo");


//evento
window.addEventListener('scroll', function(e){
    if (window.screenY > 0){
        topo.classList.add('solido');
    }
    else{
        topo.classList.remove('solido');
    }
})