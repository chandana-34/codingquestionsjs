//How do you find the largest and smallest number in an unsorted integer array?
const arr = [112, 24, 31, 44, 967, 101, 203, 33, 1, 56, 455];
   let max = arr[0];
   let min = arr[0];
   for(let i = 0; i < arr.length; i++) {
      if(arr[i] > max) {
         max = arr[i];
      }
      else if (arr[i] < min) {
         min = arr[i];
      }
   };
console.log(arr)
console.log("Largest Number => " + max)
console.log("Smallest Number => " + min)