/*
  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Bubble Sort algorithm to sort the array.
*/

/*
Explanation:
Bubble sort takes the greatest number and bubble it to the top.
We check on two adjacent elements and if i'th is greater than we'll swap.
In every inner iteration 1 pass is complete and greatest element is set.

Comlexity: 
O(n^2)
*/

function bubbleSort(array) {
//   we'll use counter to optimise problem where inner loop would iterate till the last set elements
  let counter = 0
  for(let n in array) {
    for(let i=0;i<array.length-1-counter;i++) {
      // check if i'th is greater
      if(array[i] > array[i+1]) {
        // swap
        let temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
      }
    }
    counter++
  }
  return array
}
