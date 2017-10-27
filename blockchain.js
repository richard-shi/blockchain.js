'use strict';

const Crypto = require('crypto');
const Block = require('./block').Block;
<<<<<<< HEAD
=======
const BlockHeader = require('./block').BlockHeader;
const socket = require('socket.io');
const app = require('express')()
const HTTP_PORT = 3001;
const SOCKET_PORT = 6001;
>>>>>>> d054437177301a7dd1c0bb8424fc7e4bef358c1b

const DIFFICULTY = 1;
const BLOCK_COUNT = 20;

// Functions
<<<<<<< HEAD
=======


>>>>>>> d054437177301a7dd1c0bb8424fc7e4bef358c1b
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

<<<<<<< HEAD
    if(!prev_block){
        throw new Error("Please create genesis block!")
    }
=======
    const block = new Block(header, data)

    mine(block)
>>>>>>> d054437177301a7dd1c0bb8424fc7e4bef358c1b

    const prev_hash = prev_block.hash();
    
    return new Block(timestamp, prev_hash, data_hash, data, 0)
}

const add_block = function(block){
    if(!is_valid(block)){
        return new Error("Block is not valid, not adding")
    }

    // Mine block
    block.mine();
    
    chain[block.hash()] = block;
}

app.listen(HTTP_PORT, () =>{
    console.log("listening to port ")
})

// Main
const chain = {};
const genesis_block = genesis();

chain.add_block(genesis_block);

for(let i = 0; i < BLOCK_COUNT; ++i){

}
