class _Node {
  constructor(data) {
    this.data = data;
    this.next = null; //next is towards the beginning of the queue when looking at it vertically (down)
    this.prev = null; //prev is towards the back of the queue (up)
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  
  enqueue(item) {
    const node = new _Node(item);
    
    if (this.first === null) {
      this.first = node
    }

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;
  }
  
  dequeue() {
    if (this.first === null) {
      console.log('your queue is empty');
      return
    }
    let first = this.first;
    this.first = first.prev;
    
    
    if (first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first.next = null;
  
    }
    
    return first.data
  }
}

function display(queue) {
  const displayArr = []
  if (queue.first === null) {
    return null
  }
    let current = queue.last;
    while (current !== null) {
      displayArr.push(current.data);
      current = current.next
  }
  return displayArr;
}

function peek(queue) {
  if (queue.first === null) {
    return null
  }
  return queue.first.data
}

function isEmpty(queue) {
  return peek(queue) === null;
}

module.exports = Queue;
