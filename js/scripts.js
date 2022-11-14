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