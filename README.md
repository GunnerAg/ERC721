# ERC721
A modification of a cloned repo on NFT
The original repo can be found here https://github.com/dappuniversity/nft

My changes are:

-Some fixes for new solidity versions.
-I used the openzeppellin library import rather than a copy of the source code.
-I used hooks and functional components on the App.js as well as onChange event litsener.
-I added a RegExp to check for valid href colors on the mint function at App.js
-I added my own css to display the colors.

Future changes would be:

- Use metadata or tokenURI methods rather than the Colors array.
- Add restrictions on the mint function to an owner.
- Add new related data to the Color contract.
- Add new contracts.
