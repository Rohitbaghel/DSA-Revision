function runProgram(input) {
    input=input.split('\n')
    let n = +input[0].trim()
   let arr= input[1].trim().split(' ').map(Number)
    let majority=Math.floor(n/3)
    let obj={}
    for (let x of arr) {
        if (obj[x]==undefined) obj[x]=1
        else obj[x]++
    }
    let arr2=[]
    for (let k in obj) {
        if (obj[k]>majority) {
            arr2.push(k)
        }
    }
    if (arr2.length==1) {
      console.log(arr2.join(' '));
    } else {
        arr2 = arr2.map(Number)
        arr2.sort((a, b) => a-b)
        console.log(arr2.join(' '));
  }
  }
  if (process.env.USERNAME === "Aashu Baghel") {
    runProgram(`3
    3 2 3`);
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
  
  