/*

  Given an array of positive integers representing coin denominations and a
  single non-negative integer representing a target amount of
  money, write a function that returns the smallest number of coins needed to
  make change for (to sum up to) that target amount using the given coin
  denominations
  
n = 7
denoms = [1,5,10]

take an array till n index
and see for every denom 


  1
0 0 0 0 0 0 0 0
0 1 2 3 4 5 6 7  => amountArr
  
*/

// Dynamic Programming Solution
// O(nd) time | O(n) space - where n is the target amount and d is the number of coin denominations
function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  denoms = denoms.sort((a,b) => a-b)
  let amountArr = Array(n+1).fill(Infinity)
  amountArr[0] = 0
  // note here that  we included 0 to, and there are 0 coins needed to get 0 n/amount
  for(let coin of denoms){
    for(let amount in amountArr){
      if(coin <= amount){
        // have  to keep min amount as coin can have greater number of coins but we have  to keep smaller as required
        amountArr[amount] = Math.min(amountArr[amount],1 + amountArr[amount - coin])
      }
    }
    console.log(amountArr)
  }
  return isFinite(amountArr[n]) ? amountArr[n] : -1
}

// Recursion Solution: 
//  If there are lot of cases, it will run out of memory
function minNumberOfCoinsForChange(amount,coins) {
  // if remaining  coin is zero return
    console.log('amount '+amount)
  if (amount == 0) return 0
  // if coin is negative return some large value
  if (amount < 0) return Infinity
  
  let ans = Infinity
  for (const coin of coins) {
    if(amount == 0) {break}
    if(amount - coin >= 0) {
    let callback = 1 + minNumberOfCoinsForChange(amount - coin,coins)
    console.log("amount"+amount+" coin"+coin+" callback. "+callback+" ans "+ans)
    ans = Math.min(ans,callback)
    }
  }
  return ans
}

