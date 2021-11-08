var form = document.getElementById('formulario');

form.addEventListener('submit', function(event){//Prevenimos que el comportamiento del formulario por defecto, que sería el envio de los datos, hasta que todos los datos estén validados
    event.preventDefault();
    console.log('Validando formulario...')    

    var datosPersonales = document.getElementsByName("datos");
    for(var i=0; i<datosPersonales.length; i++){//Compruebo que no exista ningún campo vacio o nulo        
        console.log(datosPersonales[i].id + ":" + datosPersonales[i].value.trim());
        if(datosPersonales[i].value.trim()=== '' || datosPersonales[i].value.trim()=== null){
            console.log("El campo: " + datosPersonales[i].id + " es obligatorio");            
        } 
        //Validadción nombre
        if(datosPersonales[i].id == 'nombre'){
            let reNom=/^[A-Z]/;
            var valNom = false;
            if(!datosPersonales[i].value.match(reNom)){
                console.log("El nombre tiene que comenzar por mayuscula.")
            }else valNom = true;             
        }
        //Validación Tlf
        if(datosPersonales[i].id == 'tlf'){
            let re = /(\+34|0034|34)?[ -]?(6|7)[ -]?([0-9][ -]?){8}/;
            var valTlf = false;
            if(!datosPersonales[i].value.match(re)){
                console.log("Error Telefono no tiene formato correcto");                
            }else valTlf = true;            
        }
        //Validacion Email
        if(datosPersonales[i].id == 'mail'){
            let reMail = /^(\w+)\.?(\w+)@{1}(\w+)\.{1}[a-z]{3}$/
            var valMail = false;
            if(!datosPersonales[i].value.match(reMail)){
                console.log("El correo no tiene formato correcto")
            }else valMail = true;                         
        }
    }
    var tamanio = document.getElementsByName("tamano");
        var valSele = false;
        var precio = 0;
        for(var i=0; i<tamanio.length; i++){
            if (tamanio[i].checked){
                valSele = true;
                precio = (i+1)*5;
                break;
            }
        }
        if(!valSele){//Validacion del tamaño
            alert("Selecciona el tamaño")            
        }
        if(!(jamon.checked||queso.checked|| stomate.checked || bacon.checked)){//Validacion Ingredientes
             alert("Selecciona un ingrediente.");
        }
        var ingrediente = document.getElementsByName('ingrediente');   
        var valIngr = false;     
        for(var i=0; i<ingrediente.length; i++){
            if(ingrediente[i].checked){
                precio += 1;
                valIngr = true;
            }    
        }
    if((valNom && valTlf && valMail && valSele && valIngr) ===true){
        console.log("El precio total es de: "+ precio +" €."); 
    }     
})