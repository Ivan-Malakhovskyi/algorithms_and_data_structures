//* O(n^2)

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

// Приклад використання:
const numbers = [12, 11, 13, 5, 6];
// console.time("SORT");
// insertionSort(numbers);
// console.timeEnd("SORT");
// console.log("Відсортований масив:", numbers);

//! (O(n^3))

function multiplyMatrices(A, B) {
  const n = A.length;
  const C = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

// console.log(multiplyMatrices(A, B));

function generatePairs(items) {
  const pairs = [];

  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      pairs.push([items[i], items[j]]);
    }
  }

  return pairs;
}

// console.log(generatePairs(["A", "C", "D", "1", "V"]));

const set1 = new Set([1, 2, 3, 4, 5, 6]);
const set2 = new Set([4, 5, 8, 10, 11]);

const similar = new Set([...set1].filter((x) => set2.has(x)));
const diff = new Set([...set1].filter((x) => !set2.has(x)));

const symmetricDifferenceSet = new Set(
  [...set1]
    .filter((x) => !set2.has(x))
    .concat([...set2].filter((x) => !set1.has(x)))
);
console.log("🚀 ~ symmetricDifferenceSet:", symmetricDifferenceSet);
