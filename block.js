'use strict';

const Crypto = require('crypto')
const VERSION = "0.1.0";

module.exports = class Block {
    constructor(timestamp, prev_block_hash, data, nonce) {
        // Hashed data
        this.timestamp = timestamp;
        this.prev_block_hash = prev_block_hash;
        this.data_hash = hash_data(data);
        this.nonce = nonce;

        // Block metadata
        this.version = VERSION;

        // Data
        this.data = data;
    }

    hash(){
        return Crypto.createHash('sha256').update(this.toString()).digest('hex')
    }

    toString(){
        return `${this.timestamp}${this.prev_block_hash}${this.data_hash}${this.nonce}`;
    }

    hash_data(data){
        return Crypto.createHash('sha256').update(data).digest('hex');
    }
};
