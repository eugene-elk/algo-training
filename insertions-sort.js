function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      j = j - 1;
      // console.log(arr.join(", "));
    }
    // console.log("end: ", arr.join(", "), "\n------")
  }
  return arr;
}

//[arr[i], arr[j]] = [arr[j], arr[i]];

const input = [1, 0, 2, 12, 22, 11, -20];
console.log(input.join(", "));

const output = insertionSort(input);
console.log(output.join(", "));