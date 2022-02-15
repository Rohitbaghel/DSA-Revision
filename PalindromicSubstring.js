function masaiPalSubString(S) {
    let arr = [];
    for (var i=0;i<=S.length;i++) {
        for (var j=i;j<S.length;j++) {
            let str=''
            for (let k=i;k<=j;k++) {
                str+=S[k]
            }
           arr.push(str)
      }
    }
palindrome(arr)
}
masaiPalSubString('thisracecarisgood')

function palindrome(arr) {
        var reverse =""
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr[i].length;j++) {
             console.log(arr[j]);
         }
     }
  
}
      
    
function check(str,arr=[]) {
    var max=1;
    var line=str.length;
    if (str.length>max) {
        max=str.length;
      
    }

}


// function check(str) {
//     var max =1
//    var line = str.length
//   if(str.length > max){
//     max = str.length;
//     console.log(max);
//   }
 
//   }
//   function palindrome(str) {
//     var reverse =""
   
//     for (var i=str.length-1; i>=0; i--){
//        reverse +=str[i]
//       //console.log(reverse.l);
    
//     }
   
//     if(reverse == str){
//      check(reverse)
//     }
   
//   }

// function runProgram(input) {
//    for (var i = 0; i < input.length; i++){
//      for (var j = i; j < input.length;j++) {
//        var str=""
//        for(var k = i; k <= j; k++){
//          str+= input[k]
//        }
//      palindrome(str)
//      }
//    }
   
//   }
//   if (process.env.USERNAME === "Aashu Baghel") {
//     runProgram(`thisracecarisgood`);
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
