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

function BFS(tree) {
  const queue = [tree];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
}

console.log("BFS result:");
BFS(tree);