const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("$ ", (answer) => {
  if (validCommands.includes(answer.trim())) {
    console.log("Command not found");
  } else { 
    console.log("Invalid command");
  }
  rl.close();
});
