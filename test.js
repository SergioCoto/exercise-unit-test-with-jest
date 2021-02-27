// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("33 dollars should be 3517.25 Yenes", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const Yenes = fromDollarToYen(33)

    // if 1 dollar is 106.583333333333 Yenes, then 33 dollars should be (33 * 127.9 / 1.2)
    const expected = 33 * 127.9 / 1.2 ; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(Yenes);
})

test("1800000000 Yenes should be 11258795.9343237 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(1800000000)

    // if 1 yen is 0,00625488663017983 Pounds, then 1800000000 yenes should be (1800000000 * 0.8 / 127.9 )
    const expected = 1800000000 * 0.8 / 127.9 ; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pounds);
})