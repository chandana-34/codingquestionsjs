//How do you reverse an array in place in JavaScript? In place means you cannot create a new array. You have to update the original array.
function reverseArrayInPlace(arr) {
    for (var i = 0; i <= (arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  let original_arr = [1, 3, 6, 9, 5, 2, 8, 5]

reverseArrayInPlace(original_arr)
console.log(arr)