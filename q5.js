const LinkedList = require('./linked-lists');

function middleList(list) {
  let halfNode = list.head;
  let fullNode = list.head;
  while (fullNode !== null && fullNode.next !== null) {
    fullNode = fullNode.next.next;
    if(fullNode) {
      halfNode = halfNode.next;
    }
  }
  return halfNode;
}

function mSort(arr) {
  if (!arr.head || !arr.head.next) {
    return arr;
  }
  const middleNode = middleList(arr);
  const rightNode = middleNode.next;
  middleNode.next = null;
  let right = new LinkedList();
  right.head = rightNode;
  let left = mSort(arr);
  right = mSort(right);
  arr = merge(left, right, new LinkedList());
  return arr;
}

function merge(left, right, res) {
  left = left.head;
  right = right.head;
  while (left || right) {
    if(left && right) {
      if(left.value > right.value) {
        res.insertLast(right.value);
        right = right.next;
      }
      else {
        res.insertLast(left.value);
        left = left.next;
      }
    }
    else if (!left) {
      res.insertLast(right.value);
      right = right.next;
    }
    else if (!right) {
      res.insertLast(left.value);
      left = left.next;
    }
  }
  return res;
}

function display(list) {
  // Start at the head
  let currNode = list.head;
  let result = '';
  // console.log('currNode before: ', currNode.value);
  while (currNode !== null) {
    // console.log('currNode in while: ', currNode.value);
    result +=
      currNode.next === null ? `${currNode.value}` : `${currNode.value} -> `;
    currNode = currNode.next;
  }
  return result;
}

function test() {
  let t = new LinkedList();
  t.insertLast(1);
  t.insertLast(5);
  t.insertLast(10);
  t.insertLast(9);
  t.insertLast(7);
  t.insertLast(2);
  t.insertLast(3);
  t.insertLast(8);
  t.insertLast(4);
  t.insertLast(6);
  console.log(display(t));
  console.log(display(mSort(t)));
}

test();