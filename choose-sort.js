function chooseSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    let minValue = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minIndex = j;
        minValue = arr[j];
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

const input = [1, 0, 2, 12, 22, 11, -20];
console.log(input);

const output = chooseSort(input);
console.log(output);