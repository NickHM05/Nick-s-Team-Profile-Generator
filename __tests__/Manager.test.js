const Manager = require("../lib/Manager");
//extending from Employee..
//officeNumber
//getRole() => overridden to return 'Manager
test('can instantiate Manager object', () => {
    const manager = new Manager('Charlie', 30, 'charlie@company.com', 456)

    //"expect.anything lets us match anything that’s not null or undefined. Jest also has an expect.any (Constructor) construct. Which is similar to expect.anything () except we can be prescriptive with the type of the variable being asserted upon."-From https://codewithhugo.com/guides/jest-handbook/

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})