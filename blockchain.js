'use strict';

// Add utility functions
require('./util');

const Crypto = require('crypto');
const Block = require('./block');

const DIFFICULTY = 1;

module.exports = class Blockchain {

    constructor(chain = []){
        this.chain = chain;
    }

    is_genesis(block){
        return chain[0] === block && block.prev_block_hash === '0'
    }

    create_genesis(){
        const data = "Shinji get in the robot"
        return this.create_block(data)
    }

    is_valid(block, difficulty = DIFFICULTY){



        block.hash().slice(0, difficulty) === '0'.repeat(difficulty);                    // Check if block meets target
    }

    add_block(block){
        if(!is_valid(block)){
            return new Error("Block is not valid, not adding")
        }

        chain.push(block)
    }

    mine(block){
        while(!this.is_valid(block)){
            block.header.nonce += 1;
        }
    }



}

const create_block = function(data){
    const timestamp = Date.now();
    const data_hash = hash_data(data);
    const prev_block = chain.last();

    if(!prev_block){
        throw new Error("Please create genesis block!")
    }

    const prev_hash = prev_block.hash();

    return new Block(timestamp, prev_hash, data_hash, data, 0)
}
