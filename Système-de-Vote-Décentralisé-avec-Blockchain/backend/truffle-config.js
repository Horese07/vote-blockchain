module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    dashboard: {
      host: "127.0.0.1",
      port: 7545, // Ensure this matches the Ganache Dashboard port
      network_id: 5777, // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the Solidity compiler version
    },
  },
};