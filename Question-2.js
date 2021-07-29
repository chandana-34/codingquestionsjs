//How do you find the duplicate number on a given integer array?
function printRepeating(numbers)
{
	var i, j;
	console.log("Repeated Numbers are : ");
	for (i = 0; i < numbers.length; i++)
	{
		for (j = i + 1; j < numbers.length; j++)
		{
			if (numbers[i] == numbers[j])
				console.log(numbers[i] + " ");
		}
	}
}
var number_array = [4, 2, 4, 5, 2, 3, 1];
printRepeating(number_array);