//Business logic
//calculator function
function calculate() {
}
function getUserInput() {
  let userInput = document.getElementsByName("userInput");
  let inputValue;
  for (i = 0; i < userInput.length; i++) {
    if (userInput[i].checked) {
      inputValue = userInput[i].value;
    }
  }
  return inputValue;
}
//switch statement to perform mathematical operation based on operator clicked
let mathematicalOperator;
let output;
switch (mathematicalOperator) {
  case "+":
    output = inputValue1 + inputValue2;
    break;
case "-":
  output = inputValue1 - inputValue2;
  break;
case "*":
  output = inputValue1 * inputValue2;
  break;
case "/":
  output = inputValue1 / inputValue2;
  break;
default:
  alert("You chose an invalid operator");
}
 