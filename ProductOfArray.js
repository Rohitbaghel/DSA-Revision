function runProgram(input) {
   input = input.split('\n')
    let test=+input[0]
    let line=1
    for (let i=0;i<test;i++){
        let n=+input[line++].trim()
        let arr=input[line++].trim().split(' ').map(Number)
        ProductOfArray(n, arr)
    }
}
function ProductOfArray(n, arr) {
  let left=[], right=[]
  let temp=1
  
  for (let i=0;i<arr.length;i++) {
    left[i]=temp
    temp=temp *arr[i]
    
  }
temp=1
  for (let i=n-1;i>=0;i--) {
    right[i]=temp
    temp=temp *arr[i]
    
  }
  let product=[]
  for (let i=0;i<arr.length;i++) {
    product[i]=left[i]*right[i]
 
    
  }
  console.log(product.join(" "))
}
  if (process.env.USERNAME === "Aashu Baghel") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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
  
  // function ProductOfArray(n, arr) {
  //   let product=[]
  //   let temp =1
  //   for(let i =0;i < n;i++){
  //     product[i]=temp
  //     temp= temp*arr[i]
  //   }
  //   let temp2=1
  //   for (let i=n-1;i>=0;i--){
  //     product[i]=product[i]*temp2
  //     temp2= temp2*arr[i]
  //   }
  //     console.log(product.join(" "));
  //   }