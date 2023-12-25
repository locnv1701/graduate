// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

function AVL(am, w, h) {
	console.log("initialization AVL(am, w, h)")
	this.init(am, w, h);

}

AVL.prototype = new Algorithm();
AVL.prototype.constructor = AVL;
AVL.superclass = Algorithm.prototype;


// Various constants

AVL.HIGHLIGHT_LABEL_COLOR = "#FF0000"
AVL.HIGHLIGHT_LINK_COLOR = "#FF0000"

AVL.HIGHLIGHT_COLOR = "#007700"
AVL.HEIGHT_LABEL_COLOR = "#007700"


// AVL.LINK_COLOR = "#007700";
AVL.LINK_COLOR = "#c7b7c7";

AVL.HIGHLIGHT_CIRCLE_COLOR = "#007700";
AVL.FOREGROUND_COLOR = "#ecd446";
// AVL.BACKGROUND_COLOR = "#DDFFDD";
AVL.BACKGROUND_COLOR = "#68aeba";

AVL.PRINT_COLOR = AVL.FOREGROUND_COLOR;

AVL.WIDTH_DELTA = 50;
AVL.HEIGHT_DELTA = 50;
AVL.STARTING_Y = 50;

AVL.FIRST_PRINT_POS_X = 50;
AVL.PRINT_VERTICAL_GAP = 20;
AVL.PRINT_HORIZONTAL_GAP = 50;
AVL.EXPLANITORY_TEXT_X = 10;
AVL.EXPLANITORY_TEXT_Y = 10;



AVL.prototype.init = function (am, w, h) {
	console.log("bước 1: AVL.prototype.init", this)

	var sc = AVL.superclass;
	var fn = sc.init;

	this.first_print_pos_y = h - 2 * AVL.PRINT_VERTICAL_GAP;
	this.print_max = w - 10;

	this.initEvent();

	fn.call(this, am, w, h);	 // khởi tạo các giá trị cơ bản //Algorithm.prototype.init = function(am, w, h)
	this.startingX = w / 2;
	this.addControls();			// khởi tạo các ô input nút bấm để lắng nghe các sự kiện insert, delete, ... trên giao diện
	this.nextIndex = 1;
	this.commands = [];
	this.cmd("CreateLabel", 0, " ", AVL.EXPLANITORY_TEXT_X, AVL.EXPLANITORY_TEXT_Y, 0);
	this.cmd("SETTEXT", 0, "AVL Tree's Algorithms");
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();

}

AVL.prototype.initEvent = function () {
	console.log("initEvent AVL")
	$("#button-dialog-insert").click(function () {
		$("#dialog-insert-node").dialog('open');
	});
	$("#button-dialog-delete").click(function () {
		$("#dialog-delete-node").dialog('open');
	});
	$("#button-dialog-setting").click(function () {
		$("#dialog-setting").dialog('open');

	});
	$("#button-dialog-find").click(function () {
		$("#dialog-find-node").dialog('open');
	});
}

AVL.prototype.addControls = function () {
	console.log("bước 2: AVL.prototype.addControls")
	this.insertButton = findControlElement("Button", "Insert");
	this.insertButton.onclick = this.insertCallback.bind(this);

	this.insertField = findControlElement("Text", "Insert");
	this.insertField.onkeydown = this.returnSubmit(this.insertField, this.insertCallback.bind(this), 4);

	this.importButton = findControlElement("Button", "Import");
	this.importButton.onclick = this.importCallback.bind(this);

	this.importField = findControlElement("Text", "Import");
	this.importField.onkeydown = this.returnSubmit(this.importField, this.importCallback.bind(this), 20);

	this.deleteButton = findControlElement("Button", "Delete");
	this.deleteButton.onclick = this.deleteCallback.bind(this);

	this.deleteField = findControlElement("Text", "Delete");
	this.deleteField.onkeydown = this.returnSubmit(this.deleteField, this.deleteCallback.bind(this), 4);

	this.findButton = findControlElement("Button", "Find");
	this.findButton.onclick = this.findCallback.bind(this);

	this.findField = findControlElement("Text", "Find");
	this.findField.onkeydown = this.returnSubmit(this.findField, this.findCallback.bind(this), 4);

	this.printButton1 = findControlElement("Button", "PrintPreOrder");
	this.printButton1.onclick = this.printPreOrderCallback.bind(this);

	this.printButton2 = findControlElement("Button", "PrintInOrder");
	this.printButton2.onclick = this.printInOrderCallback.bind(this);

	this.printButton3 = findControlElement("Button", "PrintPostOrder");
	this.printButton3.onclick = this.printPostOrderCallback.bind(this);
}

AVL.prototype.reset = function () {
	this.nextIndex = 1;
	this.treeRoot = null;
}




AVL.prototype.insertCallback = function (event) {
	console.log("bước 3: AVL.prototype.insertCallback")

	$("#dialog-insert-node").dialog('close');


	var insertedValue = this.insertField.value;
	// Get text value
	// insertedValue = this.normalizeNumber(insertedValue, 4);
	if (insertedValue != "") {
		// set text value
		this.insertField.value = "";
		this.implementAction(this.insertElement.bind(this), insertedValue);
	}
}

AVL.prototype.importCallback = function (event) {
	console.log("bước 3: AVL.prototype.importCallback")

	$("#dialog-insert-node").dialog('close');


	var self = this;

	var importValue = this.importField.value;

	var numbersToInsert = importValue.split(",");
	this.importField.value = "";

	var actions = [];

	numbersToInsert.forEach(number => {
		if (number != "") {
			actions.push({
				funct: self.insertElement.bind(self),
				val: number
			})
		}
	});

	this.implementListAction(actions);
}


AVL.prototype.deleteCallback = function (event) {
	console.log("deleteCallback called", this.deleteField.value);

	$("#dialog-delete-node").dialog('close');

	var deletedValue = this.deleteField.value;
	if (deletedValue != "") {
		// deletedValue = this.normalizeNumber(deletedValue, 4);
		this.deleteField.value = "";
		this.implementAction(this.deleteElement.bind(this), deletedValue);
	}
}


AVL.prototype.findCallback = function (event) {

	$("#dialog-find-node").dialog('close');

	var findValue = this.findField.value;
	if (findValue != "") {
		// findValue = this.normalizeNumber(findValue, 4);
		this.findField.value = "";
		this.implementAction(this.findElement.bind(this), findValue);
	}
}

AVL.prototype.printPreOrderCallback = function (event) {
	this.implementAction(this.printTreePreOrder.bind(this), "");
}

AVL.prototype.printInOrderCallback = function (event) {
	this.implementAction(this.printTreeInOrder.bind(this), "");
}

AVL.prototype.printPostOrderCallback = function (event) {
	this.implementAction(this.printTreePostOrder.bind(this), "");
}

AVL.prototype.adjacencyMatrixCallback = function (event) {
	this.implementAction(this.adjacencyMatrix.bind(this), "");
}

AVL.prototype.sizeChanged = function (newWidth, newHeight) {
	this.startingX = newWidth / 2;
}



AVL.prototype.printTreePreOrder = function (unused) {
	this.commands = [];
	this.order = [];

	this.cmd("SetText", 0, "Running...");

	if (this.treeRoot != null) {
		this.highlightID = this.nextIndex++;
		var firstLabel = this.nextIndex;
		this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, this.treeRoot.x, this.treeRoot.y);
		this.xPosOfNextLabel = AVL.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel = this.first_print_pos_y;
		this.preOrder(this.treeRoot);
		this.cmd("Delete", this.highlightID);
		this.cmd("Step");
		for (var i = firstLabel; i < this.nextIndex; i++)
			this.cmd("Delete", i);
		this.nextIndex = this.highlightID;  /// Reuse objectsNot necessary.
	}

	var stringList = this.order.map(number => number.toString());

	this.cmd("SetText", 0, "Pre order traversal: " + stringList);

	return this.commands;
}

AVL.prototype.printTreeInOrder = function (unused) {
	this.commands = [];
	this.order = [];

	this.cmd("SetText", 0, "Running...");

	if (this.treeRoot != null) {
		this.highlightID = this.nextIndex++;
		var firstLabel = this.nextIndex;
		this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, this.treeRoot.x, this.treeRoot.y);
		this.xPosOfNextLabel = AVL.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel = this.first_print_pos_y;
		this.inOrder(this.treeRoot);
		this.cmd("Delete", this.highlightID);
		this.cmd("Step");
		for (var i = firstLabel; i < this.nextIndex; i++)
			this.cmd("Delete", i);
		this.nextIndex = this.highlightID;  /// Reuse objects.  Not necessary.
	}

	var stringList = this.order.map(number => number.toString());

	this.cmd("SetText", 0, "In order traversal: " + stringList);


	return this.commands;
}

AVL.prototype.printTreePostOrder = function (unused) {
	this.commands = [];
	this.order = [];

	this.cmd("SetText", 0, "Running...");

	if (this.treeRoot != null) {
		this.highlightID = this.nextIndex++;
		var firstLabel = this.nextIndex;
		this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, this.treeRoot.x, this.treeRoot.y);
		this.xPosOfNextLabel = AVL.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel = this.first_print_pos_y;
		this.postOrder(this.treeRoot);
		this.cmd("Delete", this.highlightID);
		this.cmd("Step");
		for (var i = firstLabel; i < this.nextIndex; i++)
			this.cmd("Delete", i);
		this.nextIndex = this.highlightID;  /// Reuse objects.  Not necessary.
	}

	var stringList = this.order.map(number => number.toString());

	this.cmd("SetText", 0, "Post order traversal: " + stringList);

	return this.commands;
}

// AVL.prototype.adjacencyMatrix = function (unused) {
// 	console.log("Adjacency Matrix", this);
// 	console.log("Adjacency Matrix", this.animationManager);
// 	console.log("Adjacency Matrix", this.animationManager.animatedObjects);
// 	console.log("Adjacency Matrix", this.animationManager.animatedObjects.Edges);

// 	this.animationManager.animatedObjects.Edges.forEach(element => {
// 		// console.log(element);
// 		if (element.length > 0) {
// 			element.forEach(ele => {
// 				// console.log("->", ele);
// 				console.log("node", ele.Node1.label, " noi voi ", ele.Node2.label)
// 			});
// 		}
// 	});


// }



AVL.prototype.preOrder = function (tree) {
	this.cmd("Step");

	var nextLabelID = this.nextIndex++;
	this.cmd("CreateLabel", nextLabelID, tree.data, tree.x, tree.y);
	this.order.push(tree.data);
	this.cmd("SetForegroundColor", nextLabelID, AVL.PRINT_COLOR);
	this.cmd("Move", nextLabelID, this.xPosOfNextLabel, this.yPosOfNextLabel);
	this.cmd("Step");

	if (tree.left != null) {
		this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
		this.preOrder(tree.left);
		this.cmd("Move", this.highlightID, tree.x, tree.y);
		this.cmd("Step");
	}

	this.xPosOfNextLabel += AVL.PRINT_HORIZONTAL_GAP;
	if (this.xPosOfNextLabel > this.print_max) {
		this.xPosOfNextLabel = AVL.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel += AVL.PRINT_VERTICAL_GAP;

	}
	if (tree.right != null) {
		this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
		this.preOrder(tree.right);
		this.cmd("Move", this.highlightID, tree.x, tree.y);
		this.cmd("Step");
	}
	return;
}


AVL.prototype.inOrder = function (tree) {
	this.cmd("Step");

	if (tree.left != null) {
		this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
		this.inOrder(tree.left);
		this.cmd("Move", this.highlightID, tree.x, tree.y);
		this.cmd("Step");
	}

	var nextLabelID = this.nextIndex++;
	this.cmd("CreateLabel", nextLabelID, tree.data, tree.x, tree.y);
	this.order.push(tree.data);
	this.cmd("SetForegroundColor", nextLabelID, AVL.PRINT_COLOR);
	this.cmd("Move", nextLabelID, this.xPosOfNextLabel, this.yPosOfNextLabel);
	this.cmd("Step");

	this.xPosOfNextLabel += AVL.PRINT_HORIZONTAL_GAP;
	if (this.xPosOfNextLabel > this.print_max) {
		this.xPosOfNextLabel = AVL.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel += AVL.PRINT_VERTICAL_GAP;

	}


	if (tree.right != null) {
		this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
		this.inOrder(tree.right);
		this.cmd("Move", this.highlightID, tree.x, tree.y);
		this.cmd("Step");
	}

	return;
}

AVL.prototype.postOrder = function (tree) {
	this.cmd("Step");
	if (tree.left != null) {
		this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
		this.postOrder(tree.left);
		this.cmd("Move", this.highlightID, tree.x, tree.y);
		this.cmd("Step");
	}

	if (tree.right != null) {
		this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
		this.postOrder(tree.right);
		this.cmd("Move", this.highlightID, tree.x, tree.y);
		this.cmd("Step");
	}

	var nextLabelID = this.nextIndex++;
	this.cmd("CreateLabel", nextLabelID, tree.data, tree.x, tree.y);
	this.order.push(tree.data);
	this.cmd("SetForegroundColor", nextLabelID, AVL.PRINT_COLOR);
	this.cmd("Move", nextLabelID, this.xPosOfNextLabel, this.yPosOfNextLabel);
	this.cmd("Step");

	this.xPosOfNextLabel += AVL.PRINT_HORIZONTAL_GAP;
	if (this.xPosOfNextLabel > this.print_max) {
		this.xPosOfNextLabel = AVL.FIRST_PRINT_POS_X;
		this.yPosOfNextLabel += AVL.PRINT_VERTICAL_GAP;

	}

	return;
}


AVL.prototype.findElement = function (findValue) {
	this.commands = [];

	this.highlightID = this.nextIndex++;

	this.doFind(this.treeRoot, findValue);


	return this.commands;
}


AVL.prototype.doFind = function (tree, value) {
	this.cmd("SetText", 0, "Searchiing for " + value);
	if (tree != null) {
		this.cmd("SetHighlight", tree.graphicID, 1);
		if (tree.data == value) {
			this.cmd("SetText", 0, "Searching for " + value + " : " + value + " = " + value + " (Element found!)");
			this.cmd("Step");
			this.cmd("SetText", 0, "Found:" + value);
			this.cmd("SetHighlight", tree.graphicID, 0);
		}
		else {
			if (tree.data > value) {
				this.cmd("SetText", 0, "Searching for " + value + " : " + value + " < " + tree.data + " (look to left subtree)");
				this.cmd("Step");
				this.cmd("SetHighlight", tree.graphicID, 0);
				if (tree.left != null) {
					this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
					this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
					this.cmd("Step");
					this.cmd("Delete", this.highlightID);
				}
				this.doFind(tree.left, value);
			}
			else {
				this.cmd("SetText", 0, " Searching for " + value + " : " + value + " > " + tree.data + " (look to right subtree)");
				this.cmd("Step");
				this.cmd("SetHighlight", tree.graphicID, 0);
				if (tree.right != null) {
					this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
					this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
					this.cmd("Step");
					this.cmd("Delete", this.highlightID);
				}
				this.doFind(tree.right, value);
			}

		}

	}
	else {
		this.cmd("SetText", 0, " Searching for " + value + " : " + "< Empty Tree > (Element not found)");
		this.cmd("Step");
		this.cmd("SetText", 0, " Searching for " + value + " : " + " (Element not found)");
	}
}

AVL.prototype.insertElement = function (insertedValue) {
	console.log("bước 4: AVL.prototype.insertElement", this)

	this.commands = [];
	this.cmd("SetText", 0, " Inserting " + insertedValue);

	if (this.treeRoot == null) {
		var treeNodeID = this.nextIndex++;
		var labelID = this.nextIndex++;
		console.log("treeNodeID", treeNodeID)
		console.log("labelID", labelID)
		this.cmd("CreateCircle", treeNodeID, insertedValue, this.startingX, AVL.STARTING_Y);
		this.cmd("SetForegroundColor", treeNodeID, AVL.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", treeNodeID, AVL.BACKGROUND_COLOR);
		this.cmd("CreateLabel", labelID, 1, this.startingX - 20, AVL.STARTING_Y - 20);
		this.cmd("SetForegroundColor", labelID, AVL.HEIGHT_LABEL_COLOR);
		this.cmd("Step");
		this.treeRoot = new AVLNode(insertedValue, treeNodeID, labelID, this.startingX, AVL.STARTING_Y);
		this.treeRoot.height = 1;
	}
	else {
		treeNodeID = this.nextIndex++;
		labelID = this.nextIndex++;
		console.log("treeNodeID", treeNodeID)
		console.log("labelID", labelID)

		this.highlightID = this.nextIndex++;

		this.cmd("CreateCircle", treeNodeID, insertedValue, 30, AVL.STARTING_Y);

		this.cmd("SetForegroundColor", treeNodeID, AVL.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", treeNodeID, AVL.BACKGROUND_COLOR);
		this.cmd("CreateLabel", labelID, "", 100 - 20, 100 - 20);
		this.cmd("SetForegroundColor", labelID, AVL.HEIGHT_LABEL_COLOR);
		this.cmd("Step");
		var insertElem = new AVLNode(insertedValue, treeNodeID, labelID, 100, 100)

		this.cmd("SetHighlight", insertElem.graphicID, 1);
		insertElem.height = 1;
		this.insert(insertElem, this.treeRoot);
		//				this.resizeTree();				
	}
	this.cmd("SetText", 0, " ");
	return this.commands;
}


AVL.prototype.singleRotateRight = function (tree) {
	console.log("bước 7: AVL.prototype.singleRotateRight")

	var B = tree;
	var t3 = B.right;
	var A = tree.left;
	var t1 = A.left;
	var t2 = A.right;

	this.cmd("SetText", 0, "Single Rotate Right");
	this.cmd("SetEdgeHighlight", B.graphicID, A.graphicID, 1);
	this.cmd("Step");


	if (t2 != null) {
		this.cmd("Disconnect", A.graphicID, t2.graphicID);
		this.cmd("Connect", B.graphicID, t2.graphicID, AVL.LINK_COLOR);
		t2.parent = B;
	}
	this.cmd("Disconnect", B.graphicID, A.graphicID);
	this.cmd("Connect", A.graphicID, B.graphicID, AVL.LINK_COLOR);
	A.parent = B.parent;
	if (this.treeRoot == B) {
		this.treeRoot = A;
	}
	else {
		this.cmd("Disconnect", B.parent.graphicID, B.graphicID, AVL.LINK_COLOR);
		this.cmd("Connect", B.parent.graphicID, A.graphicID, AVL.LINK_COLOR)
		if (B.isLeftChild()) {
			B.parent.left = A;
		}
		else {
			B.parent.right = A;
		}
	}
	A.right = B;
	B.parent = A;
	B.left = t2;
	this.resetHeight(B);
	this.resetHeight(A);
	this.resizeTree();
}



AVL.prototype.singleRotateLeft = function (tree) {
	console.log("bước 7: AVL.prototype.singleRotateLeft")

	var A = tree;
	var B = tree.right;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = B.right;

	this.cmd("SetText", 0, "Single Rotate Left");
	this.cmd("SetEdgeHighlight", A.graphicID, B.graphicID, 1);
	this.cmd("Step");

	if (t2 != null) {
		this.cmd("Disconnect", B.graphicID, t2.graphicID);
		this.cmd("Connect", A.graphicID, t2.graphicID, AVL.LINK_COLOR);
		t2.parent = A;
	}
	this.cmd("Disconnect", A.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, A.graphicID, AVL.LINK_COLOR);
	B.parent = A.parent;
	if (this.treeRoot == A) {
		this.treeRoot = B;
	}
	else {
		this.cmd("Disconnect", A.parent.graphicID, A.graphicID, AVL.LINK_COLOR);
		this.cmd("Connect", A.parent.graphicID, B.graphicID, AVL.LINK_COLOR)

		if (A.isLeftChild()) {
			A.parent.left = B;
		}
		else {
			A.parent.right = B;
		}
	}
	B.left = A;
	A.parent = B;
	A.right = t2;
	this.resetHeight(A);
	this.resetHeight(B);

	this.resizeTree();
}




AVL.prototype.getHeight = function (tree) {
	if (tree == null) {
		return 0;
	}
	return tree.height;
}

AVL.prototype.resetHeight = function (tree) {
	if (tree != null) {
		var newHeight = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1;
		if (tree.height != newHeight) {
			tree.height = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1
			this.cmd("SetText", tree.heightLabelID, newHeight);
			//			this.cmd("SetText",tree.heightLabelID, newHeight);
		}
	}
}

AVL.prototype.doubleRotateRight = function (tree) {
	console.log("bước 7: AVL.prototype.doubleRotateRight")

	this.cmd("SetText", 0, "Double Rotate Right");
	var A = tree.left;
	var B = tree.left.right;
	var C = tree;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = B.right;
	var t4 = C.right;

	this.cmd("Disconnect", C.graphicID, A.graphicID);
	this.cmd("Disconnect", A.graphicID, B.graphicID);
	this.cmd("Connect", C.graphicID, A.graphicID, AVL.HIGHLIGHT_LINK_COLOR);
	this.cmd("Connect", A.graphicID, B.graphicID, AVL.HIGHLIGHT_LINK_COLOR);
	this.cmd("Step");

	if (t2 != null) {
		this.cmd("Disconnect", B.graphicID, t2.graphicID);
		t2.parent = A;
		A.right = t2;
		this.cmd("Connect", A.graphicID, t2.graphicID, AVL.LINK_COLOR);
	}
	if (t3 != null) {
		this.cmd("Disconnect", B.graphicID, t3.graphicID);
		t3.parent = C;
		C.left = t2;
		this.cmd("Connect", C.graphicID, t3.graphicID, AVL.LINK_COLOR);
	}
	if (C.parent == null) {
		B.parent = null;
		this.treeRoot = B;
	}
	else {
		this.cmd("Disconnect", C.parent.graphicID, C.graphicID);
		this.cmd("Connect", C.parent.graphicID, B.graphicID, AVL.LINK_COLOR);
		if (C.isLeftChild()) {
			C.parent.left = B
		}
		else {
			C.parent.right = B;
		}
		B.parent = C.parent;
		C.parent = B;
	}
	this.cmd("Disconnect", C.graphicID, A.graphicID);
	this.cmd("Disconnect", A.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, A.graphicID, AVL.LINK_COLOR);
	this.cmd("Connect", B.graphicID, C.graphicID, AVL.LINK_COLOR);
	B.left = A;
	A.parent = B;
	B.right = C;
	C.parent = B;
	A.right = t2;
	C.left = t3;
	this.resetHeight(A);
	this.resetHeight(C);
	this.resetHeight(B);

	this.resizeTree();


}

AVL.prototype.doubleRotateLeft = function (tree) {
	console.log("bước 7: AVL.prototype.doubleRotateLeft")

	this.cmd("SetText", 0, "Double Rotate Left");
	var A = tree;
	var B = tree.right.left;
	var C = tree.right;
	var t1 = A.left;
	var t2 = B.left;
	var t3 = B.right;
	var t4 = C.right;

	this.cmd("Disconnect", A.graphicID, C.graphicID);
	this.cmd("Disconnect", C.graphicID, B.graphicID);
	this.cmd("Connect", A.graphicID, C.graphicID, AVL.HIGHLIGHT_LINK_COLOR);
	this.cmd("Connect", C.graphicID, B.graphicID, AVL.HIGHLIGHT_LINK_COLOR);
	this.cmd("Step");

	if (t2 != null) {
		this.cmd("Disconnect", B.graphicID, t2.graphicID);
		t2.parent = A;
		A.right = t2;
		this.cmd("Connect", A.graphicID, t2.graphicID, AVL.LINK_COLOR);
	}
	if (t3 != null) {
		this.cmd("Disconnect", B.graphicID, t3.graphicID);
		t3.parent = C;
		C.left = t2;
		this.cmd("Connect", C.graphicID, t3.graphicID, AVL.LINK_COLOR);
	}


	if (A.parent == null) {
		B.parent = null;
		this.treeRoot = B;
	}
	else {
		this.cmd("Disconnect", A.parent.graphicID, A.graphicID);
		this.cmd("Connect", A.parent.graphicID, B.graphicID, AVL.LINK_COLOR);
		if (A.isLeftChild()) {
			A.parent.left = B
		}
		else {
			A.parent.right = B;
		}
		B.parent = A.parent;
		A.parent = B;
	}
	this.cmd("Disconnect", A.graphicID, C.graphicID);
	this.cmd("Disconnect", C.graphicID, B.graphicID);
	this.cmd("Connect", B.graphicID, A.graphicID, AVL.LINK_COLOR);
	this.cmd("Connect", B.graphicID, C.graphicID, AVL.LINK_COLOR);
	B.left = A;
	A.parent = B;
	B.right = C;
	C.parent = B;
	A.right = t2;
	C.left = t3;
	this.resetHeight(A);
	this.resetHeight(C);
	this.resetHeight(B);

	this.resizeTree();


}

// elem là node cần thêm vào tree
// tree là node đang được xét, có thể gắn elem vào node đó không
AVL.prototype.insert = function (elem, tree) {
	console.log("bước 6: AVL.prototype.insert")

	this.cmd("SetHighlight", tree.graphicID, 1);
	this.cmd("SetHighlight", elem.graphicID, 1);

	if (compareStringsAsNumbersOrAlphabetically(elem.data, tree.data) == -1) {
		this.cmd("SetText", 0, elem.data + " < " + tree.data + ".  Looking at left subtree");
	}
	else {
		this.cmd("SetText", 0, elem.data + " >= " + tree.data + ".  Looking at right subtree");
	}
	this.cmd("Step");
	this.cmd("SetHighlight", tree.graphicID, 0);
	this.cmd("SetHighlight", elem.graphicID, 0);

	if (compareStringsAsNumbersOrAlphabetically(elem.data, tree.data) == -1) {
		if (tree.left == null) {
			this.cmd("SetText", 0, "Found null tree, inserting element");
			this.cmd("SetText", elem.heightLabelID, 1);	// set text này là set height cho node mới tạo bằng 1 để hiển thị lên giao diện

			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.left = elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, AVL.LINK_COLOR);

			this.resizeTree();
			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.left.x, tree.left.y);
			this.cmd("Move", this.highlightID, tree.x, tree.y);
			this.cmd("SetText", 0, "Unwinding Recursion");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);

			if (tree.height < tree.left.height + 1) {
				tree.height = tree.left.height + 1
				this.cmd("SetText", tree.heightLabelID, tree.height);
				this.cmd("SetText", 0, "Adjusting height after recursive call");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}
		}
		else {
			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
			this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			this.insert(elem, tree.left);
			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.left.x, tree.left.y);
			this.cmd("Move", this.highlightID, tree.x, tree.y);
			this.cmd("SetText", 0, "Unwinding Recursion");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);

			if (tree.height < tree.left.height + 1) {
				tree.height = tree.left.height + 1
				this.cmd("SetText", tree.heightLabelID, tree.height);
				this.cmd("SetText", 0, "Adjusting height after recursive call");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);

			}
			if ((tree.right != null && tree.left.height > tree.right.height + 1) ||
				(tree.right == null && tree.left.height > 1)) {
				if (compareStringsAsNumbersOrAlphabetically(elem.data, tree.left.data) == -1) {
					this.singleRotateRight(tree);
				}
				else {
					this.doubleRotateRight(tree);
				}
			}
		}
	}
	else {
		if (tree.right == null) {
			this.cmd("SetText", 0, "Found null tree, inserting element");
			this.cmd("SetText", elem.heightLabelID, 1);
			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.right = elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, AVL.LINK_COLOR);
			elem.x = tree.x + AVL.WIDTH_DELTA / 2;
			elem.y = tree.y + AVL.HEIGHT_DELTA
			this.cmd("Move", elem.graphicID, elem.x, elem.y);

			this.resizeTree();


			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.right.x, tree.right.y);
			this.cmd("Move", this.highlightID, tree.x, tree.y);	// chạy highlight node từ node đó về node cha gọi nó
			this.cmd("SetText", 0, "Unwinding Recursion");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);

			if (tree.height < tree.right.height + 1) {
				tree.height = tree.right.height + 1
				this.cmd("SetText", tree.heightLabelID, tree.height);
				this.cmd("SetText", 0, "Adjusting height after recursive call");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}

		}
		else {
			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
			this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			this.insert(elem, tree.right);
			this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.right.x, tree.right.y);
			this.cmd("Move", this.highlightID, tree.x, tree.y);
			this.cmd("SetText", 0, "Unwinding Recursion");
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			if (tree.height < tree.right.height + 1) {
				tree.height = tree.right.height + 1
				this.cmd("SetText", tree.heightLabelID, tree.height);
				this.cmd("SetText", 0, "Adjusting height after recursive call");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);


			}
			//? tại sao chỉ có check cân bằng và xoay node khi tree.right != null ???
			// vì nếu node.right == null và mình thêm node mới vào vị trí null thì sẽ không bao giờ làm mất cân bằng cây
			// chỉ có khi tree.right != null và tiếp tục thêm node vào bên phải của bên phải của tree mới có thể làm mất cân bằng
			//
			//	0 (node này mới có thể mất cần bằng nên phải check)
			//   \
			//    0	(check thấy right của node này null -> thêm node vào bên phải của node này) -> node này không thể mất cân bằng được
			//	   \
			//      0 (node mới được thêm vào tree)
			//----------------------------------------------------------------

			if ((tree.left != null && tree.right.height > tree.left.height + 1) ||
				(tree.left == null && tree.right.height > 1)) {
				if (compareStringsAsNumbersOrAlphabetically(elem.data, tree.right.data) != -1) {
					this.singleRotateLeft(tree);
				}
				else {
					this.doubleRotateLeft(tree);
				}
			}
		}
	}


}

AVL.prototype.deleteElement = function (deletedValue) {
	this.commands = [];
	this.cmd("SetText", 0, "Deleting " + deletedValue);
	this.cmd("Step");
	this.cmd("SetText", 0, " ");
	this.highlightID = this.nextIndex++;
	this.treeDelete(this.treeRoot, deletedValue);
	this.cmd("SetText", 0, " ");
	return this.commands;
}

AVL.prototype.treeDelete = function (tree, valueToDelete) {
	var leftchild = false;
	if (tree != null) {
		if (tree.parent != null) {
			leftchild = tree.parent.left == tree;
		}
		this.cmd("SetHighlight", tree.graphicID, 1);
		if (compareStringsAsNumbersOrAlphabetically(valueToDelete, tree.data) != -1) {
			this.cmd("SetText", 0, valueToDelete + " < " + tree.data + ".  Looking at left subtree");
		}
		else if (valueToDelete > tree.data) {
			this.cmd("SetText", 0, valueToDelete + " > " + tree.data + ".  Looking at right subtree");
		}
		else {
			this.cmd("SetText", 0, valueToDelete + " == " + tree.data + ".  Found node to delete");
		}
		this.cmd("Step");
		this.cmd("SetHighlight", tree.graphicID, 0);

		if (compareStringsAsNumbersOrAlphabetically(valueToDelete, tree.data) == 0) {
			if (tree.left == null && tree.right == null) {
				this.cmd("SetText", 0, "Node to delete is a leaf.  Delete it.");
				this.cmd("Delete", tree.graphicID);
				this.cmd("Delete", tree.heightLabelID);
				if (leftchild && tree.parent != null) {
					tree.parent.left = null;
				}
				else if (tree.parent != null) {
					tree.parent.right = null;
				}
				else {
					this.treeRoot = null;
				}
				this.resizeTree();
				this.cmd("Step");

			}
			else if (tree.left == null) {
				this.cmd("SetText", 0, "Node to delete has no left child.  \nSet parent of deleted node to right child of deleted node.");
				if (tree.parent != null) {
					this.cmd("Disconnect", tree.parent.graphicID, tree.graphicID);
					this.cmd("Connect", tree.parent.graphicID, tree.right.graphicID, AVL.LINK_COLOR);
					this.cmd("Step");
					this.cmd("Delete", tree.graphicID);
					this.cmd("Delete", tree.heightLabelID);
					if (leftchild) {
						tree.parent.left = tree.right;
					}
					else {
						tree.parent.right = tree.right;
					}
					tree.right.parent = tree.parent;
				}
				else {
					this.cmd("Delete", tree.graphicID);
					this.cmd("Delete", tree.heightLabelID);
					this.treeRoot = tree.right;
					this.treeRoot.parent = null;
				}
				this.resizeTree();
			}
			else if (tree.right == null) {
				this.cmd("SetText", 0, "Node to delete has no right child.  \nSet parent of deleted node to left child of deleted node.");
				if (tree.parent != null) {
					this.cmd("Disconnect", tree.parent.graphicID, tree.graphicID);
					this.cmd("Connect", tree.parent.graphicID, tree.left.graphicID, AVL.LINK_COLOR);
					this.cmd("Step");
					this.cmd("Delete", tree.graphicID);
					this.cmd("Delete", tree.heightLabelID);
					if (leftchild) {
						tree.parent.left = tree.left;
					}
					else {
						tree.parent.right = tree.left;
					}
					tree.left.parent = tree.parent;
				}
				else {
					this.cmd("Delete", tree.graphicID);
					this.cmd("Delete", tree.heightLabelID);
					this.treeRoot = tree.left;
					this.treeRoot.parent = null;
				}
				this.resizeTree();
			}
			else // tree.left != null && tree.right != null
			{
				this.cmd("SetText", 0, "Node to delete has two childern.  \nFind largest node in left subtree.");

				this.highlightID = this.nextIndex;
				this.nextIndex += 1;
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
				var tmp = tree;
				tmp = tree.left;
				this.cmd("Move", this.highlightID, tmp.x, tmp.y);
				this.cmd("Step");
				while (tmp.right != null) {
					tmp = tmp.right;
					this.cmd("Move", this.highlightID, tmp.x, tmp.y);
					this.cmd("Step");
				}
				this.cmd("SetText", tree.graphicID, " ");
				var labelID = this.nextIndex;
				this.nextIndex += 1;
				this.cmd("CreateLabel", labelID, tmp.data, tmp.x, tmp.y);
				this.cmd("SetForegroundColor", labelID, AVL.HEIGHT_LABEL_COLOR);
				tree.data = tmp.data;
				this.cmd("Move", labelID, tree.x, tree.y);
				this.cmd("SetText", 0, "Copy largest value of left subtree into node to delete.");

				this.cmd("Step");
				this.cmd("SetHighlight", tree.graphicID, 0);
				this.cmd("Delete", labelID);
				this.cmd("SetText", tree.graphicID, tree.data);
				this.cmd("Delete", this.highlightID);
				this.cmd("SetText", 0, "Remove node whose value we copied.");

				if (tmp.left == null) {
					if (tmp.parent != tree) {
						tmp.parent.right = null;
					}
					else {
						tree.left = null;
					}
					this.cmd("Delete", tmp.graphicID);
					this.cmd("Delete", tmp.heightLabelID);
					this.resizeTree();
				}
				else {
					this.cmd("Disconnect", tmp.parent.graphicID, tmp.graphicID);
					this.cmd("Connect", tmp.parent.graphicID, tmp.left.graphicID, AVL.LINK_COLOR);
					this.cmd("Step");
					this.cmd("Delete", tmp.graphicID);
					this.cmd("Delete", tmp.heightLabelID);
					if (tmp.parent != tree) {
						tmp.parent.right = tmp.left;
						tmp.left.parent = tmp.parent;
					}
					else {
						tree.left = tmp.left;
						tmp.left.parent = tree;
					}
					this.resizeTree();
				}
				tmp = tmp.parent;

				if (this.getHeight(tmp) != Math.max(this.getHeight(tmp.left), this.getHeight(tmp.right)) + 1) {
					tmp.height = Math.max(this.getHeight(tmp.left), this.getHeight(tmp.right)) + 1
					this.cmd("SetText", tmp.heightLabelID, tmp.height);
					this.cmd("SetText", 0, "Adjusting height after recursive call");
					this.cmd("SetForegroundColor", tmp.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
					this.cmd("Step");
					this.cmd("SetForegroundColor", tmp.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
				}



				while (tmp != tree) {
					var tmpPar = tmp.parent;
					// TODO:  Add extra animation here?
					if (this.getHeight(tmp.left) - this.getHeight(tmp.right) > 1) {
						if (this.getHeight(tmp.left.right) > this.getHeight(tmp.left.left)) {
							this.doubleRotateRight(tmp);
						}
						else {
							this.singleRotateRight(tmp);
						}
					}
					if (tmpPar.right != null) {
						if (tmpPar == tree) {
							this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tmpPar.left.x, tmpPar.left.y);

						}
						else {
							this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tmpPar.right.x, tmpPar.right.y);
						}
						this.cmd("Move", this.highlightID, tmpPar.x, tmpPar.y);
						this.cmd("SetText", 0, "Backing up ...");

						if (this.getHeight(tmpPar) != Math.max(this.getHeight(tmpPar.left), this.getHeight(tmpPar.right)) + 1) {
							tmpPar.height = Math.max(this.getHeight(tmpPar.left), this.getHeight(tmpPar.right)) + 1
							this.cmd("SetText", tmpPar.heightLabelID, tree.height);
							this.cmd("SetText", 0, "Adjusting height after recursive call");
							this.cmd("SetForegroundColor", tmpPar.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
							this.cmd("Step");
							this.cmd("SetForegroundColor", tmpPar.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
						}

						//28,15,50,7,22,39,55,10,33,42,63,30 .


						this.cmd("Step");
						this.cmd("Delete", this.highlightID);
					}
					tmp = tmpPar;
				}
				if (this.getHeight(tree.right) - this.getHeight(tree.left) > 1) {
					if (this.getHeight(tree.right.left) > this.getHeight(tree.right.right)) {
						this.doubleRotateLeft(tree);
					}
					else {
						this.singleRotateLeft(tree);
					}
				}

			}
		}
		else if (compareStringsAsNumbersOrAlphabetically(valueToDelete, tree.data) == -1) {
			if (tree.left != null) {
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
				this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
			this.treeDelete(tree.left, valueToDelete);
			if (tree.left != null) {
				this.cmd("SetText", 0, "Unwinding recursion.");
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.left.x, tree.left.y);
				this.cmd("Move", this.highlightID, tree.x, tree.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
			if (this.getHeight(tree.right) - this.getHeight(tree.left) > 1) {
				if (this.getHeight(tree.right.left) > this.getHeight(tree.right.right)) {
					this.doubleRotateLeft(tree);
				}
				else {
					this.singleRotateLeft(tree);
				}
			}
			if (this.getHeight(tree) != Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1) {
				tree.height = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1
				this.cmd("SetText", tree.heightLabelID, tree.height);
				this.cmd("SetText", 0, "Adjusting height after recursive call");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}
		}
		else {
			if (tree.right != null) {
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.x, tree.y);
				this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
			this.treeDelete(tree.right, valueToDelete);
			if (tree.right != null) {
				this.cmd("SetText", 0, "Unwinding recursion.");
				this.cmd("CreateHighlightCircle", this.highlightID, AVL.HIGHLIGHT_COLOR, tree.right.x, tree.right.y);
				this.cmd("Move", this.highlightID, tree.x, tree.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}


			if (this.getHeight(tree.left) - this.getHeight(tree.right) > 1) {
				if (this.getHeight(tree.left.right) > this.getHeight(tree.left.left)) {
					this.doubleRotateRight(tree);
				}
				else {
					this.singleRotateRight(tree);
				}
			}
			if (this.getHeight(tree) != Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1) {
				tree.height = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1
				this.cmd("SetText", tree.heightLabelID, tree.height);
				this.cmd("SetText", 0, "Adjusting height after recursive call");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HIGHLIGHT_LABEL_COLOR);
				this.cmd("Step");
				this.cmd("SetForegroundColor", tree.heightLabelID, AVL.HEIGHT_LABEL_COLOR);
			}


		}
	}
	else {
		this.cmd("SetText", 0, "Elemet " + valueToDelete + " not found, could not delete");
	}

}

//* điểu chỉnh kích thước của cây
AVL.prototype.resizeTree = function () {
	var startingPoint = this.startingX;
	this.resizeWidths(this.treeRoot);
	if (this.treeRoot != null) {
		if (this.treeRoot.leftWidth > startingPoint) {	// kiểm tra chiều rộng của cây con bên trái có lớn hơn startingPoint không 
			startingPoint = this.treeRoot.leftWidth;	// -> Nếu có thay đổi startingPoint để chứa được cây con bên trái
		}
		else if (this.treeRoot.rightWidth > startingPoint) {	// tương tự với cây con bên phải
			startingPoint = Math.max(this.treeRoot.leftWidth, 2 * startingPoint - this.treeRoot.rightWidth);
		}

		this.setNewPositions(this.treeRoot, startingPoint, AVL.STARTING_Y, 0);	// tính toán lại vị trí của tất cả các node
		this.animateNewPositions(this.treeRoot);	// tạo hoạt ảnh dịch chuyển các node về vị trí sau khi được tính toán lại

		this.cmd("Step"); // sau khi push rất nhiêu lệnh "MOVE" khi gọi animateNewPositions, push "Step" vào commands[] để ngắt các lệnh
	}

}

AVL.prototype.setNewPositions = function (tree, xPosition, yPosition, side) {
	if (tree != null) {
		tree.y = yPosition; // set tọa độ y cho node
		//* side = {-1, 1, 0} 
		// -1 : node bên trái của node cha 
		//  1 : node bên phải của node cha,
		// 	0 : root

		// dựa vào đó để tính tọa độ x của node, và vị trí đặt label của node
		if (side == -1) {
			xPosition = xPosition - tree.rightWidth;
			tree.heightLabelX = xPosition - 20;
		}
		else if (side == 1) {
			xPosition = xPosition + tree.leftWidth;
			tree.heightLabelX = xPosition + 20;
		}
		else {
			tree.heightLabelX = xPosition - 20;
		}
		tree.x = xPosition;
		tree.heightLabelY = tree.y - 20;
		this.setNewPositions(tree.left, xPosition, yPosition + AVL.HEIGHT_DELTA, -1)
		this.setNewPositions(tree.right, xPosition, yPosition + AVL.HEIGHT_DELTA, 1)
	}

}

// sau khi resize cây 
// tính toán được vị trí mới của các node
// animateNewPositions được gọi để dịch chuyển cây (tất cả các node) sang vị trí mới
AVL.prototype.animateNewPositions = function (tree) {
	if (tree != null) {
		this.cmd("Move", tree.graphicID, tree.x, tree.y);
		this.cmd("Move", tree.heightLabelID, tree.heightLabelX, tree.heightLabelY);
		this.animateNewPositions(tree.left);
		this.animateNewPositions(tree.right);
	}
}
// tính toán lại chiều rộng của từng node
// mỗi node có độ dài bằng độ dài cây bên trái cộng độ dài cây bên phải
// Nếu cây con bên trái không tồn tại leftWidth = AVL.WIDTH_DELTA / 2
// Nếu cây con bên trái có tồn tại leftWidth = max(this.resizeWidths(tree.left), AVL.WIDTH_DELTA / 2)
// tương tự với cây con bên phải
AVL.prototype.resizeWidths = function (tree) {
	if (tree == null) {
		return 0;
	}
	tree.leftWidth = Math.max(this.resizeWidths(tree.left), AVL.WIDTH_DELTA / 2);
	tree.rightWidth = Math.max(this.resizeWidths(tree.right), AVL.WIDTH_DELTA / 2);
	return tree.leftWidth + tree.rightWidth;
}


AVL.prototype.disableUI = function (event) {
	this.insertField.disabled = true;
	this.insertButton.disabled = true;
	this.deleteField.disabled = true;
	this.deleteButton.disabled = true;
	this.findField.disabled = true;
	this.findButton.disabled = true;
	// this.printButton.disabled = true;

	this.importButton.disabled = true;
	this.importField.disabled = true;

	this.printButton1.disabled = true;
	this.printButton2.disabled = true;
	this.printButton3.disabled = true;

}

AVL.prototype.enableUI = function (event) {
	this.insertField.disabled = false;
	this.insertButton.disabled = false;
	this.deleteField.disabled = false;
	this.deleteButton.disabled = false;
	this.findField.disabled = false;
	this.findButton.disabled = false;
	// this.printButton.disabled = false;

	this.importButton.disabled = false;
	this.importField.disabled = false;

	this.printButton1.disabled = false;
	this.printButton2.disabled = false;
	this.printButton3.disabled = false;

}


function AVLNode(val, id, hid, initialX, initialY) {
	console.log("bước 5: function AVLNode")

	this.data = val;
	this.x = initialX;
	this.y = initialY;
	this.heightLabelID = hid;
	this.height = 1;

	this.graphicID = id;
	this.left = null;
	this.right = null;
	this.parent = null;
}

AVLNode.prototype.isLeftChild = function () {
	if (this.parent == null) {
		return true;
	}
	return this.parent.left == this;
}

function compareStringsAsNumbersOrAlphabetically(str1, str2) {
	// Chuyển chuỗi thành số bằng cách loại bỏ các ký tự không phải số và sử dụng parseInt
	const num1 = parseInt(str1.replace(/\D/g, ''), 10);
	const num2 = parseInt(str2.replace(/\D/g, ''), 10);

	console.log("compare", str1, str2);

	if (!isNaN(num1) && !isNaN(num2)) {
		// Nếu cả hai chuỗi có thể chuyển thành số, so sánh chúng
		if (num1 > num2) {
			return 1;
		} else if (num1 < num2) {
			return -1;
		} else {
			return 0;
		}
	} else {
		// Nếu ít nhất một trong hai chuỗi không phải số, so sánh chúng theo thứ tự chữ cái
		return str1.localeCompare(str2);
	}
}





var currentAlg;

function init() {
	console.log("AVL init()")
	var animManag = initCanvasAVL();

	currentAlg = new AVL(animManag, canvas.width, canvas.height);
}

function initDialog() {
	console.log("initDialog")
	$("#dialog-insert-node").dialog({
		modal: true,
		autoOpen: false,
		width: 300,
		height: 200,
		open: function () {

		},
		position: {
			my: 'center', at: 'center', of: window, using: function (pos) {
				$(this).css({
					top: '270px', // Đặt vị trí theo chiều dọc
					left: '230px' // Đặt vị trí theo chiều ngang
				});
			}
		},
	});

	$("#dialog-delete-node").dialog({
		modal: true,
		autoOpen: false,
		width: 300,
		height: 150,
		open: function () {

		},
		position: {
			my: 'center', at: 'center', of: window, using: function (pos) {
				$(this).css({
					top: '270px', // Đặt vị trí theo chiều dọc
					left: '230px' // Đặt vị trí theo chiều ngang
				});
			}
		}
	});

	$("#dialog-setting").dialog({
		modal: true,
		autoOpen: false,
		// width: 300,
		// height: 150,
		open: function () {

		},
		position: {
			my: 'center', at: 'center', of: window, using: function (pos) {
				$(this).css({
					top: '270px', // Đặt vị trí theo chiều dọc
					left: '230px' // Đặt vị trí theo chiều ngang
				});
			}
		}
	});

	$("#dialog-find-node").dialog({
		modal: true,
		autoOpen: false,
		width: 300,
		height: 150,
		open: function () {

		},
		position: {
			my: 'center', at: 'center', of: window, using: function (pos) {
				$(this).css({
					top: '270px', // Đặt vị trí theo chiều dọc
					left: '230px' // Đặt vị trí theo chiều ngang
				});
			}
		}
	});
}
