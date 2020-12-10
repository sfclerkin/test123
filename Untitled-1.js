const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Invalid Selection");
  }
};

const cpuChoice = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, cpuChoice) => {
  if (userChoice === cpuChoice) {
    return "The game is tied";
  }

  if (userChoice === "rock") {
    if (cpuChoice === "paper") {
      return `CPU WON, ${cpuChoice} beats ${userChoice}`;
    }
    return `YOU WON, ${userChoice} beats ${cpuChoice}`;
  }
  if (userChoice === "paper") {
    if (cpuChoice === "scissors") {
      return `CPU WON, ${cpuChoice} beats ${userChoice}`;
    }
    return `YOU WON, ${userChoice} beats ${cpuChoice}`;
  }
  if (userChoice === "scissors") {
    if (cpuChoice === "rock") {
      return `CPU WON, ${cpuChoice} beats ${userChoice}`;
    }
    return `YOU WON, ${userChoice} beats ${cpuChoice}`;
  }
};

const playGame = () => {
  console.log(determineWinner(userChoice, cpuChoice));
};

playGame();
