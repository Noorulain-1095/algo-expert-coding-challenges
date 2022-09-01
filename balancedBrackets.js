/*
Write a function that takes in a string made up of brackets ('[({})]()') and other optional characters. The function should return a
boolean representing whether the string is balanced with regards to brackets.

A string is said to be balanced if it has as many opening brackets of a
certain type as it has closing brackets of that type and if no bracket is
unmatched. Note that an opening bracket can't match a corresponding closing
bracket that comes before it, and similarly, a closing bracket can't match a
corresponding opening bracket that comes after it. Also, brackets can't
overlap each other as in '([})'
*/

function balancedBrackets(stringInput) {
  // Write your code here.
  let inputArray = stringInput.split('')
  let stack = []
  for(let character of stringInput){
    if(character === ')' || character === ']' || character === '}') {
          if(stack.length && stack[stack.length-1] === enclosingBracket(character)) {
             stack.pop()
          }
          else {
              break
          }
    }
    else if(character === '(' || character === '[' || character === '{') {
      stack.push(character)
    }
    inputArray.shift()
  }
  return stack.length || inputArray.length ? false : true
}

function enclosingBracket(param) {
  switch(param) {
    case ')': {
      return '('
    }
    case ']': {
      return '['
    }
    case '}': {
      return '{'
    }
  }
}

// balancedBrackets('[({}))]')  // => false
// balancedBrackets(')[]}') // => false
// balancedBrackets('[({})]()') // => true
// balancedBrackets('(()agwg())((()agwga()())gawgwgag)') // => true
// balancedBrackets('())[]{}{')  // => false
// balancedBrackets('([])(){}(())()()') // => true
// balancedBrackets('(a)') => true
