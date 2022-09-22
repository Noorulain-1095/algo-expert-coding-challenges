/*
  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.
*/

/* 
  Solution: 1 - Recursive Approach
  Complexity: O(logn) average time O(n) worst time. Here we are using memory as depth of tree
*/
function findClosestValueInBst(tree, target,closest) {
  // Write your code here.
  if(!tree) {
    return closest
  }
  closest = UpdateClosest(tree,target,closest)
  if(tree.value && !tree.left && !tree.right){
    return closest
  }
  
    if(target < tree.value) {
      closest = findClosestValueInBst(tree.left,target,closest)
    }
    else{
      closest = findClosestValueInBst(tree.right,target,closest)
    }
  return closest
}

function UpdateClosest(tree,target,closest) {
  let diff = Math.abs(tree.value - target)
  if(!closest || Math.abs(closest - target) > diff) {
    closest = tree.value
  }
  return closest
}

/* 
  Solution: 2 - Iterative Approach
  Complexity: O(logn) average time O(n) worst time. O(1) space
  Iterative solution is better in memory storage point of view here
*/

function findClosestValueInBst2(tree, target) {
  // Iterative solution is better in memory storage point of view here
  let node = tree
  let closest = node.value
  
  while(node){
    if(Math.abs(closest - target) > Math.abs(node.value - target)) {
      closest = node.value
    }
    if (target > node.value){
      node = node.right
    }
    else {
      node = node.left
    }
  }
  return closest
}


// Invoke:
findClosestValueInBst(treeInput,12)


var treeInput = {
  "left": {
    "left": {
      "left": {
        "left": null,
        "right": null,
        "value": 1
      },
      "right": null,
      "value": 2
    },
    "right": {
      "left": null,
      "right": null,
      "value": 5
    },
    "value": 5
  },
  "right": {
    "left": {
      "left": null,
      "right": {
        "left": null,
        "right": null,
        "value": 14
      },
      "value": 13
    },
    "right": {
      "left": null,
      "right": null,
      "value": 22
    },
    "value": 15
  },
  "value": 10
}

