//How do you find all pairs of an integer array whose sum is equal to a given number?
function getPairsCount(arr,sum)
{
	let count = 0;
	for (let i = 0; i < arr.length; i++)
		for (let j = i + 1; j < arr.length; j++)
			if (arr[i] + arr[j] == sum)
				count++;

	return count;
}
	let number_arr = [3,1,2,5,2,-1];
	let sum = 4;
	console.log("Count of pairs is " + getPairsCount(number_arr, sum));
