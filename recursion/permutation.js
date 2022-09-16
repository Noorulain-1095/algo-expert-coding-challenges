/* 
Logic: we remove one i'th element from array, add it in perms array. then pass the mutated array as array argument for recurring function

i = [0] => value 1
array = [1,2,3]
newArr = [2,3]
perm = [1]
getPermutations([2,3],[1],[])

i = [1] => value 2
array = [2,3]
newArr = [3] //remove 2
perm = [1,2] //concat 2
getPermutations([2,3],[1],[])
*/

function getPermutations(array,perm = [],perms = []) {
// base case
  if(!array.length && perm.length !== 0) {
       perms.push(perm)
  }
  else {
      for(let i in array) {
      let newArr = array.filter(el => el !== array[i])
      const newPerm = perm.concat([array[i]]) 
      getPermutations(newArr,newPerm,perms)
    }
  }
  return perms
}

getPermutations([1,2,3])
