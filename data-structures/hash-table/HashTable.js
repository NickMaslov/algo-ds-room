import { LinkedList } from "../linked-list/LinkedList";

const defaultBucketNumber = 32;

export class HashTable {
  constructor(bucketsNumber = defaultBucketNumber) {
    this.buckets = Array(bucketsNumber)
      .fill(null)
      .map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;

    for (
      let characterIndex = 0;
      characterIndex < key.length;
      characterIndex += 1
    ) {
      hashCode += key.charCodeAt(characterIndex);
    }

    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);

    const bucketLinkedList = this.buckets[keyHash];

    const node = bucketLinkedList.find({
      callback: (nodeValue) => (nodeValue.key = key),
    });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  get(key) {
    const keyHash = this.hash(key);

    const bucketLinkedList = this.buckets[keyHash];

    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    return node ? node.value.value : undefined;
  }

  delete(key) {
    const keyHash = this.hash(key);

    const bucketLinkedList = this.buckets[keyHash];

    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (node) {
      bucketLinkedList.delete(node.value);

      return true;
    }

    return false;
  }
}
