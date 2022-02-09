function findMinInRotated(n, arr) {
    let low=0
    let high=n-1
    if (arr[low]<=arr[high]) {
        return 0
    }
    while (low<=high) {
        let mid=Math.floor(low+(high-low)/2)
        if (arr[mid]>arr[mid+1]) {
            return mid+1
        } else if (arr[mid]<arr[mid-1]) {
            return mid-1
        } else if (arr[low]<=arr[mid]) {
            low = mid+1
        } else if (arr[mid] <= arr[high]) {
           high = mid+1
        }
     
    }
    return -1
}
function FindKInRotatedRight(n, arr, index,k) {
    let high=n-1
    while (index<=high) {
        let mid=Math.floor(index+(high-index)/2)
        if (arr[mid]==k) {
            return mid
        } else if (arr[mid]<k) {
            index=mid+1
        } else {
            high=mid-1
        }
    
    }
    return -1
  }
function runProgram(input) {
   input = input.split('\n')
    let [n, k]=input[0].trim().split(' ').map(Number)
    let arr=input[1].trim().split(' ').map(Number)
    let index=findMinInRotated(n, arr)
    // console.log(index)
    let x=FindKInRotatedLeft(n, arr, index-1, k)
    let y=FindKInRotatedRight(n, arr, index, k) 
    if (x==-1&&y==-1) {
        console.log(-1);
    } else if (x>-1) {
        console.log(x);
    } else {
        console.log(y);
    }
    
}
function FindKInRotatedLeft(n, arr, index,k) {
    let low=0
    while (low<=index) {
        let mid=Math.floor(low+(index-low)/2)
        if (arr[mid]==k) {
            return mid
        } else if (arr[mid]<k) {
            low=mid+1
        } else {
            index=mid-1
        }
  
    }
    return -1
  }
  if (process.env.USERNAME === "Aashu Baghel") {
    runProgram(`10 3
    7 8 11 12 13 14 2 3 4 5`);
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
  
  