const Intern = require(`../lib/Intern`);
// Extends from Employee..
// school
// getSchool
// getRole()=> Overridden to return 'Intern'

test('can instantiate intern object', () => {
    const intern= new Intern('Jiro', 25, 'jiro@UofM.edu', 'University of Minnesota')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.age).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})