var nextGreaterElements = function(arr) {
    let stack =[]
    let ans = []
    for ( let i = arr.length-1; i >= 0; i-- )
    {
        
        while(stack.length > 0 && arr[stack[stack.length-1]] <= arr[i]){
            stack.pop()
        }
        if(stack.length==0){
            ans[i]=-1
        }else{
            ans[i]=arr[stack[stack.length-1]]
        }
        stack.push( i )
        
    }
   console.log(ans)
};
nextGreaterElements([1,2,1])