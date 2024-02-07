function alerta(){
    alert("Ninja was liked");
}

function desaparecer(elemento){
    document.getElementById(elemento).style.display = "none"
}

function cambio(){
    const elemento = document.getElementById('Login')

    if(elemento.innerHTML === 'Log In'){
        elemento.innerHTML = 'Log Out'
    }else if(elemento.innerHTML === 'Log Out'){
        elemento.innerHTML = 'Log In'
    }
}