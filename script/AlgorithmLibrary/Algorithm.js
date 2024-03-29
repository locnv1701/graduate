function findControlElement(type, name) {
	var selector = "[id='" + name + "-" + type + "']";

	var res = document.querySelector(selector);
	console.log("controlBar", res);
	return res;
}

function addControlToAlgorithmBar(type, name) {
	// Create the button element

	console.log("------------>", type, name)
	if (type == "Button") {
		var button = document.createElement("button");
		button.setAttribute("type", "button");
		button.className = "btn btn-default btn-sm";
		button.id = name + "-" + type;

		button.style.marginRight = "1px";


		// Create the <span> for the glyphicon
		var span1 = document.createElement("span");
		if (name == "Insert") {
			span1.className = "glyphicon glyphicon-plus-sign fa-fw";
		}

		if (name == "Delete") {
			span1.className = "glyphicon glyphicon-remove-sign fa-fw";
		}

		if (name == "Find") {
			span1.className = "glyphicon glyphicon-search fa-fw";
		}

		if (name == "Print") {
			span1.className = "glyphicon glyphicon-print fa-fw";
		}


		// Create the <span> for the text
		var span2 = document.createElement("span");
		span2.className = "hidden-phone";
		span2.textContent = " " + name;

		// Create the <sub> for the "m" in <?= L('default') ?> <sub style="color:#AAAAAA">m</sub>
		var sub = document.createElement("sub");
		sub.style.color = "#AAAAAA";

		// Construct the hierarchy
		span2.appendChild(sub);
		button.appendChild(span1);
		button.appendChild(span2);

		var tableEntry = document.createElement("td");
		tableEntry.appendChild(button);

		var controlBar = document.getElementById("AlgorithmSpecificControls");
		controlBar.appendChild(tableEntry);
		return button;
	} else {
		var element = document.createElement("input");

		element.setAttribute("type", type);
		element.setAttribute("value", name);
		//    element.setAttribute("name", name);
		element.id = name + "-" + type;

		element.style.marginRight = "5px";

		element.style.height = "30px"; // Độ cao của ô input

		var tableEntry = document.createElement("td");

		tableEntry.appendChild(element);


		var controlBar = document.getElementById("AlgorithmSpecificControls");

		//Append the element in page (in span).
		controlBar.appendChild(tableEntry);
		return element;
	}
}




function Algorithm(am) {

}



// Algorithm.prototype.setCodeAlpha = function (code, newAlpha) {
// 	var i, j;
// 	for (i = 0; i < code.length; i++)
// 		for (j = 0; j < code[i].length; j++) {
// 			this.cmd("SetAlpha", code[i][j], newAlpha);
// 		}
// }


// Algorithm.prototype.addCodeToCanvasBase = function (code, start_x, start_y, line_height, standard_color, layer) {
// 	layer = typeof layer !== 'undefined' ? layer : 0;
// 	var codeID = Array(code.length);
// 	var i, j;
// 	for (i = 0; i < code.length; i++) {
// 		codeID[i] = new Array(code[i].length);
// 		for (j = 0; j < code[i].length; j++) {
// 			codeID[i][j] = this.nextIndex++;
// 			this.cmd("CreateLabel", codeID[i][j], code[i][j], start_x, start_y + i * line_height, 0);
// 			this.cmd("SetForegroundColor", codeID[i][j], standard_color);
// 			this.cmd("SetLayer", codeID[i][j], layer);
// 			if (j > 0) {
// 				this.cmd("AlignRight", codeID[i][j], codeID[i][j - 1]);
// 			}
// 		}


// 	}
// 	return codeID;
// }


Algorithm.prototype.init = function (am, w, h) {
	console.log("Algorithm.prototype.init")
	this.animationManager = am;
	am.addListener("AnimationStarted", this, this.disableUI);
	am.addListener("AnimationEnded", this, this.enableUI);
	am.addListener("AnimationUndo", this, this.undo);
	this.canvasWidth = w;
	this.canvasHeight = h;

	this.actionHistory = [];
	this.recordAnimation = true;
	this.commands = []
}


// Overload in subclass
Algorithm.prototype.sizeChanged = function (newWidth, newHeight) {

}



Algorithm.prototype.implementAction = function (funct, val) {
	console.log("bước 8: Algorithm.prototype.implementAction")

	var nxt = [funct, val];
	this.actionHistory.push(nxt);	// lưu trữ lịch sử các hành động được thực hiện trong quá trình chạy thuật toán
	var retVal = funct(val);		// thực hiện hàm funct với giá trị val và lưu kết quả vào retVal
	this.animationManager.StartNewAnimation(retVal);	// hiển thị các bước thực hiện thuật toán theo trình tự đã định lên màn hình		
}

Algorithm.prototype.implementListAction = function (actions) {
    console.log("bước 8: Algorithm.prototype.implementListAction");

    var listCommand = []; // Mảng chứa tất cả các bước thực hiện

    for (var i = 0; i < actions.length; i++) {
        var action = actions[i];
        var funct = action.funct;
        var val = action.val;
        var retVal = funct(val);
        listCommand = listCommand.concat(retVal);
    }

    this.animationManager.StartNewAnimation(listCommand); // Hiển thị tất cả các bước thực hiện thuật toán
}

Algorithm.prototype.isAllDigits = function (str) {
	for (var i = str.length - 1; i >= 0; i--) {
		if (str.charAt(i) < "0" || str.charAt(i) > "9") {
			return false;

		}
	}
	return true;
}


Algorithm.prototype.normalizeNumber = function (input, maxLen) {
	if (!this.isAllDigits(input) || input == "") {
		return input;
	}
	else {
		return ("OOO0000" + input).substr(-maxLen, maxLen);
	}
}

Algorithm.prototype.disableUI = function (event) {
	// to be overridden in base class
}

Algorithm.prototype.enableUI = function (event) {
	// to be overridden in base class
}



function controlKey(keyASCII) {
	return keyASCII == 8 || keyASCII == 9 || keyASCII == 37 || keyASCII == 38 ||
		keyASCII == 39 || keyASCII == 40 || keyASCII == 46;
}



// Algorithm.prototype.returnSubmitFloat = function (field, funct, maxsize) {
// 	if (maxsize != undefined) {
// 		field.size = maxsize;
// 	}
// 	return function (event) {
// 		var keyASCII = 0;
// 		if (window.event) // IE
// 		{
// 			keyASCII = event.keyCode
// 		}
// 		else if (event.which) // Netscape/Firefox/Opera
// 		{
// 			keyASCII = event.which
// 		}
// 		// Submit on return
// 		if (keyASCII == 13) {
// 			funct();
// 		}
// 		// Control keys (arrows, del, etc) are always OK
// 		else if (controlKey(keyASCII)) {
// 			return;
// 		}
// 		// - (minus sign) only OK at beginning of number
// 		//  (For now we will allow anywhere -- hard to see where the beginning of the
// 		//   number is ...)
// 		//else if (keyASCII == 109 && field.value.length  == 0)
// 		else if (keyASCII == 109) {
// 			return;
// 		}
// 		// Digis are OK if we have enough space
// 		else if ((maxsize != undefined || field.value.length < maxsize) &&
// 			(keyASCII >= 48 && keyASCII <= 57)) {
// 			return;
// 		}
// 		// . (Decimal point) is OK if we haven't had one yet, and there is space
// 		else if ((maxsize != undefined || field.value.length < maxsize) &&
// 			(keyASCII == 190) && field.value.indexOf(".") == -1) {
// 			return;
// 		}
// 		// Nothing else is OK
// 		else {
// 			return false;
// 		}

// 	}
// }


Algorithm.prototype.returnSubmit = function (field, funct, maxsize, intOnly) {
	if (maxsize != undefined) {
		field.size = maxsize;
	}
	return function (event) {
		var keyASCII = 0;
		if (window.event) // IE
		{
			keyASCII = event.keyCode
		}
		else if (event.which) // Netscape/Firefox/Opera
		{
			keyASCII = event.which
		}

		if (keyASCII == 13 && funct !== null) {
			funct();
		}
		else if (keyASCII == 190 || keyASCII == 59 || keyASCII == 173 || keyASCII == 189) {
			return false;

		}
		else if ((maxsize != undefined && field.value.length >= maxsize) ||
			intOnly && (keyASCII < 48 || keyASCII > 57)) {
			if (!controlKey(keyASCII))
				return false;
		}

	}

}

Algorithm.prototype.addReturnSubmit = function (field, action) {
	field.onkeydown = this.returnSubmit(field, action, 4, false);
}

Algorithm.prototype.reset = function () {
	// to be overriden in base class
	// (Throw exception here?)
}

Algorithm.prototype.undo = function (event) {
	// Remvoe the last action (the one that we are going to undo)
	this.actionHistory.pop();
	// Clear out our data structure.  Be sure to implement reset in
	//   every AlgorithmAnimation subclass!
	this.reset();
	//  Redo all actions from the beginning, throwing out the animation
	//  commands (the animation manager will update the animation on its own).
	//  Note that if you do something non-deterministic, you might cause problems!
	//  Be sure if you do anything non-deterministic (that is, calls to a random
	//  number generator) you clear out the undo stack here and in the animation
	//  manager.
	//
	//  If this seems horribly inefficient -- it is! However, it seems to work well
	//  in practice, and you get undo for free for all algorithms, which is a non-trivial
	//  gain.
	var len = this.actionHistory.length;
	this.recordAnimation = false;
	for (var i = 0; i < len; i++) {
		this.actionHistory[i][0](this.actionHistory[i][1]);
	}
	this.recordAnimation = true;
}


Algorithm.prototype.clearHistory = function () {
	this.actionHistory = [];
}

// Helper method to add text input with nice border.
//  AS3 probably has a built-in way to do this.   Replace when found.


// Helper method to create a command string from a bunch of arguments
Algorithm.prototype.cmd = function () {
	if (this.recordAnimation) {
		var command = arguments[0];
		for (i = 1; i < arguments.length; i++) {
			command = command + "<;>" + String(arguments[i]);
		}
		this.commands.push(command);
	}

}
