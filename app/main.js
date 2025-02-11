const readline = require("readline");
const { REPLServer } = require("repl");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // prompt: "$ "  // prompt for repl
});

// rl.prompt();    // initial prompt for repl

// rl.question("$ ", (answer) => {
//   console.log(`${answer}: command not found`);
//   rl.close();
// });
//REPL implemented
// rl.on("line", (input) => {
// if (input.trim() === "exit") {
//   rl.close();
//   return;
// }
// try{
//   let result = eval(input);
//   console.log(result);
// }catch(e){
//   console.log(`${input}: command not found`);
// }
 
//   rl.prompt();
// });

//EXIT 0 implemented
function prompt() {
  process.stdout.write("$ "); // Display prompt without newline

  rl.once("line", (input) => {
    if (input.trim() === "exit 0") {
      rl.close();
      process.exit(0); // Exit with status code 0
    }

    console.log(`${input}: command not found`);
    prompt(); // Continue loop
  });
}

prompt(); // Start REPL

rl.on("close", () => {
  console.log("Exiting...");
  process.exit(0);
});
