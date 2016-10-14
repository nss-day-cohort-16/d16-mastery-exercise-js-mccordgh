

function tree(treeOBJ) {

	var lineWidth = treeOBJ.height * 2 - 1;
	var treeChar = (treeOBJ.char).toString;
	
	for (x=1; x < treeOBJ.height + 1; x++) {

		var treeOutput = "";

		treeOutput += treeOBJ.char;

		var numSpaces = Math.floor(lineWidth / 2 - x);

		for (y=0; y < numSpaces + 1; y++ ) {
			
			treeOutput = " " + treeOutput;
		
		}

		for (z=1; z < x; z++) {
		
			treeOutput += treeOBJ.char + treeOBJ.char;
		
		}

		console.log(treeOutput);
	}

}