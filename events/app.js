let titulo = document.querySelector("h1");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let res = document.querySelector(".req");
let btn = document.querySelector('#btnSumar')
titulo.innerText="MANIPULACION DOM";
titulo.classList.add("f1"); 


btn.addEventListener('click',sumar1)


function sumar1(){
    let num1= input1.value;
    let num2= input2.value;
    let resultado = Number(num1) + Number(num2); 
    console.log(resultado);
    res.innerText= resultado; 

}

let sumar=()=>{
    let num1= input1.value;
    let num2= input2.value;
    let resultado = Number(num1) + Number(num2); 
    console.log(resultado);
    res.innerText= resultado; 
    

}