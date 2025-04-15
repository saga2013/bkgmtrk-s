import { add as yigindi, subtract as ayirma, multiply as kopaytma } from './operations.js';
import bolinma from './defaultOperation.js';

window.calculate = function (operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Iltimos, raqam kiriting!";
  } else {
    switch (operation) {
      case "sum":
        result = yigindi(num1, num2);
        break;
      case "sub":
        result = ayirma(num1, num2);
        break;
      case "mul":
        result = kopaytma(num1, num2);
        break;
      case "div":
        result = bolinma(num1, num2);
        break;
    }
  }

  document.getElementById("result").innerText = "Result: " + result;
};
