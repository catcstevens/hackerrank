

    function prime(number) {

        let squareRoot = Math.floor(Math.sqrt(number))
        if(number % 2 === 0) {
            return true
        } else {
            for (let i = 3; i < squareRoot || number; i+=2) {
                if (number % i === 0) {
                    return true
                }       
            }
        }
    }
  

    function checkPrime(n) {
       
    for(let number of n){
        if(prime(number)){
                console.log('Not prime')
                
        } else {
            console.log('Prime')
        }
    }      
}

// checkPrime([12,5,25])
checkPrime([1000000007, 100000003, 1000003])