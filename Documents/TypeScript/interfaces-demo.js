var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function () {
    function SavingsAccount() {
    }
    SavingsAccount.prototype.openBankAccount = function () {
        console.log("Open savings account");
    };
    SavingsAccount.prototype.closeBankAccount = function () {
        console.log("close savings account");
    };
    SavingsAccount.prototype.deposit = function () {
        console.log("Deposit in savings account");
    };
    SavingsAccount.prototype.withdraw = function () {
        console.log("withdrawal from savings account");
    };
    SavingsAccount.prototype.balance = function () {
        console.log("balance in savings account");
    };
    return SavingsAccount;
}());
var CurrentAccount = /** @class */ (function () {
    function CurrentAccount() {
    }
    CurrentAccount.prototype.openBankAccount = function () {
        console.log("Open current account");
    };
    CurrentAccount.prototype.closeBankAccount = function () {
        console.log("close current account");
    };
    CurrentAccount.prototype.deposit = function () {
        console.log("Deposit in current account");
    };
    CurrentAccount.prototype.withdraw = function () {
        console.log("withdrawal from current account");
    };
    CurrentAccount.prototype.balance = function () {
        console.log("balance in current account");
    };
    return CurrentAccount;
}());
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
