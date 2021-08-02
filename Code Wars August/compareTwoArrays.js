// Compare 2 arrays and score (1 point if they match, 0.5 if either have ?, 0 if they disagree)
function correctness(bobsDecisions, expertDecisions) {
  var score = 0;
  // iterate through array (both are same length and can use same [i] position)
  for (i = 0; i < bobsDecisions.length; i++) {
    // matching condition
    if (bobsDecisions[i] == expertDecisions[i]) {
      score++;
    } else if (bobsDecisions[i] != expertDecisions[i]) {
      // additional logic for ? conditions
      if (expertDecisions[i] == '?' || bobsDecisions[i] == '?') {
        score += 0.5;
      } else {
        continue;
      }
    }
  }  //end of loop
  return score;
}

//prompt:
/*
Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.

Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the experts choices to generate a correctness score.

Scoring Rules

    When they agree, he gets 1 point.
    When they disagree but one has said '?', he gets 0.5 points.
    When they disagree completely, he gets 0 points.

*/