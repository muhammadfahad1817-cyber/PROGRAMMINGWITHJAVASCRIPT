class BankAccount{
    constructor(name,cnic,initialbalance){
        this.holdername = name
        this.CNIC = cnic
        this.balance = initialbalance
        this.accountNumber = "ACC-" + Date.now()

    }


    displayinfo(){
        console.log(`Dear ${this.holdername} your account is created, Number : ${this.accountNumber}`)
    }

    deposit(amount){
        this.balance += amount
        console.log(`${this.accountNumber} is credited with ${amount}. Current balance: ${this.balance}`)
    }
}

let customer1 = new BankAccount("Ali","42401-24343-434",5000)
customer1.displayinfo()
customer1.deposit(5000)