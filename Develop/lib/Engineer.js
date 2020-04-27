// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitUserName) {
    super (name, id, email)
    this.gitUserName=gitUserName
}

getGithub() {
    return this.gitUserName
}

getRole () {
    return 'Engineer'
}

}
module.exports = 
    Engineer
