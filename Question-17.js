//How do you check if two strings are a rotation of each other?

function isRotation(a, b)
{
	var n = a.length;
	var m = b.length;
	if (n != m)
		return false;

	var lps = Array.from({length: n}, (_, i) => 0);

	var len = 0;
	var i = 1;
	lps[0] = 0; 

	while (i < n) {
		if (a.charAt(i) == b.charAt(len)) {
			lps[i] = ++len;
			++i;
		}
		else {
			if (len == 0) {
				lps[i] = 0;
				++i;
			}
			else {
				len = lps[len - 1];
			}
		}
	}
	i = 0;

	// match from that rotating point
	for (k = lps[n - 1]; k < m; ++k) {
		if (b.charAt(k) != a.charAt(i++))
			return false;
	}
	return true;
}

var s1 = "JavaScript";
var s2 = "ScriptJava";
const value = (isRotation(s1, s2) ? "1" : "0");
console.log(value)

