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
        if(amount<=0){
            console.log("Enter a valid amount")
            return
        }
        this.balance += amount
        console.log(`${this.accountNumber} is credited with ${amount}. Current balance: ${this.balance}`)
    }
    
    withdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient balance")
            return
        }
        this.balance -= amount
         console.log(`${this.accountNumber} is debited with ${amount}. Current balance: ${this.balance}`)

    }

    printstatement(){
        console.log(`Dear ${this.holdername}, Your account ${this.accountNumber}. Available Balance: ${this.balance}`)
    }
}

let customer1 = new BankAccount("Ali","42401-24343-434",5000)
customer1.displayinfo()
customer1.deposit(1)
customer1.withdraw(6001)
customer1.printstatement()