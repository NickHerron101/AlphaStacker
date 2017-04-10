// Create an array that contains the letters of the alphabet
var str = "abcdefghijklmnopqrstuvwxyz";
var theAlphabetArray = str.split("");
console.log(theAlphabetArray);


// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
	var secondAlpha = [];
	for (var i = 0; i < theAlphabetArray.length; i++) {
		secondAlpha.push(theAlphabetArray[i]);
		if ((i + 1) % 3 === 0) {
			var text = " "; 
			secondAlpha.push(text)
		}
		var joinAlpha = secondAlpha.join("");
		console.log(joinAlpha);
	}

// 2nd array that you push it to and console log that inside the for loop

    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
}

// Invoke the function and pass in the array
stackLetters(theAlphabetArray)

