// the change in state of an object is known as an event event are fired to notify code of interesting changes that may affect code execution.
//to call any event this is the syntax
// node.event=()=>{
// }

// document.querySelector(".clicky").onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     console.log("button clicked");
// }

//Event object
// it is a special object that has details about event all event handler have access to the event object's properties and methods
// Node.event = (e) => {
    //handler here
// }

// e.target , e.type , e.clientX , 


//EVENT LISTENER
// the better way to use event is to use event listener cause it allows to have multiple event on a single object 

// syntax : Node.addEventListener(" event" , " function")

document.querySelector(".clicky").addEventListener("click" , (evt) => {
    console.log("button clicked");
    console.log(evt)
})