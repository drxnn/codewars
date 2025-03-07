// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Solution:

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast?.next || fast?.next?.next) {
    slow = slow?.next!;
    if (fast.next.next == null) {
      fast = fast.next!;
    } else {
      fast = fast.next.next!;
    }
  }
  return slow;
}
