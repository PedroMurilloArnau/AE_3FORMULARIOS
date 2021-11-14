function validar() {

    let mensaje = "";
    let precioTotal = "";

    if(nombre.value.trim() == "") {
        mensaje += "Rellena el nombre. \n"
    } else {
        reNombre = /^[A-Z]/;
        if (nombre.value.trim().match(reNombre) == null) {
            mensaje += "Debe introducir su nombre con mayúscula inicial. \n"
        }
    }

    if(direccion.value.trim() == "") {
        mensaje += "Rellena la dirección. \n"
    }

    if(telefono.value.trim() == "") {
        mensaje += "Rellena el teléfono. \n"
    } else {
        /* Los teléfonos en España tienen 9 cifras,
        los móviles comienzan por 6 ó 7,
        y los teléfonos fijos comienzan por 8 o por 9 */
        reTelf = /^[6-9][0-9]{8}$/;
        if (telefono.value.replace(/\s+/g, '').match(reTelf) == null) {
            mensaje += "Formato de teléfono incorrecto (deben ser 9 cifras). \n"
        }
    }

    if(email.value.trim() == "") {
        mensaje += "Rellena el email. \n"
    } else {
        reEmail = new RegExp('^([0-9A-Za-z]+(((\.|_|-)[0-9A-Za-z]+)*))@(([0-9A-Za-z]+\.)+[0-9A-Za-z]+)$');
        if (email.value.trim().match(reEmail) == null) {
            mensaje += "Formato de email incorrecto. \n"
        }
    }

    tamano = document.getElementsByName("medida");
    let seleccionado = false;
    let precio;
    let opcion;
    for(let i=0; i<tamano.length; i++) {
        if (tamano[i].checked) {
            seleccionado = true;
            opcion = i;
            //precio = (i+1)*5;
            break;        
        }
    }
    if(!seleccionado) {
        mensaje += "Elige un tamaño de pizza. \n";
    } else {
        switch (opcion) {
            case 0:
                precio = 5;
                break;
            case 1:
                precio = 10;
                break;
            case 2:
                precio = 15;
                break;
        }
    }

    if(!(jam.checked || champ.checked || pin.checked || aceit.checked)) {
        mensaje += "Debes elegir al menos un ingrediente adicional. \n"
    } else {
        let adicionales = document.getElementsByName("ingrediente");
        for (let i=0; i<adicionales.length; i++) {
            if (adicionales[i].checked) {
                precio += 1;
            }
        }
    }


    aviso.innerText = mensaje;

    if (mensaje === "") {
        precioTotal = "El total de tu pedido son " + precio + " €.";
        total.innerText = precioTotal;
    } else {
        total.innerText = "";
    }

    
    return false;
}

window.onload = function() {
    pizzaweb.onsubmit = validar;
}