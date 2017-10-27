'use strict';

// Add utility functions
require('./util');
const Block = require('./block');

const DIFFICULTY = 4;

module.exports = class Blockchain {

    constructor(chain = []){
        this.chain = chain;
        if(!this.chain.length){
            this.genesis();
        }
    }

    is_genesis(block){
        return this.chain[0] === block && block.previous_hash === 'Genesis'
    }

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

    validate_chain(from_block = this.chain.last()){
        block = from_block;
        while(block.previous_hash !== '0'){
            if(block.previous_block.hash() !== block.previous_hash){
                return false;
            }
            block = block.previous_block;
        }

        return true;
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

    add_data_to_chain(data){
        const block = this.create_block(data)
        this.mine(block)
        this.add_block(block)
    }
}
