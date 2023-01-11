const Employee = require("../lib/Employee");

test('can instantiate employee instance', () => {
    //what you expect to come out of the test
    //const e = new Employee('Sarah', 24, 'sarahkmamberger@gmail.com')
    //expect (typeof(e)).toBe('object')
    const employee = new Employee('Sarah', 24, 'sarahkmamberger@gmail.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
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