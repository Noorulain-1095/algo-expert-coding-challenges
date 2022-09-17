
/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
*/

// Solution 1 
// Complexity: O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for(let i=0;i<array.length-1;i++) {
    for(let j=i+1;j<array.length;j++) {
      if(array[i] + array[j] === targetSum) {
        console.log([array[i],array[j]])
        return [array[i],array[j]]
      }
    }
  }
}

 // Solution 2 -  if array is sorted
// Complexity: O(nlog(n)) time | O(1) space
function twoNumberSum2(array, targetSum) {
  let leftPointer = 0
  let rightPointer = array.length-1
  for(let i in array) {
    let sum = array[leftPointer] + array[rightPointer]
    if(sum == targetSum) {
      return [array[leftPointer],array[rightPointer]]
    }
    else if(sum < targetSum) {
      leftPointer++
    }
    else {
      rightPointer--
    }
  }
  return []
}

 // Solution 3 

/* Scratcpad

    hashmap Solution
    [-1,2,4,5,3] = 9
    i+y = 9
    9-i = y
    let store = {4}
    if (store[y]) return [i,y]
    else store[i]: true 

*/

//  Complexity: O(nlog(n)) time | O(n) space
function twoNumberSum3(array, targetSum) {
  let traveredStore = {}
  for(let i of array){
    // as i + y = targetSum
    let y = targetSum - i
    if(traveredStore[y]) {
      return [i,y]
    }
    else {
      traveredStore[i] = true
    }
  }
  return []
}

twoNumberSum([-2,1,2,4,5,6,10],10)


