class Node {
    constructor(ele) {
        this.ele = ele
        this.next = null
    }
}

class NodeList {
    constructor(data) {
        this.length = 0
        this.head = null
    }

    // 在链表末尾加上一个node
    append(ele) {
        let newNode = new Node(ele)
        let currentNode
        if (this.head === null) {
            this.head = newNode
        } else {
            currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.length++
    }

    insert(position, ele) {
        if (position >= 0 && position <= this.length) {
            let newNode = new Node(ele)
            let currentNode = this.head
            let pre
            let index = 0
            if (position === 0) {
                newNode.next = currentNode
                this.head = newNode
            } else {
                while (index < position) {
                    pre = currentNode
                    currentNode = currentNode.next
                    index++
                }
                newNode.next = currentNode
                pre.next = newNode
            }
            this.length++
        } else {
            throw new Error("位置错误")
        }

    }

    removeAt(position) {
        if (position >= 0 && position < this.length) {
            let currentNode = this.head,
                pre,
                index = 0
            if (position === 0) {
                this.head = currentNode.next
            } else {
                while (index < position) {
                    pre = currentNode
                    currentNode = currentNode.next
                    index++
                }
                pre.next = currentNode.next
            }
            this.length--
        } else {
            throw new Error("error")
        }
    }

    find(ele) {
        let currentNode = this.head
        let index = 0
        while (currentNode) {
            if (JSON.stringify(currentNode.ele) === JSON.stringify(ele)) {
                return index
            } else {
                index++
                currentNode = currentNode.next
            }
        }
        return -1
    }

    isEmpty() {
        return this.length === 0
    }

    getHead() {
        return this.head
    }

    reverse() {

    }

    toString() {
        let current = this.head,
            str = ''
        while(current) {
            str += JSON.stringify(current.ele) + ' => '
            current = current.next
        }
        return str + "null"
    }

    printListFromTailToHead(head)
    {
        // write code here
        let arr = []
        while(head.next) {
            arr.push(head.val)
            head = head.next
        }
        return arr.reverse()
    }
}


let A = { name: 'A', age: 10 };

let B = { name: 'B', age: 20 };

let C = { name: 'C', age: 30 };

let D = { name: 'D', age: 40 };

let E = { name: 'E', age: 50 };

let nList = new NodeList();

nList.append(A);
nList.append(C);
nList.append(B);
nList.append(D);
nList.append(E);

// console.log(JSON.stringify(nList, null, 2));
// console.log(' origin: ' + nList);
// nList.removeAt(2);
// nList.insert(2, A)
// console.log(' now: ' + nList);