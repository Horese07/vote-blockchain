const MerkleTree = artifacts.require("MerkleTree");
const Vote = artifacts.require("Vote");

module.exports = async function (deployer) {
    // Replace with the actual Merkle Root generated from the JSON file
    const merkleRoot = "0x..."; // Output from `console.log("Merkle Root:", root)`

    // Deploy MerkleTree contract
    await deployer.deploy(MerkleTree, merkleRoot);
    const merkleTreeInstance = await MerkleTree.deployed();

    // Deploy Vote contract with the MerkleTree address
    await deployer.deploy(Vote, merkleTreeInstance.address);
};