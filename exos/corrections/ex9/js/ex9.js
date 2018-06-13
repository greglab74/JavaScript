//modification de la zone sensible au hover
document.querySelector("h1").style.display = "inline-block";
document.body.style.textAlign = "center";

//mouse over
document.querySelector("h1").onmouseenter = function(){
    this.style.color = "red";
};
document.querySelector("h1").onmouseleave = function(){
    this.style.color = "black";
};

//clic sur l'élément
document.querySelector("h1").onclick = function(){   
    
    this.animate([
            // keyframes
            { transform: 'translateX(0px)' }, 
            { transform: 'translateX(-300px)' },
            { transform: 'translateX(0px)' }
        ],{ 
            // timing options
            duration: 1000
            // iterations: Infinity
    });
};

// document.querySelector("h1").onclick = function(){   
    
//     this.classList.toggle("move");
// };