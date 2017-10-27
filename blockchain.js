'use strict';

// Add utility functions
require('./util');
const Block = require('./block');

const DIFFICULTY = 1;

module.exports = class Blockchain {
    constructor(chain = []) {
        this.chain = chain;
        if (!this.chain.length) {
            this.genesis();
        }
    }

    is_genesis(block) {
        return this.chain[0] === block && block.previous_hash === 'Genesis';
    }
    // if(){
    //     throw new Error("Please create genesis block!")
    // }

    genesis() {
        const data = 'Shinji get in the robot';
        const timestamp = Date.now();
        const prev_block = 'Genesis';

        const genesis_block = new Block(prev_block, timestamp, data, 0);
        this.mine(genesis_block);
        this.add_block(genesis_block);
    }

    is_valid(block, difficulty = DIFFICULTY) {
        return block.hash().slice(0, difficulty) === '0'.repeat(difficulty); // Check if block meets target
    }

    add_block(block) {
        if (!this.is_valid(block)) {
            throw new Error('Block is not valid, not adding');
        }

        this.chain.push(block);
    }

    mine(block) {
        while (!this.is_valid(block)) {
            block.nonce += 1;
        }
    }

    create_block(data) {
        const timestamp = Date.now();
        const prev_block = this.chain.last();

        if (!prev_block) {
            throw new Error('Please create genesis block!');
        }

        return new Block(prev_block, timestamp, data, 0);
    }
};
