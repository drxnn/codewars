class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function walk(currLeft: TreeNode | null, currRight: TreeNode | null): boolean {
  if (!currLeft && !currRight) {
    return true;
  }

  if (currLeft && currRight && currLeft.left?.val !== currRight.left?.val) {
    return false;
  } else if (
    currLeft &&
    currRight &&
    currLeft.right?.val !== currRight.right?.val
  ) {
    return false;
  } else {
    return (
      walk(currLeft!.left, currRight!.left) &&
      walk(currLeft!.right, currRight!.right)
    );
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;

  if (!p || !q || p.val !== q.val) return false;

  return walk(p, q);
}
