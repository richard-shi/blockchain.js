'use strict';

const Crypto = require('crypto');
const Block = require('./block').Block;

const DIFFICULTY = 1;
const BLOCK_COUNT = 20;

// Functions
const hash_data = function(data){
    return Crypto.createHash('sha256').update(data).digest('hex')
}

const valid = function(block, difficulty = DIFFICULTY){
    return block.hash().slice(0, difficulty) === '0'.repeat(difficulty);
}
const mine = function(block){
    while(!valid(block)){
        block.header.nonce += 1;
    }
}

const genesis = function(){
    const data = "And God said, Let there be light: and there was light."
    const data_hash = data_hash(data)


    const block = new Block(header, data)
    
    mine(block)

    return block
}

const create_block = function(data, timestamp){

}

const add_block = function(block){
    if(valid(block)){

    }
}

// Main
const chain = [];
const genesis_block = genesis();

chain.push(genesis_block)

for(let i = 0; i < BLOCK_COUNT; ++i){

}
