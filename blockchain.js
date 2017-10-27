'use strict';

<<<<<<< HEAD
const Crypto = require('crypto');
const Block = require('./block').Block;
const BlockHeader = require('./block').BlockHeader;

=======
// Add utility functions
require('./util');
const Block = require('./block');
>>>>>>> master

const DIFFICULTY = 1;

<<<<<<< HEAD
// Functions

const hash_data = function(data){
    return Crypto.createHash('sha256').update(data).digest('hex');
}

const is_valid = function(block, difficulty = DIFFICULTY){
    return block.hash().slice(0, difficulty) === '0'.repeat(difficulty);                    // Check if block meets target
}

const mine = function(block){
    while(!is_valid(block)){
        block.nonce += 1;
=======
module.exports = class Blockchain {

    constructor(chain = []){
        this.chain = chain;
        if(!this.chain.length){
            this.genesis();
        }
>>>>>>> master
    }

<<<<<<< HEAD
const genesis = function(){
    const data = "Shinji get in the robot"
    return create_block(data)
}

const create_block = function(data){
    const timestamp = Date.now();
    const data_hash = hash_data(data);
    var prev_hash;
    var prev_block;

    if(chain.length === 0){
        prev_hash = "0";
    } else {
        prev_block = chain[chain.length-1];
        prev_hash = prev_block.hash();
=======
    is_genesis(block){
        return this.chain[0] === block && block.previous_hash === 'Genesis'
>>>>>>> master
    }
    // if(){
    //     throw new Error("Please create genesis block!")
    // }

<<<<<<< HEAD

    const block = new Block(timestamp, prev_hash, data_hash, data, 0)

    mine(block)
    chain.push(block);

    return block;
}

// Main
const chain = [];
const genesis_block = genesis();

module.exports = {
  chain,
  create_block
=======
    genesis(){
        const data = "Shinji get in the robot"
        const timestamp = Date.now();
        const prev_block = "Genesis"

        const genesis_block =  new Block(prev_block, timestamp, data, 0);
        this.mine(genesis_block);
        this.add_block(genesis_block);
    }

    is_valid(block, difficulty = DIFFICULTY){
        return block.hash().slice(0, difficulty) === '0'.repeat(difficulty);                    // Check if block meets target
    }

    add_block(block){
        if(!this.is_valid(block)){
            throw new Error("Block is not valid, not adding")
        }

        this.chain.push(block)
    }

    mine(block){
        while(!this.is_valid(block)){
            block.nonce += 1;
        }
    }

    create_block(data){
        const timestamp = Date.now();
        const prev_block = this.chain.last();
    
        if(!prev_block){
            throw new Error("Please create genesis block!");
        }
    
        return new Block(prev_block, timestamp, data, 0)
    }
>>>>>>> master
}
