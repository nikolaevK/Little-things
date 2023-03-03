// Shunting yard algorithm
// converts infix notation to postfix notation
// then using postfix notation calculates an answer
// Time Complexity O(n) on average
// Stack allows for constant O(1) insertion and removal

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implemented as LIFO.
// linked list which grows from the beginning, with pop method which pops from the front of the linked list
// and push method which pushes to the front of the linked list
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
    return this;
  }

  pop() {
    if (!this.first) return null;

    if (this.first === this.last) {
      this.last = null;
    }

    let poppedElement = this.first;
    this.first = poppedElement.next;
    poppedElement.next = null;
    this.size -= 1;

    return poppedElement.value;
  }

  // for debugging purposes only
  print() {
    let arr = [];
    let node = this.first;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }

    return arr;
  }
}

function convertToPostFix(string) {
  const list = new Stack();

  // reversing and pushing to the list
  // reversing because the Stack is a linkedList which grows from the beginning
  // and pop method pops from the beginning of the list
  // in order to get => ["2", "+", "2", "*", "4"] values should be pushed from the end of a string
  for (let i = string.length - 1; i >= 0; i--) {
    list.push(string[i]);
  }

  const output = new Stack();
  const operations = new Stack();

  while (list.size != 0) {
    if (!isNaN(parseInt(list.first.value))) {
      // Checks if character is a number and push to output array
      output.push(list.pop());
    } else if (list.first.value === "(") {
      // places left parenthesis to operations array
      operations.push(list.pop());
    } else if (list.first.value === ")") {
      // checks if equation has parentheses and prioritize operations within parentheses
      while (operations.size > 0 && operations.first.value != "(") {
        output.push(operations.pop());
      }
      // Checks if parenthesis closed, if closed remove both left and right parentheses from arrays
      if (operations.first.value === "(") {
        operations.pop();
        list.pop();
      }
    } else {
      // looks and compares operations and their priority (not parenthesis)
      const operator = list.pop();

      while (
        operations.size > 0 &&
        operations.first.value != "(" &&
        precede(operator, operations.first.value)
      ) {
        // takes more prioritized operation and push it higher than other operation
        output.push(operations.pop());
      }
      operations.push(operator);
    }
  }

  // takes all remaining operations
  while (operations.size > 0) {
    output.push(operations.pop());
  }

  // due to implementation of a stack, the output will come out as ['+', '*', '4', '2', '2']
  // to calculate the answer, function calculate needs to iterate over the results from the end of the array
  return output.print();
}

// checks the order of operations
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

// calculates the answer for converted to postFixNotation equation
function calculate(postFixNotationArray) {
  const output = [];

  // loop from the end of the array due to implementation of a stack in a form of LinkedList
  for (let i = postFixNotationArray.length - 1; i >= 0; i--) {
    let arg1;
    let arg2;

    switch (postFixNotationArray[i]) {
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
        output.push(parseFloat(postFixNotationArray[i]));
        break;
    }
  }

  return output[0];
}

// console.log(calculate(convertToPostFix("2+2*4")));
// console.log(calculate(convertToPostFix("3+4*2/(1-5)^2^3")));
