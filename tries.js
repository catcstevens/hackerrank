// array of alphabet
const ALPHA = "abcdefghij"

// initialises a root node of undefined value and undefined list
function initRoot() {
    return {value: undefined, list: undefined}
}

//initializes and returns an array of 10 objects of value: undefined, list: undefined
function initList() {
    let list = Array.from(new Array(10), x => {
        return ({value: x, list: x, isComplete: false})
    })
    return list
}

function getPrefix(trie, word){
    //trie is the initialised root node passed in from main function checkSet
    //word is the current word in given array that main function is looping through
    let currentNode = trie
    //loop through word by index
    for(let letterIndex=0; letterIndex < word.length; letterIndex++) {
        //letter is the letter at the current index
        const letter = word[letterIndex]
        //index is the current of index number of the letter in ALPHA
        const index = ALPHA.indexOf(letter)
        //if the list in the current node is undefined, there is nothing in there therefore we call the initList function that will add a new array with 10 objects of undefined value and list to the current node 
       if(currentNode.list === undefined) {
            currentNode.list = initList()
        } 
        //value = the value of the letter of the current nodes array(list)at the index of that letter. a letter will have the same index regardless of node list
        let value = currentNode.list[index].value
        if(value !== undefined) {
           return value
        //if there is a value at that index it means at this node level the word is the same and it is not undefined so return that letter
        } 
        //if current iteration count is equal to the length of the current word -1 then it is the end of the word and the node value should be equal to the word
        if(letterIndex === word.length-1) {
            currentNode.list[index].value = word
            currentNode.list[index].isComplete = true
        }
        currentNode = currentNode.list[index] 
        if (currentNode.list !==undefined && currentNode.isComplete === true) {
            return true
        }   
    }
    return undefined
}

function checkSet(set) {
    let trie = initRoot()
    for(let word of set){
        if(getPrefix(trie, word)){
                console.log(`BAD SET\n${word}`)
                return false
        } 
    }
    console.log("GOOD SET")
}

checkSet(['dfbacgjecgfjcaejghacjdhcchj',
    'jjffdbeeejiehjdidbbdgidcaeejjdeiicibjfjgjjchedci',
    'jhjfbjbhijbcgefgbbgdjbihcehfbgdeaie',
    'jjddfcjaebdfbeaehaecibdbdcibebjbfgjidijhbjche',
    'eiejiajeiefadghfffdh',
    'gfdcdfjhiebfgicgfcghgicbabbaadbaj',
    'gdjfbbhgieabiejajaefdfjdiadbieheiddeegie',
    'hffedadc',
    'g',
    'adgahjcbihhgg',
    'jcaafdicjhbejbdjbbhehad',
    'jdedibfadddaahbagcgehhdiifddefgefhgecegfjecbdchc',
    'eifebiej',
    'gfbajafbjbafchgdceadhhgjiebhdbfef',
    'fdahbhefihhceajjbid',
    'aheaghhegji',
    'gijjcfgjceehagfghbhhhfhdbcddhgiajhdde',
    'ciighdchhjcjeiejefefebcaebahdejfggggejhebdhje'])
checkSet(['ab', 'cac', 'abc', 'cab'])