

/*
Complexity: O(n) time | O(n) space
*/
function tournamentWinner(competitions, results) {
  let teamScore = {}
  let point = 3
  let winner = ""
  let winnerPoint = 0
  for(let round in competitions) {
    let key = competitions[round][+!results[round]]
    teamScore[key] = (teamScore[key] || 0) + point
    if(winnerPoint < teamScore[key]) {
      winnerPoint = teamScore[key]
      winner = key
    }
  }
    return winner
}

tournamentWinner(competitionsInput, resultsInput)

var competitionsInput = [["HTML","C#"],["c#","Python"],["Python","HTML"]]
var resultsInput = [0,0,1]
