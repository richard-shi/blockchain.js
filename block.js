'use strict';

const Crypto = require('crypto')
const VERSION = "0.1.0";

exports.Block = class Block {
    constructor(timestamp, prev_block_hash, data_hash, nonce, data) {
        // Hashed data
        this.timestamp = timestamp;
        this.prev_block_hash = prev_block_hash;
        this.data_hash = data_hash;
        this.nonce = nonce;
        
        // Block metadata 
        this.version = VERSION;

        // Data
        this.data = data;
    }
};
