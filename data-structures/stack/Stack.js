import { LinkedList } from "../linked-list/LinkedList";

export class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.prepend(value);
  }

  pop() {
    return this.linkedList.deleteHead()?.value;
  }
  peek() {
    if (this.IsEmpty()) return null;

    return this.linkedList.head.value;
  }

  IsEmpty() {
    return !this.linkedList.head;
  }

  toArray() {
    return this.linkedList.toArray().map((node) => node.value);
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
