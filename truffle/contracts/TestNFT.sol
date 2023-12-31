//Contract based on [https://docs.openzeppelin.com/contracts/4.x/erc721](https://docs.openzeppelin.com/contracts/4.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;  // <--- import Strings for using toString function
    Counters.Counter private _tokenIds;

    constructor() ERC721("Test NFT", "TFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public  // <--- Ensure only the owner can mint tokens
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, string(abi.encodePacked(tokenURI, newItemId.toString())));  // <--- Concatenate the tokenURI and newItemId

        return newItemId;
    }
}