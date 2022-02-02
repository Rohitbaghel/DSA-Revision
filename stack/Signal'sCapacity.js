// Brute Force Approach
function SignalCapacity(n, arr) {
    let arr1=[]
    for (let i = 0; i < n; i++) {
        let count = 1
        for (let j = i-1; j >= 0; j--){
            if (arr[i] >= arr[j]) {
                count++
            } else {
                
                break;
                count=1
            }
        }
    arr1.push(count)
    }
    console.log(...arr1)
  }
// Brute Force Approach

function optimizeApproachWithStack(n, arr) {
    let stack = []
    let span = []
    stack.push(0)
    span[0] = 1
    for (let i = 0; i < n; i++) {
        while (stack.length != 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop()
        }
        span[i] = stack.length == 0 ? i + 1 : i - stack[stack.length - 1]
        stack.push(i)
    }
    console.log(...span)
}

function runProgram(input) {
   input = input.split('\n')
    let test = +input[0]
    let line = 1
    for (let i = 1; i <= test; i++) {
        let n = +input[line++].trim()
        let arr = input[line++].trim().split(' ').map(Number)
        // console.log(n,arr)
        // SignalCapacity(n, arr)
        optimizeApproachWithStack(n, arr)
    }
    
}

  if (process.env.USERNAME === "Aashu Baghel") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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
  
  