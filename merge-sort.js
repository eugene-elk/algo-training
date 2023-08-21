function mergeSort(arr) {
  if (arr.length === 1) return arr;
  if (arr.length === 2) {
    if (arr[0] > arr[1]) return [arr[1], arr[0]];
    else return [arr[0], arr[1]];
  }

  const left = mergeSort(arr.slice(0, arr.length / 2));
  const right = mergeSort(arr.slice(arr.length / 2));
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

const input = [1, 0, 2, 12, 22, 11, -20];
console.log(input.join(", "));

const output = mergeSort(input);
console.log(output.join(", "));