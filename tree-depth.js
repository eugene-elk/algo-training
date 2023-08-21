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

function DFS(tree) {
  console.log(tree.value);
  if (tree.left) DFS(tree.left);
  if (tree.right) DFS(tree.right);
}

DFS(tree);