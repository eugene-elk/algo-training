function bracketOrder(str) {
  const stack = [];

  const brackets = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (Object.values(brackets).includes(current)) {
      stack.push(current);
    } else if (Object.keys(brackets).includes(current)) {
      if (stack.pop() !== brackets[current]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

let goodStringWithBrackets = "[]([{123}22]3{(31)})";
let badStringWithBrackets = "[]([{123}22(]3){(31)})";

console.log(bracketOrder(goodStringWithBrackets));
console.log(bracketOrder(badStringWithBrackets));