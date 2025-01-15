# Queue in Algorithms

A **queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle, meaning the first element added to the queue is the first one to be removed. It is widely used in computer science for various applications like task scheduling, managing requests, or handling data in sequential order.

## Key Characteristics

1. **Order**: Elements are added at one end (the **rear**) and removed from the other end (the **front**).
2. **FIFO**: The element that has been in the queue the longest is the first to be removed.
3. **Dynamic Size**: Queues can dynamically grow or shrink depending on the implementation (e.g., linked list vs. array).

---

## Basic Operations

1. **Enqueue (Insert)**: Adds an element to the rear of the queue.

   - Example: Adding a new task to a task queue.

2. **Dequeue (Remove)**: Removes the element from the front of the queue.

   - Example: Processing the oldest request in a service.

3. **Peek/Front**: Returns the element at the front without removing it.

4. **IsEmpty**: Checks whether the queue is empty.

5. **IsFull**: Checks whether the queue is full (in implementations with a fixed size).

---

## Types of Queues

1. **Simple Queue**

   - Basic FIFO queue.

2. **Circular Queue**

   - The last position is connected back to the first, forming a circle.
   - Used to optimize space in fixed-size implementations.

3. **Priority Queue**

   - Each element is associated with a priority, and the highest-priority element is dequeued first.

4. **Deque (Double-Ended Queue)**
   - Allows insertion and deletion from both ends.
   - Can act as both a stack and a queue.

---

## Applications of Queues

- **Scheduling**: Task scheduling in operating systems. Messaging applications.
- **Data Handling**: Managing requests in a server (e.g., HTTP request handling).
- **Graph Algorithms**: Breadth-First Search (BFS) in graph traversal.
- **Buffering**: In printers, keyboards, or streaming.
- **Simulation**: Modeling real-world queues like ticket counters.

---

## Common Implementations

1. **Using Arrays**

   - Fixed size or dynamic resizing.

2. **Using Linked Lists**

   - Dynamically growing queue with no predefined size.

3. **Using Built-in Libraries**
   - Python: `queue.Queue`, `collections.deque`.
   - Java: `Queue` interface, `LinkedList`, `PriorityQueue`.
   - C++: `std::queue`, `std::deque`.

## **Time Complexity**

| Operation   | Array Implementation                | Linked List Implementation |
| ----------- | ----------------------------------- | -------------------------- |
| **Access**  | O(n)                                | O(n)                       |
| **Search**  | O(n)                                | O(n)                       |
| **Enqueue** | O(1) (amortized for dynamic arrays) | O(1)                       |
| **Dequeue** | O(n) (requires shifting elements)   | O(1)                       |
| **Peek**    | O(1)                                | O(1)                       |
| **IsEmpty** | O(1)                                | O(1)                       |
| **Size**    | O(1)                                | O(1)                       |

- A **linked list-based queue** is ideal for consistent O(1) performance in enqueue and dequeue operations.
- An **array-based queue** is better when memory efficiency is critical, and the queue size is small or predictable.
