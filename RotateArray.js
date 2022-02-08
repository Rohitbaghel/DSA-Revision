// function runProgram(input) {
//    input =input.split('\n')
//     let test=+input[0]
//     let line=1
//     for (let i=0;i<test;i++) {
//         let [n, k]=input[line++].trim().split(' ').map(Number)
//         let arr =input[line++].trim().split(' ').map(Number)
//         RotateArray(n, k, arr)
//     }
// }
// function RotateArray(n, k, arr) {
//     let d=k%n
//    console.log(d)
//    let temp =[]
//     // if (d==0) {
//     //     console.log(arr.join(' '));
//     // } else {
//         for (let i=d;i<n;i++) {
//             temp.push(arr[i])
//         }
//         console.log(temp);
    
//   }
//   if (process.env.USERNAME === "Aashu Baghel") {
//     runProgram(`3
//     3 1
//     1 2 3
//     2 2
//     1 2
//     2 3
//     1 2`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }
  
  
function Na(name, age) {
    let obj={}
    obj.name=name;
    obj.age=age;
}
let p1=new Na('r', 10);
console.log(typeof(p1));