// map, fiters, arrow func

const sum = (a,b) => {
    return a + b ;
}
console.log(sum(1, 3))


const arr = [1,2,3,4,5,6]
 function multiply(a) {
    return a * 2;
 }

 const ans = arr.map(multiply)
console.log(ans);

const arr = [1,2,3,4,5,6,7,8,9]

const ans = arr.filter((n)=>{
    if(n%2 == 0){
        return true
    }else{
        return false
    }
})
console.log(ans)
