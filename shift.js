function rotateLeft(d, arr) {
    // Write your code here
    while (d >0){
     let rotatedOut = arr.shift()
     
    arr.push(rotatedOut)

    d--
    } console.log(arr)
}
    rotateLeft(4,[1,2,3,4,5])