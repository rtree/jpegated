
A project repository for ETHGlobal Waterloo (2023)
https://twitter.com/rtree

## Polygon Prize Eligibility - Pool prize
#### link to your deployed smart contract(s) on Polygonscan
 <https://mumbai.polygonscan.com/address/0x4f303ee9851cf84c9826cf690f68c2f57bd0305f>
#### Link to your tweet: Tweet out the link to your Github repo and deployed smart contract.
 <https://ethglobal.com/showcase/jpegated-4w5qs>

## Metamask Prize Eligibility - Just deploy on Linea
#### Link to the deployed contract address on blockscout
<https://explorer.goerli.linea.build/tx/0xbb257f98147e90a9db471ffca7a89ea85227cc189e01c99dd644aceafbbb130d>
#### Linea network configured in your code
<https://github.com/rtree/jpegated/blob/main/truffle/truffle-config.js>
#### Repos must contain a text file named “waterloo.txt” with the phrase “Keep calm and love Waterloo”
<https://github.com/rtree/jpegated/blob/main/waterloo.txt>
#### Code needs to be viewable on GitHub
<https://github.com/rtree/jpegated/>
#### Each submission should have a short video that describes scope and functionality of the dapp
<https://ethglobal.com/showcase/jpegated-4w5qs> ※Top-left pic is movie.

## How to demo

1)Check IP of windows and WSL windows: 10.30.3.251 <-----External accessble IP WSL : 172.25.60.92 <-----Ubuntu IP

2)[Windows] Port forward netsh.exe interface portproxy add v4tov4 listenaddress=* listenport=3000 connectaddress=172.25.60.92 connectport=3000

3)[Windows] Open firewall 3000 port

4)[WSL] Make cert for npm using WINDOWS IP

5)[WSL] npm start HTTPS=true SSL_CRT_FILE=cert.pem SSL_KEY_FILE=key.pem npm start

*)DEBUG from PC chrome://inspect/#devices

Access https://10.30.3.251:3000 from Mobile.



## Deployed Networks


### Goerli

   > Network name:    'goerli'
   > Network id:      5
   > transaction hash:    0x692c033e0895353e2016c2d54638ca455ccfba23633dbce649de60babd77b220
   > contract address:    0x4934C573FA9a8B72EA0325e20CfA4d72365045C2
   > block number:        9235146
   > block timestamp:     1687650588



### Mumbai
   > Network name:    'mumbai'
   > Network id:      80001
   > transaction hash:    0xf3cf586dc431dc46326716202f95d035090af34037ffc63c136123a254ea26be
   > contract address:    0x4f303Ee9851CF84c9826cf690f68c2f57bD0305f


### Linea

   > Network name:    'linea'
   > Network id:      59140
   > transaction hash:    0xbb257f98147e90a9db471ffca7a89ea85227cc189e01c99dd644aceafbbb130d
   > contract address:    0x9234338ba58DC52fE65256855BF50dd12ae0b2c5


### PolygonZkEvm Testnet

   > Network name:    'polygonZkEvmTestnet'
   > Network id:      1442
   > transaction hash:    0x480304c096b48038d18beb1667d4959771c29a1f6e43f47b888f07c5bf20da6f
   > contract address:    0x9234338ba58DC52fE65256855BF50dd12ae0b2c5

### XDC Apothem

   > Network name:    'XDCApothem'
   > Network id:      51
   > transaction hash:    0xe99c9969c23ab5fdb98ebeffce467e016162ec4821d350e112efdb044cc99869
   > contract address:    0xd7C2a36786124738d54AdB710D59abc8d8CAca75
