#!/bin/bash
truffle compile
truffle migrate --network local
truffle migrate --network goerli
truffle migrate --network mumbai
truffle migrate --network linea
truffle migrate --network polygonZkEvmTestnet
truffle migrate --network XDCApothem
