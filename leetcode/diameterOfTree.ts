// Problem:
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

//SOLUTION:

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;
  if (!root) {
    return 0;
  }

  function findDiameter(curr: TreeNode | null): number {
    if (!curr) {
      return 0;
    }

    const leftD = findDiameter(curr.left);
    const rightD = findDiameter(curr.right);

    diameter = Math.max(diameter, leftD + rightD);

    let longest = Math.max(leftD, rightD);

    return longest + 1;
  }

  findDiameter(root);
  return diameter;
}
