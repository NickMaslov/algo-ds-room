import DoublyLinkedList from "../DoublyLinkedList";

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  test("should insert at the head", () => {
    list.insertAtHead(10);
    list.insertAtHead(20);
    expect(list.head.value).toBe(20);
    expect(list.tail.value).toBe(10);
    expect(list.size).toBe(2);
  });

  test("should insert at the tail", () => {
    list.insertAtTail(10);
    list.insertAtTail(20);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(20);
    expect(list.size).toBe(2);
  });

  test("should delete from the head", () => {
    list.insertAtHead(10);
    list.insertAtHead(20);
    const deletedValue = list.deleteFromHead();
    expect(deletedValue).toBe(20);
    expect(list.head.value).toBe(10);
    expect(list.size).toBe(1);
  });

  test("should delete from the tail", () => {
    list.insertAtTail(10);
    list.insertAtTail(20);
    const deletedValue = list.deleteFromTail();
    expect(deletedValue).toBe(20);
    expect(list.tail.value).toBe(10);
    expect(list.size).toBe(1);
  });

  test("should search for a value", () => {
    list.insertAtHead(10);
    list.insertAtHead(20);
    expect(list.search(10)).toBe(true);
    expect(list.search(30)).toBe(false);
  });

  test("should handle deleting from an empty list", () => {
    expect(list.deleteFromHead()).toBeNull();
    expect(list.deleteFromTail()).toBeNull();
  });

  test("should handle inserting and deleting a single element", () => {
    list.insertAtHead(10);
    expect(list.deleteFromHead()).toBe(10);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.size).toBe(0);
  });

  test("should print the list correctly", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    list.insertAtHead(10);
    list.insertAtHead(20);
    list.printList();
    expect(consoleSpy).toHaveBeenCalledWith("20 <-> 10");
    consoleSpy.mockRestore();
  });
});
