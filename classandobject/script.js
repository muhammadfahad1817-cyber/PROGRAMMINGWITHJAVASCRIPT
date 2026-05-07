class AptechStudents{
    constructor(name,email,education,grade){
        // property /class variables -> this.varname
        this.studentname = name
        this.studentemail = email
        this.studenteducation = education
        this.studentgrade = grade
    }


    // function method
registervision(){
    console.log(`${this.studentname} - ${this.studentemail} is registered in aptech vision`)
}

registertechwize(){
    console.log(`${this.studentname} - ${this.studentemail} - ${this.studenteducation} - ${this.studentgrade} is registered in aptech techwiz`)
}


}



let student123456 = new AptechStudents("Ali","ali@gmail.com","matric")
student123456.registervision()

let student1234567 = new AptechStudents("Ahmed","ahmed@gmail.com","Inter")
student1234567.registervision()

let student12345678 = new AptechStudents("Aliyan","aliyan@gmail.com","matric","A+")
student12345678.registertechwize()


