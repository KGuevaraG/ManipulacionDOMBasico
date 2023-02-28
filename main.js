const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form');
const input2 = document.querySelector('#calculo2');
const btn =  document.querySelector('#btnCalcular');
const res = document.querySelector('#result');

form.addEventListener('submit',sumar);


function sumar(event){
    console.log({event});
    event.preventDefault();
    const sumaR =input1.value+input2.value;
    res.innerHTML= "Resultado = "+ sumaR;  
}