console.log(window.navigator)
console.log(window.history)

document.write("Hello");

let pegar=document.querySelector('[href~="https"]');

pegar.style.border.color="red";

let btn=document.querySelector(".tocar");
let p = document.querySelector(".project");


btn.addEventListener("click",function(){
   p.classList.add("none");
})



