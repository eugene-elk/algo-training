function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      //console.log("j ", j, arr);
    }
    //console.log("i ", i, arr);
  }
  return arr;
}

const input = [1, 0, 2, 12, 22, 11, -20];
console.log(input);

const output = bubbleSort(input);
console.log(output);
