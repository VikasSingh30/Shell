const readline = require("readline");
const { REPLServer } = require("repl");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// rl.question("$ ", (answer) => {
//   console.log(`${answer}: command not found`);
//   rl.close();
// });

function prompt() {
  rl.question("$ ", (command) => {
    if (command.trim() === "exit") { 
      console.log("Exiting REPL...");
    // console.log(`${answer}: command not found`);
      rl.close();
      return;
    }
    try {
      let result = eval(command);
      console.log(result);
    }catch (e) {
      console.log(`${command}: command not found`);
    }
      
    prompt();
  });
}
console.log("REPL started")
prompt();
