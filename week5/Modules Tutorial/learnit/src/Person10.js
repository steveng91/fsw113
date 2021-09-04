class Person{
    constructor(first,last){
        this.firstName = first
        this.lastName = last
    }
    fullName(){
        console.log(`The full name of the person = ${this.lastName}, ${this.firstName}`)
    }
}
export default Person