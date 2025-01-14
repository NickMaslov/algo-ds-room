# Linked List Overview

A **linked list** is a collection of elements that are not stored in sequential order. Instead, each element, known as a **node**, contains two parts:

1. **Data**: The actual value or information stored in the node.
2. **Reference (or Link)**: A reference to the next node in the sequence.

This structure allows for dynamic memory allocation, meaning that the size of the list can grow or shrink during execution. Additionally, it provides efficient insertion and deletion of elements, especially at the beginning or end of the list.

## Main Operations on Linked Lists

- **Prepend**:  
  Adds a node to the beginning of the list.

- **Append**:  
  Adds a node to the end of the list.

- **Delete**:  
  Removes a specific node from the list.

- **DeleteTail**:  
  Removes the last node from the list.

- **DeleteHead**:  
  Removes the first node from the list.

- **Find**:  
  Searches for and locates a specific node in the list.

## Time Complexities for Linked List Operations

| Operation     | Time Complexity | Description                                                                                                                                                                                         |
| ------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Access**    | O(n)            | Accessing an element requires traversing the list from the head to the desired node, resulting in linear time complexity.                                                                           |
| **Search**    | O(n)            | Searching for a specific node also involves traversing the list, leading to a linear time complexity.                                                                                               |
| **Insertion** | O(1)            | Inserting a node at the beginning (prepending) or end (appending) can be done in constant time, assuming direct access to the nodes.                                                                |
| **Deletion**  | O(1)            | Deleting a node (when directly referenced) can be done in constant time. Deleting the head or tail is O(1), but deleting an arbitrary node requires searching for it, resulting in O(n) complexity. |

> **Note:** Inserting and deleting at the head or tail is O(1), but operations at arbitrary positions require searching the list, which increases the complexity to O(n) for those cases.
