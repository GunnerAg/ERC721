require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.7.4",
      settings: {
        optimizer: {
          enabled: false, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
