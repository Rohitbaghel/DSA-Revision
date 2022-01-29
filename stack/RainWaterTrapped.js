// BruteForce

// function RainWaterTrapped(n, arr) {
//     let res = 0
//     for (let i = 1; i < n-1; i++) {
//         let left = arr[i]
//         for (let j = 0; j < i; j++) {
//             left= Math.max(left,arr[j])
//         }
//         let right = arr[i]
//         for (let j = i+1 ; j < n; j++) {
//             right = Math.max(right,arr[j])
//         }
//         res+=Math.min(left,right)-arr[i]
//     }
//       console.log(res)
//   }
// BruteForce

function runProgram(input) {
   input =input.split('\n')
    let test = +input[0]
    let line = 1
    for (let i = 1; i <= test; i++) {
        let n = +input[line++].trim()
        let arr = input[line++].trim().split(' ').map(Number)
        // console.log(arr)
        RainWaterTrapped(n, arr)
    }
}
function RainWaterTrapped(n, arr) {
  let left = []
  left[ 0 ] = arr[ 0 ]
  for ( let i = 1; i < arr.length; i++ )
  {
    left[ i ] = Math.max( left[i-1], arr[ i ] )
  }
  // console.log(left)
  let right = []
  right[ n - 1 ] = arr[ n - 1 ]
  for ( let i = n - 2; i >= 0; i-- )
  {
    right[ i ] = Math.max(right[ i +1], arr[ i ] )
  }
  // console.log(right)
  let water = []
  for ( let i = 0; i < n; i++ )
  {
    water[i ] = Math.min( left[ i ], right[ i ])-arr[ i ]
  }
  // console.log(water)
  let sum = 0
  for ( i = 0; i < n; i++ )
  {
    sum += water[i]
  }
  console.log(sum)
  }
  if (process.env.USERNAME === "Aashu Baghel") {
    runProgram(`2
    5
    3 2 0 4 6
    7
    7 0 3 6 2 3 5`);
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
  
  