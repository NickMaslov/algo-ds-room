/***Note! .toReversed() used on on methods .toArray() and .toString()
 * only for test purpuses , because linked list and array implmention of stack
 *  has a different flow ***/

export class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Push: Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop: Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items.pop();
  }

  // Peek: Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      //   console.log("Stack is empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty: Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size: Return the number of elements in the stack
  size() {
    return this.items.length;
  }

  toArray() {
    return this.items.toReversed();
  }

  // Print: Display all elements in the stack
  print() {
    console.log(this.items.join(" <- "));
  }

  toString(callback) {
    return callback
      ? this.items
          .toReversed()
          .map((item) => callback(item))
          .join(",")
      : this.items.toReversed().join(",");
  }
}

// Example Usage
// const stack = new Stack();

//   stack.push(10);
//   stack.push(20);
//   stack.push(30);

//   console.log("Top element:", stack.peek()); // Output: Top element: 30
//   stack.print(); // Output: 10 <- 20 <- 30

//   console.log("Popped element:", stack.pop()); // Output: Popped element: 30
//   stack.print(); // Output: 10 <- 20

//   console.log("Is stack empty?", stack.isEmpty()); // Output: Is stack empty? false
//   console.log("Stack size:", stack.size()); // Output: Stack size: 2
