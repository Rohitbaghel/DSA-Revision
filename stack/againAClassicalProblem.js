function runProgram(input) {
  input = input.split("\n");
  //    console.log(input)
  let n = +input[0];
  let line = 1;
  for (let i = 1; i <= n; i++) {
    let str = input[line++].trim();
    console.log(AgainAClassicalProblem(str));
    AgainAClassicalProblem(str);
  }
}
function AgainAClassicalProblem(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (stack.length == 0) {
        return "not balanced";
      } else {
        if (
          (stack[stack.length - 1] == "{" && str[i] == "}") ||
          (stack[stack.length - 1] == "[" && str[i] == "]") ||
          (stack[stack.length - 1] == "(" && str[i] == ")")
        ) {
          stack.pop();
        }
      }
    }
  }
  if (stack.length === 0) {
    return "balanced";
  } else {
    return "not balanced";
  }
}
if (process.env.USERNAME === "Aashu Baghel") {
  runProgram(`3
    {([])}
    ()
    ([]
    `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
