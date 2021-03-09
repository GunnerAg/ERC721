# ERC721

This contains work from https://github.com/dappuniversity and it is a modification of a cloned repo on NFT.
Big shout-out to hes tutorial on https://www.youtube.com/watch?v=YPbgjPPC1d0&t=3736s
The original repo can be found here https://github.com/dappuniversity/nft

External resources related to this proyect are:

  React is a front-end library and Bootstrap provides build in styled components.
- https://es.reactjs.org
- https://react-bootstrap.github.io

  Ethereum Virtual Machine (EVM) testing framework and asset pipeline for blockchains.
- https://www.trufflesuite.com/docs/truffle/overview

  The web3.js library is a collection of modules that contain functionality for the ethereum ecosystem.
- https://web3js.readthedocs.io/en/v1.3.4/

  Library for smart contracts following standards (like the ERC721)
- https://openzeppelin.com

  Contract oriented High-level programming language.
- https://solidity-es.readthedocs.io/es/latest

  Crypto wallet extension for Chrome.
- https://metamask.io

  For testing
- https://mochajs.org
- https://www.chaijs.com

My changes from the original repo are:

- Some fixes for new solidity versions.
- Used the openzeppellin library import rather than a copy of the source code.
- Used hooks and functional components on the App.js as well as onChange event litsener.
- Added a RegExp to check for valid href colors on the mint function at App.js
- Added my own css to display the colors.

Future changes to this repo might be:

- Use metadata or tokenURI methods rather than the Colors array.
- Add restrictions on the mint function to an owner.
- Add new related data to the Color contract.
- Add new contracts.

