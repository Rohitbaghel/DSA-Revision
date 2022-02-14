let arr=[[1, 2, 3], 5, 6, [[1, 2], 8, [1, 2]]];

function FlatteningArray(arr) {
  return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            // item should be an array
            acc= acc.concat(FlatteningArray(item))
        } else {
            // item should be an number
            // acc.push(item); if don't want to use push
            acc= [...acc,item]
        }
        return acc
    },[])

}
console.log(FlatteningArray(arr))