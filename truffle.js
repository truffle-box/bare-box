/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the one's you need or modify
 * them to suit your project as necessary.
 *
 * On Windows? Try truffle-config.js instead - this file's name conflicts with
 * the `truffle` command.
 *
 * More information about configuration can be found throughout the
 * truffle docs and especially at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 */


/**
 * If you'd like to deploy via Infura, you'll need an HD wallet provider.
 *
 * > Using Truffle V5 or later? Make sure you install the V5 version.
 * > Infura API keys are available for free at: infura.io/register
 *
 * $ npm install truffle-hdwallet-provider@V5
 *
 */

// const HDWallet = require('truffle-hdwallet-provider');
// const mnemonic = "twelve-secret-words-only-you-know-for-your-wallet";
// const infuraKey = "fj4jll3k.....";

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can tell a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   *
   * Everything is optional and any fields you leave out will be filled in with
   * truffle's default settings.
   */

  /*
  networks: {
    // Useful for testing and general development
    development: {
      host: "127.0.0.1",  // Localhost (default)
      port: 8545,         // Standard Ethereum port (default for defined networks)
      network_id: "*",    // Any network (default)
    },

    // Useful if you launch your client locally at the command line yourself.
    // Examples: ganache-cli, geth, parity, or ...
    advanced: {
      port: 8777,            // Custom port
      network_id: "1342",    // Custom network
      gas: 8500000,          // Gas sent with each transaction (default: ~6700000)
      gasPrice: 20000000000  // 20 gwei (in wei) (default: 100 gwei)
      from: <address>        // Account to send txs from (default: accounts[0])
      websockets: true       // Enable EventEmitter interface for web3 (default: false)
    }

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${infuraKey}`),
      network_id: 3,      // This network is real
      gas: 5500000,       // Ropsten has a lower block limit than mainnet
      confirmations: 2,   // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200  // # of blocks to wait before timing out a deployment (default: 50)
      skipDryRun: true    // Don't dry run before deployment? (default: false for public nets )
    },

    // Useful for private networks
    private: {
      provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
      network_id: 2111,   // This network is yours, in the cloud.
      production: true    // Treat this network as if it was a public net.
    },
  },

  // Set any default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  }

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.1"    // Fetch exact version from solc-bin (default: truffle's version)
      docker: true        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {         // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    },

    external: {
      command: "./compile-external",
      targets: [{
        path: "external/M*.json",  // MetaCoin and Migrations
        command: "cat -"
      }, {
        path: "external/ConvertLib.json",
        command: "cat",
        stdin: false
      }, {
        properties: {
          contractName: "ExtraMetaCoin"
        },
        fileProperties: {
          abi: "external/MetaCoin.abi",
          bytecode: "external/MetaCoin.bytecode"
        }
      }]
    }
  }
  */
};
