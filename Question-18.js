//How do you check if a given string is a palindrome?
function checkPalindrome(str){
    const len = str.length;
    for(let i=0;i<len/2;i++){
        if(str[i] !== str[len -1 -i]){
            return "String is not Palindrome"
        }
    }
    return "String is Palindrome"
}
const str_palidrome_check = "madam"
console.log(checkPalindrome(str_palidrome_check))