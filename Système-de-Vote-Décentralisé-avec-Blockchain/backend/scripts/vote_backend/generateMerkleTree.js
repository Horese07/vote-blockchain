// generateMerkleTree.js
const fs = require('fs');
const path = require('path');
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

function loadVoterData() {
  const voterData = JSON.parse(fs.readFileSync(path.join(__dirname, 'voters.json'), 'utf8'));
  const voters = voterData.map(voter => `${voter.CIN}:${voter.verificationCode}`);
  const leaves = voters.map(voter => keccak256(voter));
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  return { tree, voters };
}

module.exports = loadVoterData;

