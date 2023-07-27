// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserName {
    
    mapping(address => string) private userNames;

    function registerUserName(string calldata name) public {
        require(bytes(name).length > 0, "Name cannot be empty");
        require(bytes(userNames[msg.sender]).length == 0, "User name already registered");
        
        userNames[msg.sender] = name;
    }

    function getUserName(address userAddress) public view returns (string memory) {
        return userNames[userAddress];
    }
}

// contract deployed at 0xd9145CCE52D386f254917e481eB44e9943F39138 using REMIX IDE at polygon mumbai testnet
