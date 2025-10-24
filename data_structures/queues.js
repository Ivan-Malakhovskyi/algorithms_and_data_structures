class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail += 1;
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head += 1;
    return item;
  }

  peek() {
    return this.elements[this.head];
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}

const que = new Queue();

que.enqueue("A");
que.enqueue("B");
que.enqueue("C");
console.log(que.dequeue());
console.log(que.elements);
que.enqueue("C");

console.log(que.head);
console.log(que.peek());
console.log(que.length);
