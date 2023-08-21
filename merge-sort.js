function mergeSort(arr, left = 0, right = arr.length - 1) {

  if (left >= right) return;

  const middle = Math.floor((left + right) / 2);

  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);

  let i = left;
  let j = middle + 1;
  let k = 0;
  const temp = [];

  // наполняем временный массив
  while (i <= middle && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      i++;
    } else {
      temp[k] = arr[j];
      j++;
    }
    k++;
  }

  // дозаполняем возможными остатками
  while (i <= middle) {
    temp[k] = arr[i];
    i++;
    k++;
  }

  while (j <= right) {
    temp[k] = arr[j];
    j++;
    k++;
  }

  // обновляем эти позиции в основном массиве
  for (let i = left, k = 0; i <= right; i++, k++) {
    arr[i] = temp[k];
  }

  return arr;
}

const input = [1, 0, 2, 12, 22, 11, -20];
console.log(input.join(", "));

const output = mergeSort(input);
console.log(output.join(", "));