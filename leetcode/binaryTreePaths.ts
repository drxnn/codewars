// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no childre

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

// Solution

function walk(curr: TreeNode | null, path: string[], output): void {
  // base case
  if (!curr) {
    return;
  }
  //recurse
  let temp;
  if (curr?.left || curr?.right) {
    temp = curr?.val.toString() + "->";
  } else {
    temp = curr?.val.toString();
  }

  path.push(temp);

  console.log(path);

  walk(curr?.left, path, output);
  walk(curr?.right, path, output);

  if (!curr?.right && !curr?.left) {
    output.push([...path].join(""));
  }

  path.pop();
}

function binaryTreePaths(root: TreeNode | null): string[] {
  let output = [];
  walk(root, [], output);

  return output;
}
