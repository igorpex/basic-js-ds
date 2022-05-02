const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.tail) {
      this.tail = this.head
      let newNode = new ListNode(value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      let newNode = new ListNode(value);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    let result = this.head.value;
    this.head = this.head.next;
    return result
  }
}

module.exports = {
  Queue
};
