let body = document.querySelector("body")
let button = document.querySelector("button")

body.style.backgroundColor="yellow";
var node = document.createTextNode("This is new.");

button.appendChild(node)

button.addEventListener("mouseover",changeColor);

function changeColor() {
    let r = (Math.random()*10).toString().slice(-3)
    let g = (Math.random()*10).toString().slice(-3)
    let b = (Math.random()*10).toString().slice(-3)
    
    let color="rgb("+r+","+g+", "+b+")"
    body.style.backgroundColor= color;

}