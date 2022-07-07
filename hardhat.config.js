require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/O2toiYhAPYxeYJNRsKPRxlBaxqPpKQHC",
      accounts: ["f46d1730fecaf4470605a253008d9f05e6337c31f3d50af861ccdfb31c50089e"],
    },
  },
};