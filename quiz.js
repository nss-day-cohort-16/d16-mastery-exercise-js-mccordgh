

//This function builds the tree line by line and outputs to console.log();
function tree(treeOBJ) {

	//grab the value from index.html txtLineHeight text box
	var numCheck = document.getElementById("txtLineHeight").value;
	
	//Check if line height value or desired character text fields are blank, warn if so. If both are not blank, run rest of the function
	if (numCheck === "") {
		
		alert("Please enter a height!");

} else if (treeOBJ.char == "") {
		
		alert("Please enter the desired character!");

} else {

	//clear the console so that concurrent trees don't muck up the place
	console.clear();

	//simplify later code by grabbing linewidth and the desired character in variables
		var lineWidth = treeOBJ.height * 2 - 1;
		var treeChar = (treeOBJ.char).toString;
		
		// x iterates through each row
		for (x=1; x < treeOBJ.height + 1; x++) {

			// clear treeOutput for a new line
			var treeOutput = "";

			//start from the middle with a single character
			treeOutput += treeOBJ.char;

			var numSpaces = Math.floor(lineWidth / 2 - x);

		// y iterates through and adds the appropriate amount of spaces on the front-end of treeOutput
			for (y=0; y < numSpaces + 1; y++ ) {
				
				treeOutput = " " + treeOutput;
			
			}

			// z iterates through and adds the appropriate amount of characters on the back-end of treeOutput
			for (z=1; z < x; z++) {
			
				treeOutput += treeOBJ.char + treeOBJ.char;
			
			}

			// Display the current line of spaces and characters and then repeat the process
			console.log(treeOutput);
		}
	}
}