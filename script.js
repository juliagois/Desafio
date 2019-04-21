let hamburguer= document.querySelector("div");
let menuHamburguer= document.querySelector("#menuHamburguer");
//let links = document.querySelector("a");



function abrirMenu(){
    hamburguer.classList.toggle("abrirMenu");
 }
  
  menuHamburguer.onclick = abrirMenu;


