const { networkConfig } = require("../helper-hardhat-config");
const { network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const ethUsdPriceFeedAddress = networkConfig[chainId][ethUsdPriceFeed];

  await deploy("FundMe", {
    from: deployer,
    args: [], // put price feed address
    log: true,
  });
};
module.exports.tags = ["FundMe"];
