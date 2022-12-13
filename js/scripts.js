
window.onload = function () {
    const seven = document.getElementById("seven");
    seven.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "7";
    }
    );

    const eight = document.getElementById("eight");
    eight.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "8";
    }
    );
    const nine = document.getElementById("nine");
    nine.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "9";
    }
    );
    const zero = document.getElementById("zero");
    zero.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "0";
    }
    );
    const one = document.getElementById("one");
    one.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "1";
    }
    );
    const two = document.getElementById("two");
    two.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "2";
    }
    );
    const three = document.getElementById("three");
    three.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "3";
    }
    );
    const four = document.getElementById("four");
    four.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "4";
    }
    );
    const five = document.getElementById("five");
    five.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "5";
    }
    );
    const six = document.getElementById("six");
    six.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "6";
    }
    );
    const multiplication = document.getElementById("multiplication");
    multiplication.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "*";
    }
    );
    const minus = document.getElementById("minus");
    minus.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "-";
    }
    );
    const plus = document.getElementById("plus");
    plus.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "+";
    }
    );
    const division = document.getElementById("division");
    division.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += "/";
    }
    );
    const decimal = document.getElementById("decimal");
    decimal.addEventListener("click", function () {
        document.getElementById("resultsDisplay").innerText += ".";
    }
    );
    const equals = document.getElementById("equals");
    equals.addEventListener("click",function () {
        let operatorsList = document.getElementsByName("operator");
        let operator;
        for (i = 0; i < operatorsList.length; i++) {
            operator = operatorsList[i].value;
        }
        let expressionCheck = /\d+(\*|\-|\+|\/)\d+/;
        if (expressionCheck.test(document.getElementById("resultsDisplay").innerText)) {
            document.getElementById("resultsDisplay").innerText += " = " + (eval(document.getElementById("resultsDisplay").innerText));
            document.getElementById("resultsDisplay").style.color = "#016064";
            document.getElementById("resultsDisplay").style.fontWeight = "900";
        }
        else   {
           document.getElementById("resultsDisplay").innerText += " Format Error";
           document.getElementById("resultsDisplay").style.color = "#FF0000";
           document.getElementById("resultsDisplay").style.fontSize = "2.1em";         
        }
    }
    );
    const clear = document.getElementById("clear");
    clear.onclick = function () {
        document.getElementById("resultsDisplay").innerText = " ";
    };









}

