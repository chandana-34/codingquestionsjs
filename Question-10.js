//How can a given string be reversed using recursion?
function reverseString(str, n){
    if(n == 0){
       return '';//If empty string then return blank
    }
    
    return str[n-1] + reverseString(str, --n);
  }
let str = "syd";
let n = str.length;  
console.log(reverseString(str, n))