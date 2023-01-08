const Employee = require ("../lib/Employee")
test('can instantiate employee instance',()=>{
    //what you expect to come out of the test
    const e = new Employee()
    expect (typeof(e)).toBe('object')
})
//do this same thing for all the tests
//Employee(expect e.name)

//Employee parent class with the following properties and methods
// nameid
// ElementInternalsgetName
// GeolocationCoordinatesgetEmail
// getRole

// other three classes will extend Employee

// add validation that input is in the correct format