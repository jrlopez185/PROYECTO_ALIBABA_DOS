import {validatos} from "./login.js";

document.querySelector('#bo').addEventListener('click', initSesion);

function initSesion(){
    var bUsuario = '';
    var bContrasena = '';
    var bAcceso = false;

    bUsuario = document.querySelector('#username').value;
    bContrasena = document.querySelector('#xpassword').value;

    bAcceso = validatos(bUsuario, bContrasena);
    
    if(bAcceso == true){
        ingresar();
    }
}


function ingresar(){
    var perfil = sessionStorage.getItem('PerfilUsuarios');
    switch(perfil){
    case '100':
        window.location.href = 'ana.html';
    break;
    case '101':
        window.location.href = 'carol.html';
    break;
    case '102':
        window.location.href = 'julia.html';
    break;
    case '103':
        window.location.href = 'irene.html';
    break;
    case '104':
        window.location.href = 'rachel.html';
    break;
    case '105':
        window.location.href = 'sophie.html';
    break;
    case '106':
        window.location.href = 'wendy.html';
    break;
    default:
        window.location.href = 'index.html';
    break;
    }

}

