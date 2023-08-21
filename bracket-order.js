function bracketOrder(str) {
  const stack = [];

  const brackets = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  const values = new Set(Object.values(brackets));
  const keys = new Set(Object.keys(brackets));

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (values.has(current)) {
      stack.push(current);
    } else if (keys.has(current)) {
      if (stack.pop() !== brackets[current]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

let goodStringWithBrackets = "[]([{123}22]3{(31)})";
let badStringWithBrackets = "(foo[0]0])";

console.log(bracketOrder(goodStringWithBrackets));
console.log(bracketOrder(badStringWithBrackets));