// Shunting yard algorithm
// converts infix notation to postfix notation
// Time Complexity O(n)
function convertToPostFix(string) {
  const array = string.split(" ");

  const output = [];
  const operations = [];

  while (array.length != 0) {
    if (!isNaN(parseInt(array[0]))) {
      // Checks if character is a number and push to output array
      output.push(array.shift());
    } else if (array[0] === "(") {
      // places left parenthesis to operations array
      operations.push(array.shift());
    } else if (array[0] === ")") {
      // checks if equation has parentheses and prioritize operations within parentheses
      while (
        operations.length > 0 &&
        operations[operations.length - 1] != "("
      ) {
        output.push(operations.pop());
      }

      if (operations[operations.length - 1] === "(") {
        operations.pop();
        array.shift();
      }
    } else {
      // looks and compares operations and their priority (not parenthesis)
      const operator = array.shift();

      while (
        operations.length > 0 &&
        operations[operations.length - 1] != "(" &&
        precede(operator, operations[operations.length - 1])
      ) {
        // takes more prioritized operation and push it higher than other operation
        output.push(operations.pop());
      }
      operations.push(operator);
    }
  }

  while (operations.length > 0) {
    output.push(operations.pop());
  }

  return output.join(" ");
}

function precede(operator1, operator2) {
  // 1: sq
  // 2: * /
  // 3: + -
  // if o2 <= o1 then true
  let prec1;
  let prec2;

  switch (operator1) {
    case "^":
      prec1 = 0;
      break;
    case "*":
    case "/":
      prec1 = 2;
      break;
    case "+":
    case "-":
      prec1 = 3;
      break;
  }

  switch (operator2) {
    case "^":
      prec2 = 1;
      break;
    case "*":
    case "/":
      prec2 = 2;
      break;
    case "+":
    case "-":
      prec2 = 3;
      break;
  }

  return prec2 <= prec1;
}

function calculate(string) {
  // Stack time complexity O(n)
  const postFixNotArray = string.split(" ");
  const output = [];

  for (let i = 0; i < postFixNotArray.length; i++) {
    let arg1;
    let arg2;

    switch (postFixNotArray[i]) {
      case "^":
        arg1 = output.pop();
        arg2 = output.pop();
        output.push(arg2 ** arg1);
        break;
      case "*":
        output.push(output.pop() * output.pop());
        break;
      case "/":
        arg1 = output.pop();
        arg2 = output.pop();
        output.push(arg2 / arg1);
        break;
      case "+":
        output.push(output.pop() + output.pop());
        break;
      case "-":
        arg1 = output.pop();
        arg2 = output.pop();
        output.push(arg2 - arg1);
        break;
      default:
        output.push(parseFloat(postFixNotArray[i]));
        break;
    }
  }

  return output[0];
}

// console.log(calculate("3 4 2 * 1 5 - 2 3 ^ ^ / +"));
// console.log(calculate(convertToPostFix("3+4*2/(1-5)^2^3")));

// console.log(calculate(convertToPostFix("3+4*2")));
// console.log(convertToPostFix("3+4*2/(1−5)^2^3"));
