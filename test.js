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
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One euro should be 127.9 yen", function(){
    //import the function from app.js
    const { fromDollartoYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollartoYen(1.2)

    // if 1 euro is 1.2 dollar, and 1 euro is also 127.9 yen, 1.2 dollars should be 1 euro which should be 127.9 yen 
    const expected = 1.2 / 1.2 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollartoYen(1.2)).toBe(127.9); //1 euro is 1.2 dollar, and 1 euro is also 127.9 yen, 1.2 /1.2 * 127.9
})
test("One euro should be .8 british pounds", function(){
    //import the function from app.js
    const { fromYentoPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromYentoPound(127.9)

    // if 1 euro is 1.2 dollar, and 1 euro is also 127.9 yen, 1.2 dollars should be 1 euro which should be 127.9 yen 
    const expected = 127.9 / 127.9 *.8; 
    
    // this is the comparison for the unit test
     expect(fromYentoPound(127.9)).toBe(0.8); //1 euro is also 127.9 yen and 1 euro is 0.8 british pounds,  127.9/127.9*0.8
})