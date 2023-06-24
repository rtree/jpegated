require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA_API_KEY, MNEMONIC, LOCAL_MNEMONIC } = process.env;

module.exports = {
  networks: {
    local: {
      host: "172.25.48.1",
      port: 7545,
      network_id: "1337"
    },
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY), //Infura
      network_id: '5',
      gas: 4465030,
    },
    mumbai: {
      //provider: () => new HDWalletProvider(MNEMONIC, `https://rpc-mumbai.maticvigil.com`),
      provider: () => new HDWalletProvider(MNEMONIC, `https://floral-wider-borough.matic-testnet.discover.quiknode.pro/1ca338a69ef1ab27e9090a156dbb179b1191dadc/`), //QuickNode
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
      },
    linea: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rpc.goerli.linea.build`),
      network_id: 59140,
      },
    polygonZkEvmTestnet: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://summer-multi-smoke.zkevm-testnet.quiknode.pro/09a975c3d4c349ea364b80a0a8bab0ed4d73c225/`), //quicknode
      network_id: 1442 // polygon zkEVM testnet
    },
    XDCApothem: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://erpc.apothem.network`),
      network_id: 51, // XDC Apothem testnet
      gasLimit: 6721975,
      confirmation: 2,
    },
  },
  mocha: {
    // timeout: 100000
  },      
  compilers: {
    solc: {
    version: "0.8.13",
    }
  }
};
