// problem:Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false;
  // find middle of list
  // once you are on the middle of the list, start reversing the second half
  // then take a first half and second half and start iterating
  // if all the vals are equal, return true : false

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (fast?.next || fast?.next?.next) {
    if (slow) slow = slow.next;

    if (fast.next.next === null) {
      fast = fast.next;
    } else {
      fast = fast.next.next;
    }
  }
  let prev: ListNode | null = null;
  let secondHalf: ListNode | null = slow;
  let firstHalf: ListNode | null = head;
  while (secondHalf) {
    let next = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = next;
  }

  while (prev && firstHalf) {
    if (prev.val !== firstHalf.val) {
      return false;
    }
    prev = prev.next;
    firstHalf = firstHalf.next;
  }
  return true;
}
