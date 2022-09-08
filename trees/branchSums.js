/*. Write a function that takes in a Binary Tree and returns a list of its branch
sums ordered from leftmost branch sum to rightmost branch sum. */

/* Solution: 
Using DFS approach to solve this:
Recursively traverse the Binary Tree in a depth-first-search-like fashion, and pass a running sum of the values 
of every previously-visited node to each node that you're traversing
*/

function branchSums(root) {
    // Write your code here.
    let sumList = []
    sumList = calculateBranchSums(root, 0, sumList)
    return sumList
}

function calculateBranchSums(root, sum, sumList) {
    if (!root) {
        return sumList
    }
    sum = sum + root.value
    if (!root.left && !root.right) {
        sumList.push(sum)
        return sumList
    }
    if (root.left) {
        calculateBranchSums(root.left, sum, sumList)
    }
    if (root.right) {
        calculateBranchSums(root.right, sum, sumList)
    }
    return sumList
}

branchSums(tree)

// This is tree we are passing as an input to a function
var tree = {
  "left": {
    "left": {
      "left": {
        "left": null,
        "right": null,
        "value": 8
      },
      "right": {
        "left": null,
        "right": null,
        "value": 9
      },
      "value": 4
    },
    "right": {
      "left": {
        "left": null,
        "right": null,
        "value": 10
      },
      "right": null,
      "value": 5
    },
    "value": 2
  },
  "right": {
    "left": {
      "left": null,
      "right": null,
      "value": 6
    },
    "right": {
      "left": null,
      "right": null,
      "value": 7
    },
    "value": 3
  },
  "value": 1
}
