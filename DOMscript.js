// console.log(document.querySelector("div").getAttribute("class"))
// document.querySelector("p").setAttribute("class" , "newclass")
// console.log(document.querySelector("p").style)\
// let p= document.querySelector("p")
// p.style.backgroundColor="red"
// when we need to create an element 
let el = document.createElement("div")
el.innerText = " Hello varun";
// document.querySelector("div").append(el);
// document.querySelector("div").prepend(el);
document.querySelector("div").appendChild(el);
// document.querySelector("div").before(el);
// document.querySelector("div").after(el);

// document.querySelector("p").remove()
