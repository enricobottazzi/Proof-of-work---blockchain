const jayson = require('jayson')
const {startMining, stopMining} = require('./mine')
const {utxos} = require('./db');

// create a server
const server = new jayson.Server({
  startMining: function(_, callback) {
    callback(null, `success!`);
    startMining();
  },
  stopMining: function(_, callback) {
    callback(null, `success!`);
    stopMining();
  },
  getBalance: function([address], callback) {

    const ourUTXOs = utxos.filter(x => {
    
    return x.owner === address && !x.spent;
    });
    // in this way we are filtering only the utxos that own to the address
    // that we used as input of the function
    // we also need to make sure that these UTXOs haven't been spent yet!
    
    const sum = ourUTXOs.reduce((p,c) => p + c.amount, 0);
    // we want to get the sum to actually display the balance
    // we are passing all the elements of the ourUTXOs array
    // starting with 0
    // grab the .amount for each and add it to the cumulative value 
    callback(null, sum);
  }
});

server.http().listen(3000);


