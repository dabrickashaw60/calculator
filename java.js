let a = 0;
let b = 0;
const addOperator = document.querySelector('#addition');
const subOperator = document.querySelector('#subtraction');
const mulOperator = document.querySelector('#multiply');
const divOperator = document.querySelector('#division');
let displayEq = document.querySelector('#input');
const num1 = document.querySelector('#one');
const num2 = document.querySelector('#two');
const num3 = document.querySelector('#three');
const num4 = document.querySelector('#four');
const num5 = document.querySelector('#five');
const num6 = document.querySelector('#six');
const num7 = document.querySelector('#seven');
const num8 = document.querySelector('#eight');
const num9 = document.querySelector('#nine');
const num0 = document.querySelector('#zero');
const clear = document.querySelector('#clear');
const submit = document.querySelector('#submit');
let answer = 0;

num1.addEventListener('click', () => {let newNum = 1; calcDisplay(newNum); return 1;});
num2.addEventListener('click', () => {let newNum = 2; calcDisplay(newNum); return 2;});
num3.addEventListener('click', () => {let newNum = 3; calcDisplay(newNum); return 3;});
num4.addEventListener('click', () => {let newNum = 4; calcDisplay(newNum); return 4;});
num5.addEventListener('click', () => {let newNum = 5; calcDisplay(newNum); return 5;});
num6.addEventListener('click', () => {let newNum = 6; calcDisplay(newNum); return 6;});
num7.addEventListener('click', () => {let newNum = 7; calcDisplay(newNum); return 7;});
num8.addEventListener('click', () => {let newNum = 8; calcDisplay(newNum); return 8;});
num9.addEventListener('click', () => {let newNum = 9; calcDisplay(newNum); return 9;});
num0.addEventListener('click', () => {let newNum = 0; calcDisplay(newNum); return 0;});
addOperator.addEventListener('click', () => {let currOperator = "+"; calcDisplay(" " + currOperator + " ")});
subOperator.addEventListener('click', () => {let currOperator = "-"; calcDisplay(" " + currOperator + " ")});
mulOperator.addEventListener('click', () => {let currOperator = "*"; calcDisplay(" " + currOperator + " ")});
divOperator.addEventListener('click', () => {let currOperator = "/"; calcDisplay(" " + currOperator + " ")});
clear.addEventListener('click', () => {let clearMe = ""; clearDisplay(clearMe);});
submit.addEventListener('click', () => {operate();});

function calcDisplay(newNum){
  displayEq.innerHTML += newNum;

}
function clearDisplay(clearMe){
  displayEq.textContent = "";
}

function add(firstNum,secondNum){
  answer = firstNum + secondNum;
  return answer;
}
function subtract(firstNum,secondNum){
  answer = firstNum - secondNum;
  return answer;
}
function multiply(firstNum,secondNum){
  answer = firstNum * secondNum;
  return answer;
}
function divide(firstNum,secondNum){
  answer = firstNum / secondNum;
  return answer;
}

function operate(){
  let testy = displayEq.textContent;
  let result = testy.split(" ");
  let firstNum = 0;
  let secondNum = 0;
  let operator = "";
  for(i = 0; i < result.length; i++){
    firstNum = parseInt(result[0]);
    secondNum = parseInt(result[2]);
    operator = result[1];
  }
  if(operator === "+"){
    add(firstNum,secondNum);
  }
  else if(operator === "-"){
    subtract(firstNum, secondNum);
  }
  else if(operator === "*"){
    multiply(firstNum, secondNum);
  }
  else{
    divide(firstNum, secondNum);
  }
  displayEq.innerHTML = answer;
}