// we need to create a Transaction class as UTXO only belongs 
// inside a transaction

const {utxos} = require('../db')

class Transaction {
    constructor(inputs, outputs) {
      this.inputs = inputs;
      this.outputs = outputs;
    }

    execute() {
    // whenever we run a block to validate we need to check all the transaction inside of that
    // block, to make sure that the inputs are greater than the outputs and the difference 
    // between these two goes to the miner as reward fee! 

    // That's why we want to create an execute function that add the UTXOs to our 
    // UTXOs array in the db

    this.inputs.forEach((input) => {
        input.spent = true;
    });
    this.outputs.forEach((output) => {
        utxos.push(output);
        });
    }
  }
  
  module.exports = Transaction;