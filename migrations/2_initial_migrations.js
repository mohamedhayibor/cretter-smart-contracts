const StatementBank = artifacts.require("StatementBank");

module.exports = function (deployer) {
  deployer.deploy(StatementBank);
}