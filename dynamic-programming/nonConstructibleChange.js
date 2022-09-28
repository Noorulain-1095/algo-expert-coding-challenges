/* Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you
  
  ScratchPad:
[5,7,1,1,2,3,22]

set it in ascending order
[1,1,2,3,5,7,22]

iterate and sum,and add +1 in it,
if sum+1 is less than the i'th then we can't create that min change from given coins
1 +1=2 +2=4 +3=7 +5=12 +7=19 +22= 29

sum = sum + i
i <= sum+1

here, 21 we can't create

*/

// O(nlogn) time | O(1) space - where n is the number of coins
function nonConstructibleChange(coins) {
  coins.sort((a,b) => a-b)
  let sum = i = 0
    while(coins[i] <= sum+1){
      sum = sum + coins[i]
      console.log(i +"  "+sum+1)
      i++
    }
  return sum+1
}

nonConstructibleChange([5,7,1,1,2,3,22])
