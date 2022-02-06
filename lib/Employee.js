function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = () => {
        return this.name;
    }
}

module.exports = Employee;