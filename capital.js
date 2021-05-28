function capitalize(s){
    //creating a new array to hold the two completed string manipulations 
  
    //creating an array to hold the first manipulated values
    let array = []
    let stringA = '';
    let stringB = ''
    for (i=0; i < s.length; i++){
        if (s.indexOf(s[i]) % 2 === 0){
        stringB += s[i]
            // console.log(s[i])
        stringA += s[i].toUpperCase()
        console.log (`even: ${i} ${stringA} ${stringB}`)
    } else if (s.indexOf(s[i]) % 2 === 1) {
        stringA += s[i]
        stringB += s[i].toUpperCase()
    }
  
    } 
    array.push(stringA, stringB)
    console.log(array)
}
capitalize('abcdefghi')