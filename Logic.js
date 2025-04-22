

    const output = document.getElementById("display");
    let number1 = '';
    let operator = '';
    let number2 = '';

    function appendValue(value) {
      if (!operator) {
        number1 += value;
      } else {
        number2 += value;
      }
      output.value += value;
    }

    function appendOperator(op) {
      if (number1 && !operator) {
        operator = op;
        output.value += op;
      }
    }

    function clearDisplay() {
      number1 = '';
      number2 = '';
      operator = '';
      output.value = '';
    }

    function calculate() {
      let result;
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);

      if (isNaN(num1) || isNaN(num2)) {
        output.value = "Error";
        return;
      }

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            output.value = "Math Error";
            return;
          }
          result = num1 / num2;
          break;
        default:
          result = "Error";
      }

      output.value = result;
      // Reset for next operation
      number1 = result.toString();
      operator = '';
      number2 = '';
    }

