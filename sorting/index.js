//* O(n) - часова складність

//! BUBBLE SORT
//? O(n^2)
const numbers = [5, 3, 8, 4, 2, 0, 1];

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Обмін елементів, якщо вони не впорядковані
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// bubbleSort(numbers);
// console.log(numbers);

//! INSERTION(вставкою) SORT
//? O(n^2) - квадратична

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// insertionSort(numbers);

//!SELECTION SORT (Алгоритм прямого вибору)
//? O(n^2) - on th average, to the best, at worst

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// console.log(selectionSort(numbers));

//! Quick sort
//? O(n*log n) - in the average case
//?  O(n^2) - in the worst case
//* Розділяй та володарюй
//* Вибрати опорний елемент (1й, середній, останній)

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);
  return [...quicksort(left), ...middle, ...quicksort(right)];
}

const result = quicksort(numbers);
console.log(result);

//! Merge sort (сортування злиттям)
//* Розділяй та володарюй
//? O(n*log n) - лінійно логарифмічна
