import inquirer from "inquirer";
const answer= await inquirer.prompt([
    {message:"select first number" ,type:"number",name:"firstNumber"},
    {message:"select second number", type:"number", name:"secondNumber"},
    {
        message:"select any one of the operators to perform operation",
        type:"number",
        name:"list",
        choices:["Addition","Subtraction","Multiplication","Division"]
    }
])
if (answer.operater ==="Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.operater ==="Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.operater ==="Multiplication"){

    console.log(answer.firstNumber * answer.secondNumber)
}
else if (answer.operater ==="Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else {
    console.log("please select valid operator" )
}