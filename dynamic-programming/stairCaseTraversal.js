/* You're given two positive integers representing the height of a staircase and
  the maximum number of steps that you can advance up the staircase at a time.
  Write a function that returns the number of ways in which you can climb the
  staircase.
*/

/* ScratchPad - identifying solution: 

[0,1,2,3,4] stairs , 2 max-steps         
 1,1,2,3,5,8  ways to climb

h = (h-1 + h-2) if 2 max steps

[0,1,2,3,4] , 3 max-steps         
 1,1,2,4,7

for s steps:
if h is 0 or 1: return 1
else: h = h-1 + h-2 ... h-s 

ways for each height can be evaluated by iterate back until maxheight, and getting ways of previous's height 
for example: (h,k) => (7,3) => sum 3 values back, 4+2+1 = 7
*/

function staircaseTraversal(height, maxSteps) {
  //setting basecase for 0 and 1 steps
  let ways = [1,1] 
  let startIndex = 2 //as we have defaults set in 0,1 index
  // height+1 as we have 0 value too as 1
  for(let i = startIndex ;i<height+1;i++) {
    // intialize value so not undefined when sums
    ways[i] = 0
    // tracks window for maxstep, sums untill that
    let count = 1
    while(count <= maxSteps){
      // should not get any value before 0 index, happen in case of calculating height:2 value
      if(ways.indexOf(ways[i-count]) == -1){ break }
      ways[i] = ways[i] + ways[i-count]
      count++
    }
  }
  return ways[height]
}

/*
Identified a formula by using window approach:
we take a window of length maxSteps, by tracking right and left pointer,
and keep current value that saves ways for current height(last calculated) and then shifts window ahead by 
subtracting the value removed from window and adding new value, added in window

[0, 1,2 ,3, 4] , 3 max-steps         
{1,1,2},4,7
        ^
1+1+2 = 4
current=4, slide window: -0'th index and add next index:

current[3] - [0] + [3] = [4]  //indexes
        4  - 1 + 4     =  7   //value

*/

function staircaseTraversal2(height, maxSteps) {
  // base case
  let current = 1
  let ways = [1,1]
  for(let i = 2;i<height+1;i++) {
    let leftPointer = i - maxSteps - 1 
    let rightPointer = i - 1
    if(leftPointer >= 0) {
      current = current - ways[leftPointer]
    }
    current = current + ways[rightPointer]
    ways[i] = current

  }
  return ways
}
