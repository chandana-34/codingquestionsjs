//How do you check if two strings are anagrams of each other?
var str1 = "Listen";
var str2 = "Silent";

//converting string to lowercase
var str1ToLower = str1.toLowerCase();
var str2ToLower = str2.toLowerCase();

function checkAnagram(s1,s2)
{
  //checking the length of 2 strings, if they are equal
  if(str1.length != str2.length)
    {
      return false;
    }
  //converting string to array(Easy to Sort)
  var str1_array = str1ToLower.split('');
  var str2_array = str2ToLower.split('');

  //Sorting the both strings
  str1_array.sort();
  str2_array.sort();
  //Checking is both strings have have same letters
  for(var i = 0; i<str1_array.length;i++){
    if(str1_array[i] != str2_array[i]){
      return false;
    }
  }
  return true;
}
if(checkAnagram(str1,str2))
  {
    console.log(str1.concat(" And ",str2," => are Anagrams"))
  }
else{
  console.log("Not Anagrams")
}