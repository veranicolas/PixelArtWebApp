

var colores = document.getElementById('colores');
var colorValor = colores.value;
var erase = document.getElementById('borrar');
var cajas = document.getElementsByClassName('box');
var limpiarCanvas = document.getElementById('limpiar');
var pintar = document.getElementById('brocha');

colores.addEventListener('input', ()=>{
    colorValor = colores.value;
})

function colorear(e, color){
    var caja = e.target;

    if (caja.classList == 'box'){
        caja.style.backgroundColor = color;
    }
}

function borrar(){
    colorValor = 'white';
}

function borrarTodo(){
    for(let i = 0; i < cajas.length; i++){
        cajas[i].style.backgroundColor = 'white';
    }
}

limpiarCanvas.addEventListener('click', borrarTodo);

erase.addEventListener('click', borrar);

window.addEventListener('click', (e)=>{
    colorear(e, colorValor);
});

pintar.addEventListener('click', ()=>{
    colorValor = colores.value;
})
