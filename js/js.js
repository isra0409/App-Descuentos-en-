function calcularPrecioDesc(precio, descuento) {
    
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

function clickCalcular() {

    const precioProd = document.getElementById('precio-prod')
    const precioProdV = precioProd.value;

    const descuentoProd = document.getElementById('precio-desc')
    const descuentoProdV = descuentoProd.value;

    if (precioProdV === ""){
        document.getElementById('add-txt').classList.add('txt-add-activo')
        document.getElementById('txt-js').classList.add('txt-agregado-inactivo')

    } else {
        document.getElementById('add-txt').classList.remove('txt-add-activo')
        document.getElementById('txt-js').classList.remove('txt-agregado-inactivo')
        document.getElementById('txt-js').classList.add('txt-agregado-activo') 
    }

    const precioConDescuento = calcularPrecioDesc(precioProdV, descuentoProdV);

    const resultP = document.getElementById('txt-js');
    resultP.innerText = `Precio con descuento aplicado: $${precioConDescuento}`

    document.getElementById('form-app').reset()  
}



   







    

