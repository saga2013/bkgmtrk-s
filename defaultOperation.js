export default function divide(a, b) {
    if (b === 0) {
      return "вы ввели неправильно";
    }
    return (a / b).toFixed(2);
  }
  