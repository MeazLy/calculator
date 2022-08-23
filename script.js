const digits = document.querySelectorAll(".digit")
const operators = document.querySelectorAll(".operator")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const numDisplay = document.querySelector(".numDisplay")
const result = document.querySelector(".resultDisplay")


let firstNum = ""
let secondNum = ""
let operator = ""
let secondOperator = ""



function operate(num1,num2,operator){
    if(operator === "/" && num2 === parseFloat(num2) == 0){
        clear()
        result.innerText = "Why would you do that to me"
    }else{
    switch(operator){
        case "+":
            firstNum = parseFloat(num1) + parseFloat(num2)
            result.innerText = (parseFloat(num1) + parseFloat(num2)).toFixed(2)
            secondOperator = ""
            secondNum = ""
            numDisplay.innerText = ""
            break;
        case "-":
            firstNum = parseFloat(num1) - parseFloat(num2)
            result.innerText = (parseFloat(num1) - parseFloat(num2)).toFixed(2)
            secondOperator = ""
            secondNum = ""
            numDisplay.innerText = ""
            break;
        case "*":
            firstNum = parseFloat(num1) * parseFloat(num2)
            result.innerText = (parseFloat(num1) * parseFloat(num2)).toFixed(2)
            secondOperator = ""
            secondNum = ""
            numDisplay.innerText = ""
            break;
        case "/":
            firstNum = parseFloat(num1) / parseFloat(num2)
            result.innerText = (parseFloat(num1) / parseFloat(num2)).toFixed(2)
            secondOperator = ""
            secondNum = ""
            numDisplay.innerText = ""
            break;
    
    
    }
    }

}

digits.forEach(digit => {
    digit.addEventListener("click", e => {
        if(result.innerText == "Why would you do that to me"){
            result.innerText = ""
        }
        if(operator == ""){
            firstNum += e.target.innerText
            numDisplay.innerText = firstNum
        }else{
            
            secondNum += e.target.innerText
            numDisplay.innerText = secondNum
        }


    })
})
operators.forEach(operatorButton => {
    operatorButton.addEventListener("click", e => {
        
        operator = e.target.innerText
        if(secondOperator == ""){
            secondOperator = operator
        }
        if(firstNum && secondNum != ""){
        operate(firstNum,secondNum,secondOperator)
        secondOperator = operator
        }
      
  
    })
})

equalsButton.addEventListener("click", () => {
    operate(firstNum,secondNum,secondOperator)
})

function clear(){
    firstNum = ""
    secondNum = ""
    operator = ""
    secondOperator = ""
    numDisplay.innerText = ""
    result.innerText = ""
}
clearButton.addEventListener("click", clear)
