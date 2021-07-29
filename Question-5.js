//How do you find duplicate numbers in an array if it contains multiple duplicates?
let array_numbers = [1,1, 6, 0, 4, 8, 2, 7, 9, 8, 2, 3];   
console.log("Duplicate numbers in given array: ");  
let count;
//Searches for duplicate element  
for(let i = 0; i < array_numbers.length; i++) {  
    for(let j = i + 1; j < array_numbers.length; j++) {  
        if(array_numbers[i] == array_numbers[j])  
            console.log(array_numbers[j]);  
    } 
} 
