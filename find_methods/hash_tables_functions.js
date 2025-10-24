//! Для реалізації асоціативного масиву/хеш таблиці використовується new Map() або {}
//* Хеш-таблиці оптимізовані для пошуку, вставки та видалення, але не для відсортування

const hashTable = new Map();

hashTable.set("John Doe", "+1234567890");
hashTable.set("Jane Doe", "+0987654321");
hashTable.set("Jacob Mercer", "+0487154395");

console.log(hashTable.get("Jacob Mercer"));
// Output: +0487154395

hashTable.set("John Doe", "+2345678901");
console.log(hashTable.get("John Doe"));
// Output: +2345678901

console.log(hashTable.size);
// Output: 3

hashTable.delete("Jane Doe");

console.log(hashTable.size);
// Output: 2

for (const [key, value] of hashTable) {
  console.log(`${key} = ${value}`);
}
