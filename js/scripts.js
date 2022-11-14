//Business logic
//A function to perfom multiplication
function multiplication() {
  let number1;
  let number2;
  return number1 * number2;
}

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