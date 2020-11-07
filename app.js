
window.addEventListener('click', (e)=>{

    var caja = e.target;

    //console.log(caja)

    if (caja.classList == 'box'){
        caja.style.backgroundColor = 'blue';
    }
})