'use strict';

const Crypto = require('crypto');
const VERSION = '0.1.0';

module.exports = class Block {
    constructor(previous_block, timestamp, data, nonce) {
        // Block metadata
        this.version = VERSION;
        this.data = data;
        this.previous_block = previous_block;
        
        // Hashed data
        this.timestamp = timestamp;
        this.previous_hash = (previous_block !== 'Genesis') ? this.previous_block.hash() : "0";
        this.data_hash = hash_data(data);
        this.nonce = nonce;
    }

    hash() {
        return Crypto.createHash('sha256')
            .update(this.toString())
            .digest('hex');
    }

    toString() {
        return `${this.timestamp}${this.prev_block_hash}${this.data_hash}${this.nonce}`;
    }

    hash_data(data) {
        return Crypto.createHash('sha256')
            .update(data)
            .digest('hex');
    }
};
