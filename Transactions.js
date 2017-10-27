'use strict';

module.exports = class Transaction {
    constructor(sender, amount, receiver){
        this.sender = sender;
        this.amount = amount;
        this.receiver = receiver;
    }

    toString() {
        return `${this.sender} sent ${this.receiver} ${this.amount} hubcoins.`;
    }
}
