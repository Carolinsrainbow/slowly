const arr = [1, 2, 3]
const sum = arr.reduce((acum,currentValue,index)=>{
    return {...acum,[index]:currentValue}
},{})
console.log(sum)