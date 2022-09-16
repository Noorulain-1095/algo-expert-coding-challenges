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

ways for each height can be evaluated by traveresing back until maxheight, and getting ways of previous's height 
for example: (h,k) => (7,3) => sum 3 values back, 4+2+1 = 7
*/

// Complexity: O(k^n) time | O(n) time
function staircaseTraversal(height, maxSteps) {

// base case for 0 and 1
  if(height <= 1){
    return 1;
  }
  else {
    var ways = 0
    // sums each ways until maxsteps value, as h = ....h-s
    for (var i = 1; i < Math.min(maxSteps,height) + 1; i++ )
      {
         ways = ways + staircaseTraversal(height-i,maxSteps)
      }
  }
  return ways
}

// memoize solution: Complexity - O(n*k) time | O(n) space
// when we use memoize solution. we don't have to traverse back whole again. 
function staircaseTraversalMemo(height, maxSteps,memoize = {0:1,1:1}) {
  if(height <= 1){
    return memoize[height]
  }
  else {
    var ways = 0
    for (var i = 1; i < Math.min(maxSteps,height) + 1; i++ )
      {
         ways = ways + (memoize[height-i] || staircaseTraversal(height-i,maxSteps,memoize))
      }
  }
  memoize[height] = ways
  return ways
}

staircaseTraversal(5,3)
