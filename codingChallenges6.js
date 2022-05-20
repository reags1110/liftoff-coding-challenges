// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

function detectWord(str) {
	let word = "";
	
	for (let letter of str) {
		if (letter === letter.toLowerCase()) {
			word = word + letter;
		}
	}
	return word;
}

// examples : detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
console.log(detectWord("UcUNFYGaFYFYGtNUH"));

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
