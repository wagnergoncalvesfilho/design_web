// saida
const topo = document.getElementById("topo");
const enfase = document.getElementById("enfase");

//evento
window.addEventListener('scroll', function(e){
    if (window.screenY > 0){
        topo.classList.add('solido');
    }
    else{
        topo.classList.remove('solido');
    }
})

function destacar(){
    enfase.classList.add("destaque");
}
function cancelar(){
    enfase.classList.remove("destaque");
}