'use strict';

const Crypto = require('crypto');
const Block = require('./block').Block;

const DIFFICULTY = 1;
const BLOCK_COUNT = 20;

// Functions
const hash_data = function(data){
    return Crypto.createHash('sha256').update(data).digest('hex');
}

const is_valid_block = function(block, difficulty = DIFFICULTY){
    return block.hash().slice(0, difficulty) === '0'.repeat(difficulty);
}
const mine = function(block){
    while(!valid(block)){
        block.header.nonce += 1;
    }
}

const genesis = function(){
    const data = "Shinji get in the robot"


    return block
}

const create_block = function(data){
    const data_hash = hash_data(data);
    const prev_hash = 


}

const add_block = function(block){

}

// Main
const chain = [];
const genesis_block = genesis();

chain.push(genesis_block)

for(let i = 0; i < BLOCK_COUNT; ++i){

}
