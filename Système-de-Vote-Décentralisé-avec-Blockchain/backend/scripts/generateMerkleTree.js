const fs = require('fs');
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

// Load voter data from the JSON file
const path = require('path');
const voterData = JSON.parse(fs.readFileSync(path.join(__dirname, 'voters.json'), 'utf8'));

// Combine CIN and verification code to create unique identifiers for each voter
const voters = voterData.map(voter => `${voter.CIN}:${voter.verificationCode}`);

// Generate leaves for the Merkle Tree
const leaves = voters.map(voter => keccak256(voter));
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

// Get the Merkle Root
const root = tree.getHexRoot();
console.log("Merkle Root:", root);

// Generate a proof for a specific voter
const leaf = keccak256("CIN1234567890:SMS1234"); // Replace with the actual voter data
const proof = tree.getHexProof(leaf);
console.log("Proof:", proof);