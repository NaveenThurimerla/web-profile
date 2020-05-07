let body = document.querySelector("body")
let button = document.querySelector(".button")
let text = document.querySelector(".text")
let quotation = document.querySelector(".quotation")

body.style.backgroundColor="yellow";


button.addEventListener("click",changeColor);

function changeColor() {
    let r = (Math.random()*10).toString().slice(-3)
    let g = (Math.random()*10).toString().slice(-3)
    let b = (Math.random()*10).toString().slice(-3)

    const url = "https://api.quotable.io/random"
    let Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    
    let responseData = JSON.parse(Httpreq.responseText);
    
    
    let color="rgb("+r+","+g+", "+b+")"
    quotation.textContent = responseData.content;
    text.textContent=color;
    body.style.backgroundColor= color;

}