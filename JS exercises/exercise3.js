//Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
  const filteredArr = arr.filter((i) => {
    return typeof i === "number";
  });
  return filteredArr;
}
console.log(filterNumbers([1, "90", 6, "ry", "po", 89]));
//Write a function reverseArray(arr) that reverses the array
function reverseArray(arr) {
  const reversedArr = arr.reverse();
  return reversedArr;
}
console.log(reverseArray([1, 2, 3, 4]));
// Write a function findMax(arr) that returns the largest number in the array
function findMax(arr) {
  maxNum = Math.max(...arr);
  return maxNum;
}
console.log(findMax([3, 5, 7, 9, 8]));
//Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
function removeDuplicates(...arr) {
  const nonDuplicatedArr = [...new Set(arr)];
  return nonDuplicatedArr;
}
console.log(removeDuplicates(1, 2, 3, 1, 5, 3));
//Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, [4, 5]]], 6]));
