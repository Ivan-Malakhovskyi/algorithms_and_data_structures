//!Node - вузол, основна частина зв'яязаного списку, яка містить значення й посилання на наступний вузол
class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;

    this.head = newNode;
  }

  insertAtEnd(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = new Node(data);
    }
  }

  insertAfter(prevNode, data) {
    if (!prevNode) {
      console.log("Попереднього вузла не існує.");
      return;
    }
    const newNode = new Node(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  searchElement(data) {
    let cur = this.head;
    while (cur) {
      if (cur.data === data) {
        return cur;
      }
      cur = cur.next;
    }
    return null;
  }

  deleteNode(key) {
    let cur = this.head;
    if (cur && cur.data === key) {
      this.head = cur.next;
      cur = null;
      return;
    }
    let prev = null;
    while (cur && cur.data !== key) {
      prev = cur;
      cur = cur.next;
    }
    if (cur === null) {
      return;
    }
    prev.next = cur.next;
    cur = null;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const llist = new LinkedList();

llist.insertAtBeginning(5);
llist.insertAtBeginning(6);
llist.insertAtBeginning(7);
llist.insertAtBeginning(8);
