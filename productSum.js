// This is a sample output: [x,[y,z]] => x + 2 * (y + z)

function productSum(arr,multiplier = 1) {
  // Write your code here.
  if (!arr.length) return 0
  let sum = 0
  for(let i of arr) {
    let value = i
    if(Array.isArray(i)){
      value = (multiplier+1) * productSum(i,multiplier+1)
    }
    sum = sum + value
  }
  return sum
}

// productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]) // => 12
