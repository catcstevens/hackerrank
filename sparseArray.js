//input: array of strings and array of queries - n
//determine how many times query string occurs in list of input strings - q
//return array

// loop through n and map to object with number of occurrences

// map through object if string exists in object what is its value. Push value into new array

function matchingStrings(strings, queries) {
    const results = []

    const stringCounter = strings.reduce((index, str) => {
        index[str] = (index[str] || 0) + 1;
        return str
    }, {})

    //do an if/else to push couner into array
    console.log(results)
}

