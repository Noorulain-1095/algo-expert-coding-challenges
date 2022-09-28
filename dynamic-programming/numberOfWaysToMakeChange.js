/*

  Given an array of distinct positive integers representing coin denominations and a
  single non-negative integer representing a target amount of
  money, write a function that returns the number of ways to make change for
  that target amount using the given coin denominations.
  Note that an unlimited amount of coins is at your disposal.
  
  ScratchPad:
  n=5 denoms = [1,5]
          2 => 5 denom ([5-5]+[5])
  1 1 1 1 1 => 1 denom
1 0 0 0 0 0 => default values
0 1 2 3 4 5 => array index

2 ways
*/

// O(nd) time | O(n) space - where n is the target amount and d is the number of coin denominations
function numberOfWaysToMakeChange(n, denoms) {
  // we need 0'th too
  let amountArr = Array(n+1).fill(0)
  amountArr[0] = 1
  for(let coin of denoms) {
    for(let amount in amountArr) {
      if (coin <= amount) {
        amountArr[amount] += amountArr[amount-coin]
        amount++
      }
      console.log(amountArr)
    }
  }
  return amountArr[n]
}
