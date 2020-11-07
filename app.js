

var colores = document.getElementById('colores');
var colorValor = colores.value;

colores.addEventListener('input', ()=>{
    colorValor = colores.value;
})

function colorear(e, color){
    var caja = e.target;

    //console.log(colorValor)

    if (caja.classList == 'box'){
        caja.style.backgroundColor = color;
    }
}

window.addEventListener('click', (e)=>{
    colorear(e, colorValor);
});
