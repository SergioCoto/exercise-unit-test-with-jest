// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(fromEuroToDollar){
    // convertimos el valor a dolares
    let valueInYen = fromEuroToDollar * 127.9 / 1.2;
    // returnamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "fromDollarToYen"

//const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
//    let valueInYen = valueInDollar * 127.9 / 1.2;
    // returnamos el valor
//    return valueInYen;
//}

// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound = function(fromDollarToYen){
    // convertimos el valor a dolares
    let valueInPound = fromDollarToYen * 0.8 / 127.9;
    // returnamos el valor
    return valueInPound;
}

// declaramos una funcion con el mismo nombre "fromYenToPound"
//const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
//    let valueInPound = valueInYen * 0.8 / 127.9;
    // returnamos el valor
//    return valueInPound;
//}


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(7,3)

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};