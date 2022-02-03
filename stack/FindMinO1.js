function runProgram (input) {
  input = input.split('\n')
  let n = +input[0]
  let line = 1
  var min = 0
  for (let i = 1; i <= n; i++) {
    let z = input[line++].trim().split(' ')
    let x = z[0]
    let y = +z[1]
    FindMin(n, x, y,min)
  }
}
function FindMin (n, x, y,min) {
  let stack = []
  if (x === 'PUSH') {
    stack.push(y)
     min= y
    
  } else if
    (x==='MIN') {
    console.log(min)
  } else {

  }
 
  // console.log(stack)
}
if (process.env.USERNAME === 'Aashu Baghel') {
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
    MIN`)
} else {
  process.stdin.resume()
  process.stdin.setEncoding('ascii')
  let read = ''
  process.stdin.on('data', function (input) {
    read += input
  })
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '')
    read = read.replace(/\n$/, '')
    runProgram(read)
  })
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '')
    runProgram(read)
    process.exit(0)
  })
}
