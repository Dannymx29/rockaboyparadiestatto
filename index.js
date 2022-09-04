const menuHamIcon = document.querySelector("#menu");
const mobielMenu = document.querySelector("#navbar");


menuHamIcon.addEventListener("click", toggleMobilepMenu);

function toggleMobilepMenu()
{
        mobielMenu.classList.remove('collapse');
        setTimeout(cerrar, 3000);
}

function cerrar(){
    mobielMenu.classList.add('collapse');
}




$(function (){
    $('[data-toggle="tooltip"]') .tooltip()
})