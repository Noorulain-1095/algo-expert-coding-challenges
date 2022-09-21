  /* Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order. */

/* Solution 1
Complexity O(nlogn) time | O(n) space
*/
function sortedSquaredArray(array) {
  let squared = []
  for(let i in array) {
    squared[i] = array[i] * array[i]
  }
  squared.sort((a,b) => a-b)
  return squared;
}

/* Solution 2 - Using pointers
Complexity O(n) time | O(n) space
We are comparing here left and right values to identify if -ve value is greater,
if so, it's square will also be greater and since that won't be a -ve value so we'll place it
in squared array's nth index and similary followed in descending order
*/
function sortedSquaredArray(array) {
 let leftPointer = 0
 let rightPointer  = array.length-1
 let squared = []
  while(squared.length != array.length) {
    if(Math.abs(array[rightPointer]) > Math.abs((array[leftPointer]))){
      let square = array[rightPointer]  * array[rightPointer]
      squared.unshift(square)
      rightPointer--
    }
    else {
      let square = array[leftPointer]  * array[leftPointer]
      squared.unshift(square)
      leftPointer++
    } 
  }
  return squared
}
