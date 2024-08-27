let random=Math.random()
alert(random)
let a=prompt("Enter the first number : ")
let b=prompt("Enter the second number : ")
let c=prompt("Enter the modifier  : ")
let obj={
    "+":"-" ,
    "*":"+" ,
    "-":"/" ,
    "/":"**"
}
if (random>0.1){
    alert(`The ans of ${a} ${c} ${b} is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The ans of ${a} ${c} ${b} is ${eval(`${a} ${c} ${b}`)}`)
}