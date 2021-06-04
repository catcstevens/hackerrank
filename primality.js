function primality(n) {

    if(n==1) {
        return "Not prime"
      }
      for(let i=2; i<=Math.sqrt(n); i++) {
        if(n%i==0) {
            return "Not prime"; 
        }
      }
            return "Prime";

}

primality([1,4,9,16,
    25,
    36,
    49,
    64,
    81,
    100,
    121,
    144,
    169,
    196,
    225,
    256,
    289,
    324,
    361,
    400,
    441,
    484,
    529,
    576,
    625,
    676,
    729,
    784,
    841,
    907])

  primality([1000000007, 100000003, 1000003])   



    