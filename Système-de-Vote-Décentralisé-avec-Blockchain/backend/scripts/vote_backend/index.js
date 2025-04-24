const express = require('express');
const bodyParser = require('body-parser');
const keccak256 = require('keccak256');
const loadVoterData = require('./generateMerkleTree');

const app = express();
app.use(bodyParser.json());

const { tree } = loadVoterData();
const root = tree.getHexRoot();

app.post('/verify', (req, res) => {
  const { cin, code } = req.body;
  if (!cin || !code) return res.status(400).json({ error: "Missing CIN or code" });

  const leafInput = `${cin}:${code}`;
  const leaf = keccak256(leafInput);
  const proof = tree.getHexProof(leaf);
  const isValid = tree.verify(proof, leaf, root);

  res.json({
    root,
    proof,
    leaf: `0x${leaf.toString('hex')}`,
    isValid
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

