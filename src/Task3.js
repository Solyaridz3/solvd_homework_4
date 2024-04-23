const bankAccount = {
    balance: 1000,
    get formattedBalance() {
        return '$' + this.balance;
    },
    set newBalance(balance) {
        this.balance = balance;
    },
    transfer(targetAccount, amount) {
        if (this.balance < amount) {
            throw new Error('Not enough money to transfer')
        }
        targetAccount.newBalance = targetAccount.balance + amount;
        this.newBalance = this.balance - amount;
    }
}

const bankAccount1 = Object.create(bankAccount);
const bankAccount2 = Object.create(bankAccount);
