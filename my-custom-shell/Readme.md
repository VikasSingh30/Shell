[![project-banner](https://ibb.co/9m9TDdv2)

This is a starting point for JS solutions
#"Build Your Own Shell" Challenge


# 🐚 Custom Shell in JavaScript

This is a custom shell built using **Node.js**. It supports built-in commands, external commands, input parsing, output redirection, and autocomplete functionality. This guide will take you through the entire process of setting up, building, running, and deploying the shell step-by-step.

---

## 🚀 Features
✅ Built-in shell commands  
✅ External command execution  
✅ Output and error redirection  
✅ Support for quoted arguments  
✅ Tab-based auto-completion  

---

## 🏗️ Project Structure

📂 custom-shell
├── 📄 shell.js
├── 📄 README.md
└── 📂 src
├── 📄 builtins.js
├── 📄 parser.js
└── 📄 executor.js

---

## 🔥 Step-by-Step Guide to Build a Custom Shell

### Step 1: ✅ **Setup Environment**
Make sure you have **Node.js** installed on your system.  
Check Node.js version:
```bash
node -v

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


 ##✅ Working Features:##
✔️ Built-in commands (exit, echo, type, pwd, cd) are implemented correctly.
✔️ Redirection (>, >>, 2>, 1>) is handled well for both stdout and stderr.
✔️ Quoted strings and escape characters are properly parsed.
✔️ External commands (like ls, cat, mkdir) are handled using exec.
✔️ autoComplete is functional and includes built-in commands + executables from PATH.
✔️ Clean handling of user input and terminal interface using readline.
✔️ Graceful Ctrl + C (SIGINT) handling.


##🛠️ Tech Stack
✔️ Node.js
✔️ JavaScript
✔️ readline
✔️ exec

##🤝 Contributing
👋 Feel free to submit a pull request or open an issue for any improvements or bugs!
👋 Lets Learn, Solve together and make it better!


