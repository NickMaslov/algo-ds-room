import { LinkedList } from "../linked-list/LinkedList";

export class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.prepend(value);
  }

  pop() {
    return this.linkedList.deleteHead()?.value || null;
  }
  peek() {
    if (this.isEmpty()) return null;

    return this.linkedList.head.value;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  toArray() {
    return this.linkedList.toArray();
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
