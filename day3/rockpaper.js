<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Rock Paper Scissors</title>
</head>
<body>
  <h1>Rock Paper Scissors</h1>
  <h3>Choose any one:</h3>
  <button onclick="getResult('rock')">Rock</button>
  <button onclick="getResult('paper')">Paper</button>
  <button onclick="getResult('scissor')">Scissor</button>
  <h2 id="userChoice"></h2>
  <h2 id="computerChoice"></h2>
  <h2 id="result"></h2>

  <script>
    function getResult(userChoice) {
      const choices = ['rock', 'paper', 'scissor'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      document.getElementById("userChoice").innerText = "You chose: " + userChoice;
      document.getElementById("computerChoice").innerText = "Computer chose: " + computerChoice;

      let result = "";

      if (userChoice === computerChoice) {
        result = "It's a draw!";
      } else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
      ) {
        result = "You win!";
      } else {
        result = "You lose!";
      }

      document.getElementById("result").innerText = result;
    }
  </script>
</body>
</html>
