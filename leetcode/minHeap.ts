// implement a minHeap

// implementation:
export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    if (this.length === 0) {
      this.data[0] = value;
      this.length++;
      return;
    }

    this.data.push(value);

    this.heapifyUp(this.length);
    this.length++;
  }
  delete(): number | undefined {
    let out: number | undefined = this.data[0];
    if (this.length === 0) {
      return -1;
    }
    this.length--;

    if (this.length === 0) {
      this.data = [];

      return out;
    }

    this.data[0] = this.data[this.length];
    this.data.pop();

    this.heapifyDown(0);

    return out;
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    let curr = this.data[idx];
    const p = this.parent(idx);
    const parentV = this.data[p];
    if (curr < parentV) {
      this.data[idx] = parentV;
      this.data[p] = curr;
      this.heapifyUp(p);
    }
  }
  private heapifyDown(idx: number): void {
    let curr = this.data[idx];

    let leftIdx = this.leftChild(idx);
    let leftValue = this.data[leftIdx];

    let rightIdx = this.rightChild(idx);
    let rightValue = this.data[rightIdx];

    if (rightValue > leftValue && curr > leftValue) {
      this.data[idx] = leftValue;
      this.data[leftIdx] = curr;
      this.heapifyDown(leftIdx);
    } else if (leftValue > rightValue && curr > rightValue) {
      this.data[idx] = rightValue;
      this.data[rightIdx] = curr;
      this.heapifyDown(rightIdx);
    }
  }
  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }
  private leftChild(idx: number): number {
    return Math.floor(idx * 2 + 1);
  }
  private rightChild(idx: number): number {
    return Math.floor(idx * 2 + 2);
  }
}
