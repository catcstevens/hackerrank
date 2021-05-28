function dynamicArray(n, [[t,x,y]]) {
    // Write your code here
    let arr = Array.from(new Array(n), () => {
        return ([])
        })
    let lastAnswer = 0
    let lastAnswerArray = []
   
    for (let i = 0; i < n; i++) {
        if (arr[i][t] === 1 ) {
            let idx = ((queries[i][x] ^ lastAnswer) % n)
            arr[idx].push(i[y])
            // lastAnswer = i[idx][i[2] % (arr[idx].length)]
        } else {
            let idx = ((arr[i][x] ^ lastAnswer) % n)
            let value = arr[idx][y % (arr[idx].length)]
            lastAnswer += value
            lastAnswerArray.push(lastAnswer)
        } 
       
    
    } console.log(lastAnswer)
    
}

dynamicArray(2, 5
    [[1, 0, 5]
    [1, 1, 7]
    [1, 0, 3]
    [2, 1, 0]
   [ 2, 1, 1]])

//    queries[i][0] represents query type either 1 or 2 queries[i][1] denotes x value queries[i][2] denotes y value