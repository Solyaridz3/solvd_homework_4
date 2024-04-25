const bankAccount = {
    balance: 1000,

    get formattedBalance() {
        return '$' + this.balance;
    },

    set newBalance(balance) {
        this.balance = balance;
    },
    /**
     * Transfers a specified amount from the current account to the target account.
     *
     * @param {Object} targetAccount - The account to transfer the amount to.
     * @param {number} amount - The amount to transfer.
     * @throws {Error} If the current account does not have enough balance to transfer.
     */
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
