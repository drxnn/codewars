// check if two Binary trees are the same, in structure and in values

//Solution

declare type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};
export default function compare(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean {
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (a.value !== b.value) {
    return false;
  }
  return compare(a.left, b.left) && compare(a.right, b.right);
}
