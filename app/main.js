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
const builtins = new Set(["echo", "exit", "type"  ]); // line addes for type builtin to work with other built in
function prompt() {
  process.stdout.write("$ "); // Display prompt without newline

  rl.once("line", (input) => {
    const trimmedInput = input.trim(); // line addes for echo builtin
    // if (input.trim() === "exit 0")  // to implement exit exit 0 line was added
    const args = trimmedInput.split(" "); // Split input into command and arguments (line addes for type builtin)
    const command = args[0]; // Extract command from input (line addes for type builtin)
     if (trimmedInput === "exit 0") {   // line addes to implement echo
      rl.close();
      process.exit(0); // Exit with status code 0
    }
    //function for echo implementation
    // if (trimmedInput.startsWith("echo")) {
    //   console.log(trimmedInput.slice(5)); // Print the argument to echo
    // }else{
    //   console.log(`${trimmedInput}: command not found`); // Print the command not found
    // }

    // for type built in
    if (command === "echo") {
      console.log(args.slice(1).join(" ")); // Print everything after "echo"
    } else if (command === "type") {
      const checkCommand = args[1]; // The command to check
      if (builtins.has(checkCommand)) {
        console.log(`${checkCommand} is a shell builtin`);
      } else {
        console.log(`${checkCommand}: not found`);
      }
    } else {
      console.log(`${trimmedInput}: command not found`);
    }

    // console.log(`${input}: command not found`); // exit 0 line
    prompt(); // Continue loop
  });
}

prompt(); // Start REPL

rl.on("close", () => {
  // console.log("Exiting...");
  process.exit(0);  // clean exit
});
