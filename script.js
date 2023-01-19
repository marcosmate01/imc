function calculator(){
    const nome = document.getElementById("nome").value
    var altura = (document.getElementById("altura").value)/100
    var peso = document.getElementById("peso").value

    var imc = peso/(altura)**2;    
    var text = "" 

    if (imc < 18.5){
        text=("você está magro")
    }
     else if (imc < 24.9){
       text=("você está normal")
    }
    else if (imc < 29.9){
        text=("você está com sobrepeso")
        
    }
    else if (imc > 29.9){
        text=("você está com sobrepeso")
    }
    else if (imc > 39.9){
        text=("você está obeso")
         
    }
    document.getElementById("text_area").innerText = nome + "," + text  

}