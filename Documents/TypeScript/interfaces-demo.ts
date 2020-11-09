abstract class BankAccount{
    abstract deposit();
    abstract withdraw();
    abstract balance();
}

interface IMyBank{
    openBankAccount(): void;
    closeBankAccount(): void;
}

interface IBankAccount extends IMyBank{
    deposit(): void;
    withdraw(): void;
    balance(): void;
}

class SavingsAccount implements IBankAccount{
    openBankAccount(): void{
        console.log("Open savings account");
    }
    closeBankAccount(): void{
        console.log("close savings account");
    }
    deposit(): void{
        console.log("Deposit in savings account");
    }
    withdraw(): void{
        console.log("withdrawal from savings account");
    }
    balance(): void{
        console.log("balance in savings account");
    }
}

class CurrentAccount implements IBankAccount, IMyBank{
    openBankAccount(): void{
        console.log("Open current account");
    }
    closeBankAccount(): void{
        console.log("close current account");
    }
    deposit(): void{
        console.log("Deposit in current account");
    }
    withdraw(): void{
        console.log("withdrawal from current account");
    }
    balance(): void{
        console.log("balance in current account");
    }
}

var curr_acc = new CurrentAccount();
var sav_acc = new SavingsAccount();

curr_acc.balance();
curr_acc.closeBankAccount();
curr_acc.deposit();
curr_acc.openBankAccount();
curr_acc.withdraw();

sav_acc.balance();
sav_acc.closeBankAccount();
sav_acc.deposit();
sav_acc.openBankAccount();
sav_acc.withdraw();