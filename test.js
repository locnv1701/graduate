BST.prototype.doFind = function (tree, value) {
    if (tree != null) {
        if (tree.data == value) {
            log(value + " = " + value + " (Element found!)");
        }
        else {
            if (tree.data > value) {
                log(value + " < " + tree.data + " (look to left subtree)");
                this.doFind(tree.left, value);
            }
            else {
                log(value + " > " + tree.data + " (look to right subtree)");
                this.doFind(tree.right, value);
            }
        }
    }
    else {
        log("Element not found");
    }
}

BST.prototype.insertElement = function (insertedValue) {
    if (this.treeRoot == null) {
        this.treeRoot = new BSTNode(insertedValue)
    }
    else {
        var insertElem = new BSTNode(insertedValue)
        this.insert(insertElem, this.treeRoot)
    }
}

BST.prototype.insert = function (elem, tree) {
    if (elem.data < tree.data) {
        log(elem.data + " < " + tree.data + "Looking at left subtree");
    }
    else {
        log(elem.data + " >= " + tree.data + "Looking at right subtree");
    }
    if (elem.data < tree.data) {
        if (tree.left == null) {
            tree.left = elem; elem.parent = tree;
        }
        else {
            this.insert(elem, tree.left);
        }
    }
    else {
        if (tree.right == null) {
            tree.right = elem; elem.parent = tree;
        }
        else {
            this.insert(elem, tree.right);
        }
    }
}

BST.prototype.treeDelete = function (tree, valueToDelete) {
    var leftchild = false;
    if (tree != null) {
        if (tree.parent != null) {
            leftchild = tree.parent.left == tree;
        }
        if (valueToDelete < tree.data) {
            log(valueToDelete + " < " + tree.data + "Looking at left subtree");
        } else if (valueToDelete > tree.data) {
            log(valueToDelete + " > " + tree.data + "Looking at right subtree");
        } else {
            log(valueToDelete + " == " + tree.data + "Found node to delete");
        }
        if (valueToDelete == tree.data) {
            if (tree.left == null && tree.right == null) {
                if (leftchild && tree.parent != null) {
                    tree.parent.left = null;

                } else if (tree.parent != null) {
                    tree.parent.right = null;
                } else {
                    treeRoot = null;
                }
            } else if (tree.left == null) {
                if (tree.parent != null) {
                    if (leftchild) {
                        tree.parent.left = tree.right;
                    } else {
                        tree.parent.right = tree.right;
                    }
                    tree.right.parent = tree.parent;
                } else {
                    this.treeRoot = tree.right; this.treeRoot.parent = null;
                }
            } else if (tree.right == null) {
                if (tree.parent != null) {
                    if (leftchild) {
                        tree.parent.left = tree.left;
                    } else {
                        tree.parent.right = tree.left;
                    }
                    tree.left.parent = tree.parent;
                } else {
                    this.treeRoot = tree.left;
                    this.treeRoot.parent = null;
                }
            } else { // tree.left != null && tree.right != null var tmp = tree.left;
                while (tmp.right != null) {
                    tmp = tmp.right;
                }
                tree.data = tmp.data; if (tmp.left == null) {
                    if (tmp.parent != tree) {
                        tmp.parent.right = null;
                    } else {
                        tree.left = null;
                    }
                } else {
                    if (tmp.parent != tree) {
                        tmp.parent.right = tmp.left; tmp.left.parent = tmp.parent;
                    } else {
                        tree.left = tmp.left; tmp.left.parent = tree;
                    }
                }
            }
        } else if (valueToDelete < tree.data) {
            this.treeDelete(tree.left, valueToDelete);
        }
        else {
            this.treeDelete(tree.right, valueToDelete);
        }
    } else {
        log("Elemet " + valueToDelete + " not found, could not delete");
    }
}


BST.prototype.preOrder = function (tree) {
    this.order.push(tree.data);
    if (tree.left != null) {
        this.preOrder(tree.left);
    }
    if (tree.right != null) {
        this.preOrder(tree.right);
    }
    return;
}



BST.prototype.inOrder = function (tree) {
    if (tree.left != null) {
        this.inOrder(tree.left);
    }
    this.order.push(tree.data);
    if (tree.right != null) {
        this.inOrder(tree.right);
    }
    return;
}

BST.prototype.postOrder = function (tree) {
    if (tree.left != null) {
        this.postOrder(tree.left);
    }
    if (tree.right != null) {
        this.postOrder(tree.right);
    }
    this.order.push(tree.data); return;
}


AVL.prototype.singleRotateRight = function (tree) {
    var Y = tree;
    var X = tree.left; var t2 = X.right;

    if (t2 != null) {
        t2.parent = Y;
    }
    X.parent = Y.parent;
    if (this.treeRoot == Y) {
        this.treeRoot = X;
    }
    else {
        if (Y.isLeftChild()) {
            Y.parent.left = X;
        }
        else {
            Y.parent.right = X;
        }
    }
    X.right = Y;
    Y.parent = X;
    Y.left = t2;
}


AVL.prototype.singleRotateLeft = function (tree) {
    var X = tree;
    var Y = tree.right; var t2 = Y.left;

    if (t2 != null) {
        t2.parent = X;
    }
    Y.parent = X.parent;
    if (this.treeRoot == X) {
        this.treeRoot = Y;
    }
    else {
        if (X.isLeftChild()) {
            X.parent.left = Y;
        }
        else {
            X.parent.right = Y;
        }
    }
    Y.left = X;
    X.parent = Y;
    X.right = t2;
}


AVL.prototype.LeftRightRotate = function (tree) {
    var X = tree.left;
    var Y = tree.left.right; var Z = tree;
    var t2 = Y.left; var t3 = Y.right;

    if (t2 != null) {
        t2.parent = X; X.right = t2;
    }
    if (t3 != null) {
        t3.parent = Z; Z.left = t2;
    }
    if (Z.parent == null) {
        Y.parent = null; this.treeRoot = Y;
    } else {
        if (Z.isLeftChild()) {
            Z.parent.left = Y
        } else {
            Z.parent.right = Y;
        }
        Y.parent = Z.parent;
        Z.parent = Y;
    }

    Y.left = X; X.parent = Y;
    Y.right = Z;
    Z.parent = Y; X.right = t2; Z.left = t3;
}

AVL.prototype.RightLeftRotate = function (tree) {
    var X = tree;
    var Y = tree.right.left; var Z = tree.right;
    var t2 = Y.left; var t3 = Y.right;

    if (t2 != null) {
        t2.parent = X; X.right = t2;
    }
    if (t3 != null) {
        t3.parent = Z; Z.left = t2;
    }

    if (X.parent == null) {

        Y.parent = null; this.treeRoot = Y;
    } else {
        if (X.isLeftChild()) {
            X.parent.left = Y
        } else {
            X.parent.right = Y;
        }
        Y.parent = X.parent; X.parent = Y;
    }

    Y.left = X; X.parent = Y;
    Y.right = Z;
    Z.parent = Y; X.right = t2; Z.left = t3;
}


AVL.prototype.insert = function (elem, tree) {
    if (elem.data < tree.data) {
        log(elem.data + " < " + tree.data + "Looking at left subtree");
    } else {
        log(elem.data + " >= " + tree.data + "Looking at right subtree");
    }
    if (elem.data < tree.data) {
        if (tree.left == null) {
            log("Found null tree, inserting element"); tree.left = elem;
            elem.parent = tree;
            if (tree.height < tree.left.height + 1) {
                tree.height = tree.left.height + 1
            }
        } else {
            if (tree.height < tree.left.height + 1) {
                tree.height = tree.left.height + 1
            }
            if ((tree.right != null && tree.left.height > tree.right.height + 1)
                || (tree.right == null && tree.left.height > 1)) {
                if (elem.data < tree.left.data) {
                    this.singleRotateRight(tree);
                } else {
                    this.leftRightRotate(tree);
                }
            }
        }
    } else {
        if (tree.right == null) {
            tree.right = elem; elem.parent = tree;
            if (tree.height < tree.right.height + 1) {
                tree.height = tree.right.height + 1
            }

        } else {
            this.insert(elem, tree.right);
            if (tree.height < tree.right.height + 1) {
                tree.height = tree.right.height + 1
            }
            if ((tree.left != null && tree.right.height > tree.left.height + 1)
                || (tree.left == null && tree.right.height > 1)) {
                if (elem.data > tree.right.data) {
                    this.singleRotateLeft(tree);
                } else {
                    this.rightLeftRotate(tree);
                }
            }
        }
    }
}


AVL.prototype.treeDelete = function (tree, valueToDelete) {
    var leftchild = false;
    if (tree != null) {
        if (tree.parent != null) {
            leftchild = tree.parent.left == tree;
        }
        if (valueToDelete < tree.data) {
            log(valueToDelete + " < " + tree.data + "Looking at left subtree");
        } else if (valueToDelete > tree.data) {
            log(valueToDelete + " > " + tree.data + "Looking at right subtree");
        } else {
            log(valueToDelete + " == " + tree.data + "Found node to delete");
        }

        if (valueToDelete == tree.data) {
            if (tree.left == null && tree.right == null) {
                log("Node to delete is a leafDelete it.");
                if (leftchild && tree.parent != null) {
                    tree.parent.left = null;
                } else if (tree.parent != null) {
                    tree.parent.right = null;
                } else {
                    this.treeRoot = null;
                }
            }
            else if (tree.left == null) {
                log("Node to delete has no left child")
                log("Set parent of deleted node to right child of deleted node.");
                if (tree.parent != null) {
                    if (leftchild) {
                        tree.parent.left = tree.right;
                    } else {
                        tree.parent.right = tree.right;
                    }
                    tree.right.parent = tree.parent;
                }
                else {
                    this.treeRoot = tree.right;
                    this.treeRoot.parent = null;
                }
                this.resizeTree();
            }
            else if (tree.right == null) {
                log("Node to delete has no right child");
                log("Set parent of deleted node to left child of deleted node.");
                if (tree.parent != null) {
                    if (leftchild) {
                        tree.parent.left = tree.left;
                    } else {
                        tree.parent.right = tree.left;
                    }
                    tree.left.parent = tree.parent;
                } else {
                    this.treeRoot = tree.left;
                    this.treeRoot.parent = null;
                }
            }
            else { // tree.left != null && tree.right != null
                log("Node to delete has two childern Find largest node in left subtree.");
                var tmp = tree;
                tmp = tree.left;
                while (tmp.right != null) {
                    tmp = tmp.right;
                }
                tree.data = tmp.data;
                log("Copy largest value of left subtree into node to delete");
                log("Remove node whose value we copied.");
                if (tmp.left == null) {
                    if (tmp.parent != tree) {
                        tmp.parent.right = null;
                    } else {
                        tree.left = null;
                    }
                } else {
                    if (tmp.parent != tree) {
                        tmp.parent.right = tmp.left; tmp.left.parent = tmp.parent;
                    } else {
                        tree.left = tmp.left; tmp.left.parent = tree;
                    }
                }
                tmp = tmp.parent;
                if (this.getHeight(tmp) != Math.max(this.getHeight(tmp.left), this.getHeight(tmp.right)) + 1) {
                    tmp.height = Math.max(this.getHeight(tmp.left), this.getHeight(tmp.right)) + 1
                }
                while (tmp != tree) {
                    var tmpPar = tmp.parent;
                    if (this.getHeight(tmp.left) - this.getHeight(tmp.right) > 1) {
                        if (this.getHeight(tmp.left.right) > this.getHeight(tmp.left.left)) {
                            this.doubleRotateRight(tmp);
                        } else {
                            this.singleRotateRight(tmp);
                        }
                    }
                    if (tmpPar.right != null) {
                        if (this.getHeight(tmpPar) != Math.max(this.getHeight(tmpPar.left), this.getHeight(tmpPar.right)) + 1) {
                            tmpPar.height = Math.max(this.getHeight(tmpPar.left), this.getHeight(tmpPar.right)) + 1
                        }
                    }
                    tmp = tmpPar;
                }
                if (this.getHeight(tree.right) - this.getHeight(tree.left) > 1) {
                    if (this.getHeight(tree.right.left) > this.getHeight(tree.right.right)) {  
                        this.doubleRotateLeft(tree);
                    }
                    else {
                        this.singleRotateLeft(tree);
                    }v 
                }
            }
        }
        else if (valueToDelete < tree.data) {
            this.treeDelete(tree.left, valueToDelete);
            if (this.getHeight(tree.right) - this.getHeight(tree.left) > 1) {
                if (this.getHeight(tree.right.left) > this.getHeight(tree.right.right)) {
                    this.doubleRotateLeft(tree);
                } else {
                    this.singleRotateLeft(tree);
                }
            }
            if (this.getHeight(tree) != Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1) {
                tree.height = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1
            }
        } else {
            this.treeDelete(tree.right, valueToDelete);

            if (this.getHeight(tree.left) - this.getHeight(tree.right) > 1) {
                if (this.getHeight(tree.left.right) > this.getHeight(tree.left.left)) {
                    this.doubleRotateRight(tree);
                } else {
                    this.singleRotateRight(tree);
                }
            }
            if (this.getHeight(tree) !=
                Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1) {
                tree.height = Math.max(this.getHeight(tree.left), this.getHeight(tree.right)) + 1
            }
        }
    } else {
        log("Elemet " + valueToDelete + " not found, could not delete");
    }
}
