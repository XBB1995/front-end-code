class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// insert(key):向树中插入一个新的键。
// search(key):在树中查找一个键，如果节点存在，则返回true;如果不存在，则返回false。
// inOrderTraverse:通过中序遍历方式遍历所有节点。
// preOrderTraverse:通过先序遍历方式遍历所有节点。
// postOrderTraverse:通过后序遍历方式遍历所有节点。
// min:返回树中最小的值/键。
// max:返回树中最大的值/键。
// remove(key):从树中移除某个键。
class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    static insertNode(node, newNode) {
        if (node.key > newNode.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    static insertNode(node, newNode) {
        if(!node){
            return newNode
        }
        if (node.key > newNode.key) {
            this.insertNode(node.left, newNode)
        } else if (node.key < newNode.key) {
            this.insertNode(node.right, newNode)
        }
    }

    static searchNode(node, key) {
        if (node === null) {
            return false;
        }

        if (node.key === key) {
            return true;
        } else if (node.key > key) {
            BinarySearchTree.searchNode(node.left, key);
        } else if (node.key < key) {
            BinarySearchTree.searchNode(node.right, key);
        }
    }

    static searchNode2(node, key) {
        if (node === null) return false
        if (node.key === key) return node
        else if (node.key > key) {
            BinarySearchTree.searchNode2(node.left, key)
        } else {
            BinarySearchTree.searchNode2(node.right, key)
        }
    }

    static inOrderTraverseNode(node, cb) {
        if (node === null) {
            return;
        }
        BinarySearchTree.inOrderTraverseNode(node.left, cb);
        cb(node.key);
        BinarySearchTree.inOrderTraverseNode(node.right, cb);
    }

    static preOrderTraverseNode(node, cb) {
        if (node === null) {
            return;
        }
        cb(node.key);
        console.log(this);
        BinarySearchTree.preOrderTraverseNode(node.left, cb);
        BinarySearchTree.preOrderTraverseNode(node.right, cb);
    }

    static pre_feidigui(node, cb) {
        if (node === null) return false
        let stack = [node]
        while (stack.length > 0) {
            let item = stack.shift()
            cb(item)
            if (item.right) {
                stack.unshift(item.right)
            }
            if (item.left) {
                stack.unshift(item.left)
            }
        }
    }

    static in_feidigui(node, cb) {
        if (node === null) return false
        let stack = [node]
        while (stack.length > 0) {
            let item = stack[-1]
            if (!item || (item.left && item.left.isOk)) {
                stack.pop()
                item.isOk = true
                cb(item)
                item.right && stack.push(item.right)
            } else if (item.left && !item.left.isOk) {
                stack.push(item.left)
            }
        }
    }

    static postOrderTraverseNode(node, cb) {
        if (node === null) {
            return;
        }
        BinarySearchTree.postOrderTraverseNode(node.left, cb);
        BinarySearchTree.postOrderTraverseNode(node.right, cb);
        cb(node.key);
    }

    static levelOrderTraverseNode2(node, cb) {
        if (node === null) return 0
        let res = [node],
            len
        while (true) {
            len = res.length
            if (!len) break
            while (len > 0) {
                let n = res.shift()
                len--
                cb(n)
                if (n.left) res.push(n.left)
                if (n.right) res.push(n.right)
            }
            len = len > res.length ? len : res.length
        }
        return len
    }

    // static levelOrder(node, cb) {
    //     let q = [node],
    //         res = [],
    //         maxl = 0
    //     while (true) {
    //         let len = q.length
    //         if (!len) break
    //         while (len > 0) {
    //             let n = q.shift()
    //             res.push(n)
    //             len--
    //             if (n.left) q.push(n.left)
    //             if (n.right) q.push(n.right)
    //         }
    //         maxl = maxl > q.length ? maxl : q.length
    //     }
    // }

    // static levelOrderTraverseNode(node, cb) {
    //     if (node === null) {
    //         return null;
    //     }
    //
    //     const list = [node];
    //
    //     while (list.length > 0) {
    //         node = list.shift();
    //         cb(node.key);
    //         if (node.left) {
    //             list.push(node.left);
    //         }
    //         if (node.right) {
    //             list.push(node.right);
    //         }
    //     }
    // }
    //
    // static separateByLevelFn(node, cb, separator = '---*---') {
    //     const list = [];
    //     const END_FLAG = 'END_FLAG';
    //
    //     list.push(node);
    //     list.push(END_FLAG);
    //
    //     while (list.length > 0) {
    //         node = list.shift();
    //
    //         // 遇到结束信号，表示已经遍历完一层；若队列中还有元素，说明它们是刚刚遍历完的这一层的所有子元素。
    //         if (node === END_FLAG && list.length > 0) {
    //             list.push(END_FLAG);
    //             cb(separator);
    //         } else {
    //             cb(node.key);
    //
    //             if (node.left) {
    //                 list.push(node.left)
    //             }
    //
    //             if (node.right) {
    //                 list.push(node.right);
    //             }
    //         }
    //     }
    // }

    static removeNode(node, key) {
        if (node === null) {
            return null;
        }

        if (node.key === key) {

            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } else if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            } else if (node.left && node.right) {
                let rightMinNode = node.right;

                while (rightMinNode.left !== null) {
                    rightMinNode = rightMinNode.left;
                }

                node.key = rightMinNode.key;
                node.right = BinarySearchTree.removeNode(node.right, rightMinNode.key);
                return node;
            }

        } else if (node.key > key) {
            node.left = BinarySearchTree.removeNode(node.left, key);
            return node;
        } else if (node.key < key) {
            node.right = BinarySearchTree.removeNode(node.right, key);
            return node;
        }
    }

    static printNode(val) {
        console.log(val);
    }

    insert(key) {
        const newNode = new Node(key);

        if (this.root === null) {
            this.root = newNode;
        } else {
            BinarySearchTree.insertNode(this.root, newNode);
        }
    }

    search(key) {
        return BinarySearchTree.searchNode(key);
    }

    // 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访
    // 问所有节点。中序遍历的一种应用就是对树进行排序操作。
    inOrderTraverse(cb = BinarySearchTree.printNode) {
        BinarySearchTree.inOrderTraverseNode(this.root, cb);
    }

    // 先序遍历是以优先于后代节点的顺序访问每个节点的。先序遍历的一种应用是打印一个结构化的文档。
    preOrderTraverse(cb = BinarySearchTree.printNode) {
        BinarySearchTree.preOrderTraverseNode(this.root, cb);
    }

    // 后序遍历则是先访问节点的后代节点，再访问节点本身。后序遍历的一种应用是计算一个目
    // 录和它的子目录中所有文件所占空间的大小。
    postOrderTraverse(cb = BinarySearchTree.printNode) {
        BinarySearchTree.postOrderTraverseNode(this.root, cb);
    }

    // Breadth-First-Search
    // 可以用来解决寻路径的问题。
    levelOrderTraverse(cb = BinarySearchTree.printNode) {
        BinarySearchTree.levelOrderTraverseNode(this.root, cb);
    }

    // Breadth-First-Search
    // 区分层次
    separateByLevel(cb = BinarySearchTree.printNode) {
        BinarySearchTree.separateByLevelFn(this.root, cb);
    }

    min(node) {
        node = node || this.root;

        if (node === null) {
            return null;
        }

        while (node.left !== null) {
            node = node.left;
        }

        return node.key;
    }

    max() {
        let node = this.root;

        if (node === null) {
            return null;
        }

        while (node.right !== null) {
            node = node.right;
        }

        return node.key();
    }

    remove(key) {
        this.root = BinarySearchTree.removeNode(this.root, key);
    }
}


/* ========== test case ========== */


const tree = new BinarySearchTree();

/**
 *
 *               11
 *              /  \
 *             /    \
 *            /      \
 *           /        \
 *          /          \
 *         /            \
 *        7             15
 *       / \           /   \
 *      /   \         /     \
 *     5     9       13     20
 *    / \   / \     /  \   /  \
 *   3   6 8  10   12  14 18  25
 *
 */
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
console.log(tree.min());
tree.inOrderTraverse();
//
// tree.levelOrderTraverse();
//
// tree.separateByLevel();
//
// tree.remove(7)
// tree.inOrderTraverse();
//
// tree.preOrderTraverse();
//
// tree.postOrderTraverse();