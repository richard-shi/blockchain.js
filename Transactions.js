'use strict';

module.exports = class Transaction {
    constructor(sender, amount, receiver){
        this.sender = sender;
        this.amount = amount;
        this.receiver = receiver;
    }
}
