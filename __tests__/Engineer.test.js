const Engineer = require("../lib/Employee");

// Extends from Employee..
// Extendsgithub => github username 
// getGithub
// getRole()=> Overridden to return 'Engineer'
test('can instantiate engineer object', () =>
{
    const engineer = new Engineer('Nick', 27, 'nhmamberger@company.com', 'NickHM05')

expect(engineer.name).toEqual(expect.any(String));
expect(engineer.id).toEqual(expect.any(Number));
expect(engineer.email).toEqual(expect.any(String));
expect(engineer.github).toEqual(expect.any(String));
})