 function Mostrar() {
    document.getElementById("divCompleto").style.display = "none";   
    document.getElementById("navMenu").style.display = "block"; 
};

function Cerrar() {
    document.getElementById("divCompleto").style.display = "block";   
    document.getElementById("navMenu").style.display = "none"; 
};

const irArriba = document.querySelector(".ir-arriba");

irArriba.addEventListener('click',() => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scoll", () => {
    if(window.scolly < 560) {
        irArriba.style.left = -100 + "px";
    } else {
        irArriba.style.left = 5 + "px";
    }
});



