export class Queue {
  constructor() {
    this.items = []; // Array to store queue elements
  }

  // Enqueue: Add an element to the rear of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue: Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items.shift();
  }

  // Peek: Return the front element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[0];
  }

  // isEmpty: Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size: Return the size of the queue
  size() {
    return this.items.length;
  }

  // Print: Display the elements in the queue
  print() {
    console.log(this.items.join(" <- "));
  }

  toString(callback) {
    return callback
      ? this.items.map((item) => callback(item)).join(",")
      : this.items.join(",");
  }
}

// wf
