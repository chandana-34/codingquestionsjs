//How do you count a number of vowels and consonants in a given string?
function countCharacterType(str) {
    let vowels = 0;
    let consonant = 0;
    str = str.split(" ").join("").trim();
    for (var i = 0; i < str.length; i++) {
    var ch = str[i];
        ch = ch.toLowerCase();
        if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u")
        vowels++;
        else consonant++;
    }
    console.log("Vowels: " + vowels);
    console.log("Consonant: " + consonant);
}

var original_str = "    Learn  JavaScript   ";
countCharacterType(original_str);