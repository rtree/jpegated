require("dotenv").config();

const { TOKEN_URI } = process.env;

// Loading the compiled contract Json
const contractJson = require("../build/contracts/TestNFT.json");

let contractAddress;
let publicAddress;
switch(process.argv[5])
{
  case "local":
    contractAddress = contractJson.networks[1337].address; //1337
    publicAddress   = "0xfc5720cF9a1BEc977aa5E81b02B26F317b375A9A";
    break;
  case "goerli":
    contractAddress = contractJson.networks[5].address; //5
    publicAddress   = "0x485A974140923524a74B0D72aF117852F31B412D";
    break;
  case "mumbai":
    contractAddress = contractJson.networks[80001].address; //80001
    publicAddress   = "0x485A974140923524a74B0D72aF117852F31B412D";
    break;
  case "linea":
    contractAddress = contractJson.networks[59140].address;; //59140
    publicAddress   = "0x485A974140923524a74B0D72aF117852F31B412D";
    break;
  case "polygonZkEvmTestnet":
    contractAddress = contractJson.networks[1442].address;; //1442
    publicAddress   = "0x485A974140923524a74B0D72aF117852F31B412D";
    break;
  case "XDCApothem":
    contractAddress = contractJson.networks[51].address;; //51
    publicAddress   = "0x485A974140923524a74B0D72aF117852F31B412D";
    break;
}

module.exports = async function (callback) {
  // web3 is injected by Truffle
  
  const contract = new web3.eth.Contract(
    contractJson.abi,
    contractAddress, // this is the address generated when running migrate
  );
  const network = await web3.eth.net.getNetworkType();
  // Generate a transaction to calls the `mintNFT` method
  const tx = contract.methods.mintNFT(publicAddress, TOKEN_URI);
  // Send the transaction to the network
  const receipt = await tx
    .send({
      from: (await web3.eth.getAccounts())[0], // uses the first account in the HD wallet
      gas: await tx.estimateGas(),
    })
    .on("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      console.log(`https://${network}.etherscan.io/tx/${txhash}`);
    })
    .on("error", function (error) {
      console.error(`An error happened: ${error}`);
      callback();
    })
    .then(function (receipt) {
      // Success, you've minted the NFT. The transaction is now on chain!
      console.log(
        `Success: The NFT has been minted and mined in block ${receipt.blockNumber}`,
      );
      callback();
    });
};