// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollar)=>{
    let euro = dollar/oneEuroIs.USD;
    let yenes = euro*oneEuroIs.JPY;
    return yenes;
}

const fromEuroToDollar=(euro)=>{
    return euro*oneEuroIs.USD
}

const fromYenToPound = (yenes) => {
    let euro = yenes / oneEuroIs.JPY; 
    let libra = euro * oneEuroIs.GBP; 
    return libra;
}

module.exports={sum,fromDollarToYen,fromEuroToDollar,fromYenToPound}