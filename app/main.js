const readline = require("readline");
const { REPLServer } = require("repl");
const fs = require("fs");  //implementing fs module for type excutable
const path = require("path");  //implementing path module for type excutable
const { spawn } = require("child_process");  //implementing child_process module for type excutable

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ "  // prompt for repl
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


const builtins = new Set(["echo", "exit", "type"  ]); // line addes for type builtin to work with other built in

// function findExecutable(command) {  // function for type executable
//   if (!process.env.PATH) return null;
//   // const pathDirs = process.env.PATH? process.env.PATH.split(";") : []; // Get PATH environment variable and split into directories
//   const pathDirs = process.env.PATH.split(":"); // Get PATH environment variable and split into directories

//   for (const dir of pathDirs) {
//     const fullPath = path.join(dir, command); // Combine directory and command
//     try{
//       if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) { // Check if file exists and is a file
//         fs.accessSync(fullPath, fs.constants.X_OK); // Check if executable
//         return fullPath; // Found the executable
//       }
//     } catch (err) {
//       continue; // Ignore permission errors
//     }
//   }
//   return null; // Not found in PATH
// }

function handleTypeCommand (args){
  const cmd = args[1];

  if(!cmd){
    console.log("type: missing argument");
    return;
  }

  if (builtins.has(cmd)) {
    console.log(`${cmd} is a shell builtin`);
  // }else{                                       //commented for run command function
  //   const executablePath = findExecutable(cmd);
  //   if (executablePath) {
  //     console.log(`${cmd} is ${executablePath}`);
  //   }else{
  //     console.log(`${cmd}: not found`);
  //   }
  }else {
    console.log(`${cmd} is ${cmd}`);
  }
}

// Function to execute external commands
function executeCommand(command, args) {
  // const executablePath = findExecutable(command);


  // if (!executablePath) {
  //   console.log(`${command}: command not found`);
  //   return;
  // }

    // Spawn the process
    // const child = spawn(executablePath, args, { stdio: "inherit", shell: true });
    const child = spawn(command, args, { stdio: "inherit", shell: false });
    child.on("error", (err) => {
      console.log(`${command}: execution failed`);
      // prompt();   //continue REPL after failure  
    });
  
    child.on("exit", (code) => {
      if (code !== 0) {
        console.log(`${command}: process exited with code ${code}`);
      }
      // prompt();  //ensure prompt continues
      setTimeout(prompt, 10);  //ensure prompt continues
    });
  }

//EXIT 0 implemented
// shell REPL loop
function prompt() {
  process.stdout.write("$ "); // Display prompt without newline  // line removed in order to run the command without $ prompt

  rl.once("line", (input) => {
    // const trimmedInput = input.trim(); // line addes for echo builtin
    // if (input.trim() === "exit 0")  // to implement exit exit 0 line was added
    // const args = trimmedInput.split(" "); // Split input into command and arguments (line addes for type builtin)
    const args = input.trim().split(" "); // line added for type executable
    const command = args[0]; // Extract command from input (line addes for type builtin)
    if (command === "exit"){  //  if (trimmedInput === "exit 0") {   // line addes to implement echo
      rl.close();
      process.exit(0); // Exit with status code 0
    
    //function for echo implementation
    // if (trimmedInput.startsWith("echo")) {
    //   console.log(trimmedInput.slice(5)); // Print the argument to echo
    // }else{
    //   console.log(`${trimmedInput}: command not found`); // Print the command not found
    // }

    // for type built in
    }else if (command === "echo") { // else addes for type
      console.log(args.slice(1).join(" ")); // Print everything after "echo"
      prompt(); // Continue loop REPL
    } else if (command === "type") {
      handleTypeCommand(args);
      prompt(); // Continue loop REPL
    // } else {
    //   console.log(`${command}: command not found`); // Print the command not found
    } else {
      executeCommand(command, args.slice(1)); // Execute the command
    }
    //   const checkCommand = args[1]; // The command to check
    //   if (builtins.has(checkCommand)) {
    //     console.log(`${checkCommand} is a shell builtin`);
    //   } else {
    //     const executable = findExecutable(checkCommand); // Find the executable (line added for type executable)
    //     if (executable) {
    //       console.log(`${checkCommand} is ${executablePath}`);
    //     }else{
    //       console.log(`${checkCommand}: not found`);
    //     }
    //     // console.log(`${checkCommand}: not found`);
    //   }
    // } else {
    //   console.log(`${trimmedInput}: command not found`);
    // }

    // console.log(`${input}: command not found`); // exit 0 line
    prompt(); // Continue loop
  });
}


prompt(); // Start shell

// rl.on("close", () => {
//   // console.log("Exiting...");
//   process.exit(0);  // clean exit
// });
