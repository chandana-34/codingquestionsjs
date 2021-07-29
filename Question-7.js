//How do you print duplicate characters from a string?
let string = "Great responsibility";  
let count_;  
   
console.log("Duplicate characters in a given string:");  
//Counts each character present in the string  
for(let i = 0; i < string.length; i++) {  
    count_ = 1;  
    for(let j = i+1; j < string.length; j++) {  
        if(string[i] == string[j] && string[i] != ' ') {  
            count_++;  
            string[j] = '0';  
        }  
    }  
    if(count_ > 1 && string[i] != '0'){  
        console.log(string[i]);   
    }  
}  