function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple responses
  if (input == "hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Bye, Talk to you later!";
  } else {
    return "I'm afraid I cannot assist you on this!";
  }
}
