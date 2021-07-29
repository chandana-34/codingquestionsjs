//How do you check if a string contains only digits?
function allnumeric(inputtxt)
   {
      var numbers = /^[0-9]+$/;//Regular Expression
      if(inputtxt.match(numbers))
      {
      console.log('String doesnt contains any Digits');
      return true;
      }
      else
      {
      console.log('String contains Digits');
      return false;
      }
   } 
allnumeric("Sy767dney")