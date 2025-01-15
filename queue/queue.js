import { LinkedList } from "../linked-list/LinkedList";

export class Queue {
  constructor() {
    this.linkedlist = LinkedList;
  }

  enqueue(value) {
    this.append(value);
  }

  dequeue() {
    const removedHead = this.linkedlist.removedHead();

    return removedHead ? removedHead.value : null;
  }

  peak() {
    if (!this.linkedlist.head) {
      return null;
    }

    return this.linkedlist.head.value;
  }

  isEmpty() {
    return !this.linkedlist.head;
  }

  toString(callback) {
    this.linkedlist.toString(callback);
  }
}
