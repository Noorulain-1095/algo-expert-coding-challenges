/* Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one. 
  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array.
  */

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let response = true
  let arrayIndex = 0
  for (let item of sequence) {
    let itemFound = false
    while(arrayIndex != array.length) {
      if(item === array[arrayIndex]){
       itemFound = true
        arrayIndex = arrayIndex + 1
        break
      }
      arrayIndex = arrayIndex + 1
    }
    if(itemFound) {
      response = false
      break
    }
  }
  return response
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]) // => true
isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, 10, -1]) // => false
