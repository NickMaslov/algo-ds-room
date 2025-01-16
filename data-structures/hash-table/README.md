# **Hash Table**

A **hash table** is a data structure that maps keys to values using a technique called **hashing**. It allows for efficient data retrieval, insertion, and deletion operations.

---

## **Key Components of a Hash Table**

1. **Hash Function**:

   - A function that maps a key to an index in the hash table.
   - The goal is to distribute keys uniformly across the table to minimize collisions.

2. **Collision Handling**:

   - Collisions occur when two keys produce the same hash index.
   - Common techniques to handle collisions:
     - **Chaining**: Each bucket is a list (or linked list) where multiple values are stored.
     - **Open Addressing**: Searches for the next available slot in the table.

3. **Buckets**:
   - The array or storage units where values are stored.

---

## **Operations in a Hash Table**

| Operation        | Description                                  |
| ---------------- | -------------------------------------------- |
| **Insert (set)** | Add a key-value pair to the hash table.      |
| **Search (get)** | Retrieve the value associated with a key.    |
| **Delete**       | Remove a key-value pair from the hash table. |
| **Update**       | Update the value of an existing key.         |

---

## **Time Complexities of a Hash Table**

| Operation  | Average Case | Worst Case |
| ---------- | ------------ | ---------- |
| **Insert** | \( O(1) \)   | \( O(n) \) |
| **Search** | \( O(1) \)   | \( O(n) \) |
| **Delete** | \( O(1) \)   | \( O(n) \) |

### **Explanation of Complexities**

1. **Average Case**:

   - Hash tables are designed to minimize collisions, making most operations \( O(1) \).
   - The efficiency depends on a good hash function and a low load factor (ratio of elements to buckets).

2. **Worst Case**:
   - All keys may hash to the same bucket, resulting in a single list or chain. In this case, operations take \( O(n) \) time due to linear traversal.

---

## **Advantages of Hash Tables**

1. Fast lookups, insertions, and deletions (on average).
2. Can store large amounts of data efficiently.
3. Dynamic resizing handles growing data.

---

## **Disadvantages of Hash Tables**

1. Inefficient for ordered data traversal.
2. Poor performance if the hash function is not well-designed.
3. Memory overhead due to empty buckets and resizing.

---
