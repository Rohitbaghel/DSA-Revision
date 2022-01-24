function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let line = 1;
  let s1=[];
   let s2=[]
    for (let i = 1; i <= n; i++) {

      let z=input[line++].trim().split(" ")
      // console.log(z)
      let x=z[0]
      let y=+z[1]
      // console.log(y)
      // y = Number(y)
   FindMin(n, x, y,s1,s2)
  
   
  }
}
function FindMin(n, x, y, s1,s2) {
    // console.log(y)
  let ans;
    if (x==='PUSH') {
    s1.push(y);
    // return s1
      if (s2.length==0||s2[s2.length-1]>=y) {
        s2.push(y);
      }
      // return 
    } else if (x==='MIN') {
      if (s1.length==0) {
      console.log('EMPTY')
      }
      else {
      console.log(   s2[s2.length-1])
     } 
    }
    else { 
      if (s1.length==0) {
        console.log('EMPTY')
      }
    if (s1[s1.length-1]==s2[s2.length-1]) {
      s2.pop()
      s1.pop()
    } else {
      s1.pop()
      }
      
    }


}
if (process.env.USERNAME === "Aashu Baghel") {
  runProgram(`11
    PUSH 5
    PUSH 7
    PUSH 3
    PUSH 8
    PUSH 10
    MIN
    POP
    POP
    MIN
    POP
    MIN`);
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
