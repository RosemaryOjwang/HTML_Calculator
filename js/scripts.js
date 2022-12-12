
window.onload = function () {
    //const table = document.querySelector("table");
    //table.onclick = funtion(Event)  {
    // Event.preventDefault();
    const seven = document.getElementById("seven");
    seven.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "7";
    };

    const eight = document.getElementById("eight");
    eight.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "8";
    };
    const nine = document.getElementById("nine");
    nine.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "9";
    };
    const zero = document.getElementById("zero");
    zero.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "0";
    };
    const one = document.getElementById("one");
    one.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "1";
    };
    const two = document.getElementById("two");
    two.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "2";
    };
    const three = document.getElementById("three");
    three.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "3";
    };
    const four = document.getElementById("four");
    four.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "4";
    };
    const five = document.getElementById("five");
    five.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "5";
    };
    const six = document.getElementById("six");
    six.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "6";
    };
    const multiplication = document.getElementById("multiplication");
    multiplication.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "*";
    };
    const minus = document.getElementById("minus");
    minus.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "-";
    };
    const plus = document.getElementById("plus");
    plus.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "+";
    };
    const division = document.getElementById("division");
    division.onclick = function () {
        document.getElementById("resultsDisplay").innerText += "/";
    };
    const decimal = document.getElementById("decimal");
    decimal.onclick = function () {
        document.getElementById("resultsDisplay").innerText += ".";
    };
    const equals = document.getElementById("equals");
    equals.onclick = function () {
        //document.getElementById("resultsDisplay").innerText += "=";
        let operatorsList = document.getElementsByName("operator");
        let operator;
        for (i=0; i<operatorsList.length; i++)
        {
            operator = operatorsList[i].value; 
        
        
            switch (operator)  {
                case "*":
                    document.getElementById("resultsDisplay").innerText += " = " + (eval(document.getElementById("resultsDisplay").innerText));
                    break;
                case "/":
                    document.getElementById("resultsDisplay").innerText += " = "+ (eval(document.getElementById("resultsDisplay").innerText));
                    break;
                case "+":
                    document.getElementById("resultsDisplay").innerText += " = "+ (eval(document.getElementById("resultsDisplay").innerText));
                    break;
                case "-":
                    document.getElementById("resultsDisplay").innerText += " = "+ (eval(document.getElementById("resultsDisplay").innerText));
                    break;
                default:
                    document.getElementById("resultsDisplay").innerText = "Error";
            }

        }
        
    };
    const clear = document.getElementById("clear");
    clear.onclick = function () {
        document.getElementById("resultsDisplay").innerText = " ";
    };









}

