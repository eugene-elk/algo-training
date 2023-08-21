const tree = {
  value: "parent",
  left: {
    value: "left-1",
    left: {
      value: 1,
      left: {
        value: 2,
      },
      right:{
        value: 3,
      }
    },
    right:{
      value: 4,
    }
  },
  right:  {
    value: "right-1",
    left: {
      value: 5,
    },
    right:{
      value: 6,
    }
  }
}

function DFS_resursive(tree) {
  console.log(tree.value);
  if (tree.left) DFS_resursive(tree.left);
  if (tree.right) DFS_resursive(tree.right);
}

function DFS_stack(tree) {
  const stack = [tree];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    console.log(currentNode.value);

    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }
}

console.log("DFS recursive result:");
DFS_resursive(tree);

console.log("DFS stack result:");
DFS_stack(tree);

