var btnGrowTree = document.getElementById("btnGrowTree");
var divWrapper = document.getElementById("wrapper");

btnGrowTree.addEventListener("click", handleBtnClick);
divWrapper.addEventListener("keyup", handleKeyUp);

function tree(treeOBJ) {
	
	console.clear();

	var lineWidth = treeOBJ.height * 2 - 1;
	var treeChar = (treeOBJ.char).toString;
		
	for (x=0; x < treeOBJ.height + 1; x++) {

			var treeOutput = "";
			treeOutput += treeOBJ.char;
			var numSpaces = Math.floor(lineWidth / 2 - x);

			treeOutput = `${spacer(numSpaces + 2)}${treeOutput}${charBuilder(treeOBJ.char, x * 2)}` 

			console.log(treeOutput);
	}
	
}

function handleBtnClick() {
	treeOBJ = {height: parseInt(document.getElementById('txtLineHeight').value), char: document.getElementById('txtLineChar').value};

	if (treeOBJ.height.toString() == "NaN") {
		
		alert("Please enter a height!");

	} else if (treeOBJ.char == "") {
		
		alert("Please enter the desired character!");

	} else {

		tree(treeOBJ);
	}
}

function handleKeyUp(event) {
	if (event.keyCode === 13) {handleBtnClick();}
}

function spacer(count) {
	return " ".repeat(count);
}

function charBuilder(char, count) {
	return char.repeat(count);
}