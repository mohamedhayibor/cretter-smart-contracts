const Cretter = artifacts.require("Cretter");

contract('Cretter', (accounts) => {
  it('Statement contract balance should be 0.04 ether at deploy', async () => {
    const cretterInstance = await Cretter.deployed();

    const contractBalance = await cretterInstance.statementBankBalance.call()

    console.log("ContractBalance: ", contractBalance);

    // assert.equal(contractBalance, 
  })

})


// const assert = require('assert');
