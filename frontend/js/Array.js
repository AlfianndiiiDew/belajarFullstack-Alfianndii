// Demonstration of common JavaScript Array methods

// 1. push() , fungsinya untuk menambahkan elemen di akhir array
const arr1 = [1, 2];
arr1.push(3);
console.log("push:", arr1); // [1, 2, 3]

// 2. pop() , fungsinya untuk menghapus elemen terakhir dari array
const arr2 = [1, 2, 3];
arr2.pop();
console.log("pop:", arr2); // [1, 2]

// 3. shift() , fungsinya untuk menghapus elemen pertama dari array
const arr3 = [1, 2, 3];
arr3.shift();
console.log("shift:", arr3); // [2, 3]

// 4. unshift()     , fungsinya untuk menambahkan elemen di awal array
const arr4 = [2, 3];
arr4.unshift(1);
console.log("unshift:", arr4); // [1, 2, 3]

// 5. map() , fungsinya untuk membuat array baru dengan hasil dari pemanggilan fungsi pada setiap elemen array
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log("map:", doubled); // [2, 4, 6]

// 6. filter() , fungsinya untuk membuat array baru dengan elemen yang lolos dari pengujian fungsi
const even = numbers.filter(n => n % 2 === 0);
console.log("filter:", even); // [2]

// 7. find() , fungsinya untuk mengembalikan elemen pertama yang memenuhi kondisi dari fungsi
const users = [
  { name: 'A', age: 20 },
  { name: 'B', age: 30 },
];
const found = users.find(u => u.age > 25);
console.log("find:", found); // { name: 'B', age: 30 }

// 8. findIndex() , fungsinya untuk mengembalikan indeks dari elemen pertama yang memenuhi kondisi dari fungsi
const index = numbers.findIndex(n => n === 2);
console.log("findIndex:", index); // 1

// 9. forEach() , fungsinya untuk menjalankan fungsi pada setiap elemen array tanpa mengembalikan array baru
console.log("forEach:");
numbers.forEach(n => console.log(n)); // 1 2 3

// 10. reduce() , fungsinya untuk mengakumulasi nilai dari elemen-elemen array menjadi satu nilai tunggal
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce:", total); // 6

// 11. some() , fungsinya untuk mengecek apakah ada elemen yang memenuhi kondisi dari fungsi
console.log("some:", numbers.some(n => n > 2)); // true

// 12. every() , fungsinya untuk mengecek apakah semua elemen memenuhi kondisi dari fungsi
console.log("every:", numbers.every(n => n > 0)); // true

// 13. includes() , fungsinya untuk mengecek apakah array mengandung elemen tertentu
const fruits = ['apple', 'banana'];
console.log("includes:", fruits.includes('banana')); // true

// 14. sort() , fungsinya untuk mengurutkan elemen-elemen dalam array
const nums = [10, 5, 1];
nums.sort((a, b) => a - b);
console.log("sort:", nums); // [1, 5, 10]

// 15. reverse() , fungsinya untuk membalik urutan elemen dalam array
const rev = [1, 2, 3];
rev.reverse();
console.log("reverse:", rev); // [3, 2, 1]

// 16. slice() , fungsinya untuk mengambil sebagian elemen dari array dan mengembalikan array baru
const sliced = [1, 2, 3, 4].slice(1, 3);
console.log("slice:", sliced); // [2, 3]

// 17. splice() , fungsinya untuk menambah/menghapus elemen pada array di posisi tertentu 
const spliced = [1, 2, 3];
spliced.splice(1, 1, 99);
console.log("splice:", spliced); // [1, 99, 3]

// 18. flat() , fungsinya untuk meratakan array bersarang
const nested = [1, [2, [3]]];
console.log("flat:", nested.flat(2)); // [1, 2, 3]

// 19. join() , fungsinya untuk menggabungkan elemen array menjadi string
const letters = ['a', 'b', 'c'];
console.log("join:", letters.join('-')); // a-b-c

// 20. concat() , fungsinya untuk menggabungkan dua atau lebih array
const a = [1, 2];
const b = [3, 4];
console.log("concat:", a.concat(b)); // [1, 2, 3, 4]

// 21. at() (ES2022+) , fungsinya untuk mengakses elemen pada indeks tertentu, mendukung indeks negatif
const arrAt = [10, 20, 30];
console.log("at:", arrAt.at(-1)); // 30

// 22. toReversed() (ES2023+) , fungsinya untuk mengembalikan array baru dengan elemen yang dibalik tanpa mengubah array asli
const toRev = [1, 2, 3];
console.log("toReversed:", toRev.toReversed()); // [3, 2, 1]
console.log("original:", toRev); // [1, 2, 3]

// 23. toSorted() (ES2023+) , fungsinya untuk mengembalikan array baru dengan elemen yang diurutkan tanpa mengubah array asli
const unsorted = [3, 1, 2];
const sorted = unsorted.toSorted((a, b) => a - b);
console.log("toSorted:", sorted); // [1, 2, 3]
console.log("original:", unsorted); // [3, 1, 2]
