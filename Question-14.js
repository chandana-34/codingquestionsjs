//How do you count the occurrence of a given character in a string?
function count_occurrence(str, c)
{
	let res = 0;
	for (let i = 0; i < str.length; i++)

		if (str[i] == c)
			res++;

	console.log(c + " Occurred " + res + " times");
}
let str_occur= "Learn JavaScript";
let c = 'r';
count_occurrence(str_occur, c)

