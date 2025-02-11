const readline = require("readline");
const { REPLServer } = require("repl");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ "
});

rl.prompt();    // initial prompt

// rl.question("$ ", (answer) => {
//   console.log(`${answer}: command not found`);
//   rl.close();
// });
rl.on("line", (input) => {
if input.trim() === "exit" {
  rl.close();
  return;
}
try{
  let result = eval(input);
  console.log(result);
}catch(e){
  console.log(`${input}: command not found`);
}
 
  rl.prompt();
});
rl.on("close", () => {
  console.log("Exiting...");
  // process.exit(0);
});
