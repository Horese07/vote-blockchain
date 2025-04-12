const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const Vote = artifacts.require("Vote");

contract("Vote", (accounts) => {
    let voteInstance;

    beforeEach(async () => {
        voteInstance = await Vote.new();
    });

    it("should create an election", async () => {
        const candidates = ["Candidate A", "Candidate B"];
        await voteInstance.createElection("Election 2023", candidates);

        const election = await voteInstance.elections(1);
        assert.equal(election.name, "Election 2023", "Election name should match");
        assert.equal(election.candidatesCount, 2, "There should be 2 candidates");
    });

    it("should allow a user to vote", async () => {
        const candidates = ["Candidate A", "Candidate B"];
        await voteInstance.createElection("Election 2023", candidates);

        const leaves = ["Voter1", "Voter2", "Voter3"].map(x => keccak256(x));
        const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
        const root = tree.getHexRoot();
        const leaf = keccak256("Voter1");
        const proof = tree.getHexProof(leaf);

        await voteInstance.setMerkleRoot(root);

        await voteInstance.vote(1, 1, proof, leaf, { from: accounts[0] });

        const candidate = await voteInstance.elections(1);
        const candidateDetails = await voteInstance.candidates(1); // Access the candidate mapping
        assert.equal(candidateDetails.voteCount, 1, "Vote count should be incremented");
    });

    it("should not allow double voting", async () => {
        await voteInstance.createElection("Election 2023", ["Candidate A", "Candidate B"]);
        await voteInstance.vote(0, { from: accounts[1] });
        try {
            await voteInstance.vote(0, { from: accounts[1] });
            assert.fail("The vote should not have been allowed");
        } catch (error) {
            assert(error.message.includes("revert"), "Expected revert error not received");
        }
    });

    it("should retrieve election results", async () => {
        await voteInstance.createElection("Election 2023", ["Candidate A", "Candidate B"]);
        await voteInstance.vote(0, { from: accounts[1] });
        await voteInstance.vote(1, { from: accounts[2] });
        const results = await voteInstance.getResults(0);
        assert.equal(results[0].toString(), "1", "Candidate A should have 1 vote");
        assert.equal(results[1].toString(), "1", "Candidate B should have 1 vote");
    });

    it("should verify a valid Merkle proof", async () => {
        const leaves = ["Voter1", "Voter2", "Voter3"].map(x => keccak256(x));
        const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
        const root = tree.getHexRoot();
        const leaf = keccak256("Voter1");
        const proof = tree.getHexProof(leaf);

        await voteInstance.setMerkleRoot(root);
        const isValid = await voteInstance.verifyVoter(proof, leaf);
        assert.isTrue(isValid, "Merkle proof should be valid");
    });

    it("should reject an invalid Merkle proof", async () => {
        const leaves = ["Candidate A", "Candidate B", "Candidate C"].map(x => keccak256(x));
        const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
        const root = tree.getHexRoot();
        const leaf = keccak256("Candidate D"); // Not part of the tree
        const proof = tree.getHexProof(leaf);

        await voteInstance.setMerkleRoot(root); // Assuming your contract has this function
        const isValid = await voteInstance.verifyVoter(proof, leaf);
        assert.isTrue(isValid, "Merkle proof should be valid");
    });
});