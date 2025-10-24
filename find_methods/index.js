//!Linear search O(n)

//! BINARY SEARCH O(log n) n - кількість елементів в масиві
//? Двійковий логарифм - логарифм за основою => log2(8) = 3 => 2^3 = 8
function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);

    if (arr[mid] < x) {
      low = mid + 1;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  debugger;
  return -1;
}

const arr = [1, 3, 5, 8, 10, 12, 15, 18, 20, 22, 24];
const x = 18;
const result1 = binarySearch(arr, x);

if (result1 !== -1) {
  console.log(`Element is present at index ${result1}`);
} else {
  console.log("Element is not present in array");
}

//! Interpolation search - інтерполяціний пошук
//* Використовує формулу, щоб приблизно визначити, де шуканий елемент може бути
//* Найчастіше використовується для в БД

const arr1 = [1, 3, 5, 7, 9, 11, 14, 16, 18, 20, 22, 25, 28, 30];
const keyToFind = 20;

const hight = arr1.length - 1;
const low = 0;
const idx = Math.floor(
  low +
    ((keyToFind - arr1[low]) / (arr1[hight] - arr1[low])) * (hight - low) +
    1
);
console.log(idx);
console.log(arr1[idx] === keyToFind);
console.log(hight);

//! O(log log n)
//! At worst case O(n)

const interpolationSearch = (arr, x) => {
  let low = 0;
  let hight = arr.length - 1;

  while (low <= hight && x >= arr[low] && x <= arr[hight]) {
    const index =
      low +
      Math.floor(((hight - low) / (arr[hight] - arr[low])) * (x - arr[low]));

    if (arr[index] === x) return index;

    if (arr[index] < x) {
      low = index + 1;
    } else {
      hight = index - 1;
    }
  }

  return -1;
};

const foundIdx = interpolationSearch(arr1, 11);
console.log("🚀 ~ foundIdx:", foundIdx);

console.log(arr1[foundIdx]);
