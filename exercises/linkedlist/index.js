// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0
        let node = this.head
        while(node) {
            counter++
            node = node.next
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if(!this.head) {
            return null
        }

        let node = this.head
        while(node) {
            if(!node.next) {
                return node
            }
            node = node.next
        }
        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if(!this.head) {
            return null
        }

        this.head = this.head.next
    }

    removeLast() {
        if(!this.head) {
            return null
        }

        if(!this.head.next) {
            this.head = null
            return 
        }
        
        let previous = this.head
        let node = this.head.next

        while(node.next) {
            previous = node
            node = previous.next
        }
        previous.next = null  
    }

    insertLast(data) {
        let last = this.getLast()
        let newNode = new Node(data)
        last ? last.next = newNode : this.head = newNode
    }

    getAt(index) {
        let counter = 0
        let node = this.head
        while(node) {
            if(counter === index) {
                return node
            }
            counter++
            node = node.next
        }
        return null
    }

    removeAt(index) {
        if(!this.head) {
            return
        }

        if(index === 0) {
            this.head = this.head.next
        } 
        
        let previous = this.getAt(index - 1)
        if(!previous || !previous.next) {
            return 
        }

        previous.next = previous.next.next
    }

    insertAt(data, index) {
        if(!this.head || index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        let previous = this.getAt(index - 1) || this.getLast()
        previous.next = new Node(data, previous.next)
    }

    forEach(fn) {
        let node = this.head
        while(node) {
            fn(node)
            node = node.next
        }
    }

    *[Symbol.iterator]() {
        let node = this.head
        while(node) {
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
