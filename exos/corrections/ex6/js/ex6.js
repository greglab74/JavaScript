
var myDiv = document.getElementsByTagName('div')[0];
myDiv.style.color = "black";
myDiv.style.textAlign = "right";

// crée un nouvel élément div
var newDiv = document.createElement("div");
// et lui donne un peu de contenu
var newContent = document.createTextNode("world");
// ajoute le noeud texte au nouveau div créé
newDiv.appendChild(newContent);
// ajoute le nouvel élément créé et son contenu dans le DOM
document.body.appendChild(newDiv);

[myDiv.innerText, newDiv.innerText] = [newDiv.innerText, myDiv.innerText];

var myTempDiv = myDiv;
myDiv = newDiv;
newDiv = myTempDiv;

myDiv.style.cssFloat = "left";
newDiv.style.cssFloat = "right";
