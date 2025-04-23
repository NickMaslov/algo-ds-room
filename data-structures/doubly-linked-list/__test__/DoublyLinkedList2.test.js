import DoublyLinkedList from "../DoublyLinkedList";

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it("should insert elements at the head", () => {
    list.insertAtHead(10);
    list.insertAtHead(20);
    list.insertAtHead(30);

    expect(list.head.value).toBe(30);
    expect(list.head.next.value).toBe(20);
    expect(list.tail.value).toBe(10);
    expect(list.size).toBe(3);
  });

  it("should insert elements at the tail", () => {
    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(30);
    expect(list.tail.prev.value).toBe(20);
    expect(list.size).toBe(3);
  });

  it("should delete elements from the head", () => {
    list.insertAtHead(10);
    list.insertAtHead(20);
    list.insertAtHead(30);

    const deletedValue = list.deleteFromHead();
    expect(deletedValue).toBe(30);
    expect(list.head.value).toBe(20);
    expect(list.size).toBe(2);

    list.deleteFromHead();
    list.deleteFromHead();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.size).toBe(0);
  });

  it("should delete elements from the tail", () => {
    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    const deletedValue = list.deleteFromTail();
    expect(deletedValue).toBe(30);
    expect(list.tail.value).toBe(20);
    expect(list.size).toBe(2);

    list.deleteFromTail();
    list.deleteFromTail();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.size).toBe(0);
  });

  it("should search for a value in the list", () => {
    list.insertAtHead(10);
    list.insertAtHead(20);
    list.insertAtHead(30);

    expect(list.search(20)).toBe(true);
    expect(list.search(40)).toBe(false);
  });

  it("should handle edge cases for empty list operations", () => {
    expect(list.deleteFromHead()).toBeNull();
    expect(list.deleteFromTail()).toBeNull();
    expect(list.search(10)).toBe(false);
  });

  it("should maintain correct size after operations", () => {
    expect(list.size).toBe(0);

    list.insertAtHead(10);
    list.insertAtTail(20);
    expect(list.size).toBe(2);

    list.deleteFromHead();
    expect(list.size).toBe(1);

    list.deleteFromTail();
    expect(list.size).toBe(0);
  });
});
