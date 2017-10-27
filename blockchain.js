'use strict';

const Crypto = require('crypto');
const Block = require('./block').Block;
const BlockHeader = require('./block').BlockHeader;
const socket = require('socket.io');
const app = require('express')()
const HTTP_PORT = 3001;
const SOCKET_PORT = 6001;

const DIFFICULTY = 4;
const BLOCK_COUNT = 20;

// Functions


const hash_data = function(data){
    //Assuming data is a string
    return Crypto.createHash('sha256').update(data).digest('hex')
}

// I think the actual way uses a number representation (in hex
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

const add_block = function(block){
    if(valid(block)){

    }
}

app.listen(HTTP_PORT, () =>{
    console.log("listening to port ")
})

// Main
const chain = [];
const genesis_block = genesis();

chain.push(genesis_block)

for(let i = 0; i < BLOCK_COUNT; ++i){

}
