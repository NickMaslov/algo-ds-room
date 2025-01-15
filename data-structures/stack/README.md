# Stack Data Structure

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means the last element added to the stack is the first one to be removed. Stacks are used in various applications, such as function calls, undo operations, and expression evaluation.

---

## **Key Characteristics**

1. **Order**: Elements are added and removed from the same end, called the **top** of the stack.
2. **LIFO Principle**: The last element added is the first to be removed.
3. **Dynamic Size**: Can grow or shrink dynamically based on the implementation (e.g., array or linked list).

---

## **Basic Operations**

1. **Push (Insert)**: Adds an element to the top of the stack.

   - Example: Pushing a plate onto a stack of plates.

2. **Pop (Remove)**: Removes and returns the top element of the stack.

   - Example: Taking the top plate from the stack.

3. **Peek/Top**: Returns the top element without removing it.

4. **IsEmpty**: Checks whether the stack is empty.

5. **Size**: Returns the number of elements in the stack.

---

## **Types of Stacks**

1. **Simple Stack**

   - Basic LIFO stack.

2. **Limited Capacity Stack**
   - A stack with a predefined maximum size.

---

## **Applications of Stacks**

- **Expression Evaluation**: Evaluating postfix (Reverse Polish Notation) or prefix expressions.
- **Function Calls**: Call stack in programming languages for managing function calls. Recursing, Backtracking.
- **Undo Mechanism**: Maintaining history in text editors.
- **Parenthesis Matching**: Checking balanced parentheses in expressions.
- **Backtracking**: Navigating through options, such as in maze solving.
- **Web Navigation**: Browser history (back and forward functionality).

---

## **Common Implementations**

1. **Using Arrays**

   - Fixed size or dynamic resizing.
   - Example: `push` and `pop` operations at the end of the array.

2. **Using Linked Lists**

   - Dynamic size with efficient `push` and `pop` operations.

3. **Using Built-in Libraries**
   - **Python**: `list` or `collections.deque`.
   - **Java**: `Stack` class or `Deque` interface.
   - **C++**: `std::stack`.

---

## **Advantages**

- Simple to implement.
- Efficient for LIFO operations.

---

## **Disadvantages**

- Limited in scope to LIFO problems.
- Array-based stacks may require resizing.

---
