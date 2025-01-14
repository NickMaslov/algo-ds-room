import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Adds a LinkedListNode object to the beginning of our LinkedList
  prepend(value) {
    // Make new node to be a head
    const newNode = new LinkedListNode(value, this.head);
    // Becomes new head
    this.head = newNode;
    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }
    // Return value that was added to our LL
    return this;
  }

  // Adds a node to the end of the list
  append(value) {
    const newNode = new LinkedListNode(value);
    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    const currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;

    return this;
  }

  // Remove a specific node from the list
  delete(value) {
    if (!this.head) return null;
    let deletedNode = null;
    // If the head must be deleted
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    // Traversing our list
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }

      if (this.tail.value === value) {
        deletedNode = this.tail;
        this.tail = currentNode;
      }

      return deletedNode;
    }
  }

  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    // If there are many nodes in linked list,
    // traverse the entire list to get to the next to last
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        this.tail = currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) return null;

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  // Search for and locate a node in the list
  find({ value = undefined, callback = undefined }) {
    if (!this.head) return null;
    let currentNode = this.head;

    while (currentNode) {
      // If callback is specified then try to find node by callback
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      // If value is specified then try to compare by value
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index === 0) {
      this.prepend(value);
    } else {
      let count = 1;
      let currentNode = this.head;
      const newNode = new LinkedListNode(value);
      while (currentNode) {
        if (count === index) break;
        currentNode = currentNode.next;
        count += 1;
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  // Takes all the nodes in the LinkedList and puts them in an array
  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}
