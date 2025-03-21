
 # "Build Your Own Shell"

# 🐚 Custom Shell in JavaScript

This is a custom shell built using **Node.js**. It supports built-in commands, external commands, input parsing, output redirection, and autocomplete functionality. This guide will take you through the entire process of setting up, building, running, and deploying the shell step-by-step.

"Will try to make frontend"

---

## 🚀 Features
✅ Built-in shell commands  
✅ External command execution  
✅ Output and error redirection  
✅ Support for quoted arguments  
✅ Tab-based auto-completion  

---

## 🏗️ Project Structure

📂 custom-shell<br>
 ├──📂node_modules<br>
 ├──📂package-lock.json <br>
 ├──📂package.json<br>
 ├──📄shell.js<br>
├──📄README.md<br>

---

## 🔥 Step-by-Step Guide to Build a Custom Shell

### Step 1: ✅ **Setup Environment**
Make sure you have **Node.js** installed on your system.  

### ✅ **Step 2: Start the Shell**  
node shell.js

## 🏆 **Stages**  
| Stage | Description |  
|-------|-------------|  
| 🖥️ **Print a prompt** | Display a prompt before accepting input |  
| ❌ **Handle invalid commands** | Display error message for unknown commands |  
| 🔄 **REPL** | Implement Read-Eval-Print Loop |  
| 🚪 **The `exit` builtin** | Implement the `exit` command |  
| 🗣️ **The `echo` builtin** | Implement the `echo` command |  
| 🔎 **The `type` builtin: builtins** | Handle the `type` command for built-in commands |  
| 🔎 **The `type` builtin: executable files** | Handle the `type` command for external executables |  
| 🚀 **Run a program** | Execute external programs using `exec` |  
| 🌍 **Navigation** | |  
| └─ 📂 **The `pwd` builtin** | Implement the `pwd` command |  
| └─ 📁 **The `cd` builtin: Absolute paths** | Change to an absolute path |  
| └─ 🏠 **The `cd` builtin: Relative paths** | Change to a relative path |  
| └─ 🏡 **The `cd` builtin: Home directory** | Change to the user's home directory |  
| 🧩 **Quoting** | |  
| └─ 📝 **Single quotes** | Handle single-quoted strings |  
| └─ ✍️ **Double quotes** | Handle double-quoted strings |  
| └─ 🔙 **Backslash outside quotes** | Handle backslash outside quotes |  
| └─ 🔙 **Backslash within single quotes** | Handle backslash inside single quotes |  
| └─ 🔙 **Backslash within double quotes** | Handle backslash inside double quotes |  
| └─ 🏷️ **Executing a quoted executable** | Execute a command wrapped in quotes |  
| 🔀 **Redirection** | |  
| └─ ➡️ **Redirect stdout** | Redirect stdout (`>`) to a file |  
| └─ ❗ **Redirect stderr** | Redirect stderr (`2>`) to a file |  
| └─ ➕ **Append stdout** | Append stdout (`>>`) to a file |  
| └─ ➕ **Append stderr** | Append stderr (`2>>`) to a file |  
| 🌟 **Autocompletion** | |  
| └─ 🔤 **Builtin completion** | Complete built-in commands |  
| └─ 🗂️ **Completion with arguments** | Autocomplete command arguments |  
| └─ 🚫 **Missing completions** | Handle cases with no completions |  
| └─ 🔎 **Executable completion** | Complete executables from `PATH` |  
| └─ 📜 **Multiple completions** | Handle multiple completion results |  
| └─ 🧩 **Partial completions** | Handle partial matches during completion |  


 ## ✅ **Working Features**
✔️ Built-in commands (exit, echo, type, pwd, cd) are implemented correctly.<br>
✔️ Redirection (>, >>, 2>, 1>) is handled well for both stdout and stderr.<br>
✔️ Quoted strings and escape characters are properly parsed.<br>
✔️ External commands (like ls, cat, mkdir) are handled using exec.<br>
✔️ autoComplete is functional and includes built-in commands + executables from PATH.<br>
✔️ Clean handling of user input and terminal interface using readline.<br>
✔️ Graceful Ctrl + C (SIGINT) handling.<br>

## 🏆 **To Add features in future**
✔️ Add better auto-completion handling<br>
✔️ Improve input validation<br>
✔️ Allow for multi-line commands<br>
✔️ Add a history feature<br>

## 🛠️ **Tech Stack**
✔️ Node.js<br>
✔️ JavaScript<br>
✔️ readline<br>
✔️ exec<br>

## 🤝 **Contributing**
👋 Feel free to submit a pull request or open an issue for any improvements or bugs!<br>
👋 Lets Learn, Solve together and make it better!<br>

