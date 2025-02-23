class Node {
  constructor(value) {
    this.value = value;
    (this.next = null), (this.previous = null);
  }
}
class DLL {
  constructor() {
    (this.head = null), (this.tail = null);
  }
  insertAtStart(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  }
  insertAtEnd(value) {
    let newNode = new Node(value);
    if (this.tail == null) {
      this.head = this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  remove(value) {
    if (this.head.value == value) {
      this.head = this.head.next;
      return console.log(`Removed ${value}`);
    }
    if (this.tail.value == value) {
      this.tail = this.head.previous;
      return console.log(`Removed ${value}`);
    }
  }
  print() {
    let curr = this.head;
    let result = [];
    while (curr !== null) {
      result.push(curr.value);
      curr = curr.next;
    }
    return console.log(result.join(" <-> ") + " <-> NULL");
  }
}
let doublyList = new DLL();
doublyList.insertAtStart(1);
doublyList.insertAtStart(2);
doublyList.insertAtStart(3);
doublyList.insertAtEnd(5);
doublyList.print();
doublyList.remove(5);
doublyList.print();
