'use strict';

const Crypto = require('crypto');
const Block = require('./block').Block;
const BlockHeader = require('./block').BlockHeader;


const DIFFICULTY = 1;
const BLOCK_COUNT = 20;

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
    }
}

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
    }
    // if(){
    //     throw new Error("Please create genesis block!")
    // }


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
}
