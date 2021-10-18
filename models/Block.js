const SHA256 = require('crypto-js/sha256')

class Block {

    constructor() {

        this.timestamp = Date.now(); // we give a unique identifier to our block!
        this.nonce=0;
        this.transactions = [];
    }

    hash() {
        return SHA256(
            this.timestamp + "" + 
            this.nonce + "" +
            JSON.stringify(this.transactions))
            .toString(); 
    }

    addTransaction(tx) {
        this.transactions.push(tx);


    }

    execute() {
        this.transactions.forEach(x => x.execute());
    }


}

module.exports = Block;
