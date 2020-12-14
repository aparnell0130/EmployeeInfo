// create employee class
class Employee {
    constructor(name, id, email) {
        // employee properties
        this.name = name
        this.id = id
        this.email = email
    }
    // method to return employee name
    getName() {
        return this.name
    }
    // method to return employee id
    getId() {
        return this.id
    }
    // method to return employee email
    getEmail() {
        return this.email
    }
    // method to return employee role
    getRole() {
        return 'Employee'
    }
}
// export employee class
module.exports = Employee