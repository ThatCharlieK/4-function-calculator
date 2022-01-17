let prompt = require ("prompt-sync")();

function getCalcPrompt (){
    let numOne = prompt("input the first number: ");
    if (numOne === "exit"){
        console.log("exiting");
        process.exit(0);
    }
    let numTwo = prompt("input the second number: ");
    let op = prompt("input the operator: ");
    return([numOne, numTwo, op])
}

function fourFunctCalc (num1, num2, op){
    if (op == "+"){
        return(num1+num2)
    }
    if (op == "-"){
        return(num1-num2)
    }
    if (op == "/"){
        return(num1/num2)
    }
    if (op == "*"){
        return(num1*num2)
    }
}
while (true) {
    let [numOne, numTwo, op] = getCalcPrompt();
    console.log(fourFunctCalc(numOne, numTwo, op))
}