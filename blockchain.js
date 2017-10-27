'use strict';

const Crypto = require('crypto');
const Block = require('./block').Block;

const DIFFICULTY = 1;
const BLOCK_COUNT = 20;

// Functions
const hash_data = function(data){
    return Crypto.createHash('sha256').update(data).digest('hex');
}

const is_valid = function(block, difficulty = DIFFICULTY){
    return ((block.prev_hash in chain && block.prev_hash) || block.prev_hash === '0')   // Check chain for previous hash
    && block.hash().slice(0, difficulty) === '0'.repeat(difficulty);                    // Check if block meets target
}

const mine = function(block){
    while(!is_valid(block)){
        block.header.nonce += 1;
    }
}

const genesis = function(){
    const data = "Shinji get in the robot"
    return create_block(data)
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

const add_block = function(block){
    if(!is_valid(block)){
        return new Error("Block is not valid, not adding")
    }

    chain.
}

// Main
const chain = {};
const genesis_block = genesis();

chain.add_block(genesis_block)

for(let i = 0; i < BLOCK_COUNT; ++i){

}
