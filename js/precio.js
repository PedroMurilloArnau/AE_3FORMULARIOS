function calcuprecio(){
var total = 0
if(pequeña.checked){
    total = total + 5
}
if(mediana.checked){
    total = total + 10
}
if(grande.checked){
    total = total + 15
}
var sum = document.getElementsByClassName("checkbox")
for( i=0; i< sum.length;++i){
    if(sum[i].checked){
        total = total + 1
    }

}

alert("El precio total es de " + total+ " €")  
    
}
window.onload = function(){
    formulario.onsubmit = calcuprecio;//si la funcion validacion me retorna true, mando la 
                                    //información
}
