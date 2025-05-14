// SPDX-License-Identifier: MIT
// This file contains the main smart contract for the voting system, written in Solidity. 
// It defines the voting logic, including functions for creating elections, casting votes, and retrieving results.

pragma solidity ^0.8.0;

import "./MerkleTree.sol";

contract Vote {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    struct Election {
        uint id;
        string name;
        bool isActive;
        mapping(uint => Candidate) candidates;
        uint candidatesCount;
    }

    mapping(uint => Election) public elections;
    mapping(address => mapping(uint => bool)) public hasVoted;
    uint public electionsCount;

    MerkleTree public merkleTree;

    event ElectionCreated(uint id, string name);
    event VoteCast(uint electionId, uint candidateId);

    constructor(address _merkleTreeAddress) {
        merkleTree = MerkleTree(_merkleTreeAddress);
    }

    function createElection(string memory _name, string[] memory _candidateNames) public {
        electionsCount++;
        Election storage newElection = elections[electionsCount];
        newElection.id = electionsCount;
        newElection.name = _name;
        newElection.isActive = true;

        for (uint i = 0; i < _candidateNames.length; i++) {
            newElection.candidatesCount++;
            newElection.candidates[newElection.candidatesCount] = Candidate({
                id: newElection.candidatesCount,
                name: _candidateNames[i],
                voteCount: 0
            });
        }

        emit ElectionCreated(newElection.id, _name);
    }

    function addCandidate(uint _electionId, string memory _name) public {
        require(elections[_electionId].isActive, "Election is not active");
        Election storage election = elections[_electionId];
        election.candidatesCount++;
        election.candidates[election.candidatesCount] = Candidate(election.candidatesCount, _name, 0);
    }

    function vote(uint _electionId, uint _candidateId, bytes32[] memory proof, bytes32 leaf) public {
        require(!hasVoted[msg.sender][_electionId], "You have already voted in this election");
        require(elections[_electionId].isActive, "Election is not active");
        require(_candidateId > 0 && _candidateId <= elections[_electionId].candidatesCount, "Invalid candidate ID");

        // Verify the voter using Merkle Proof
        require(merkleTree.verify(proof, leaf), "Invalid voter");

        hasVoted[msg.sender][_electionId] = true;
        elections[_electionId].candidates[_candidateId].voteCount++;

        emit VoteCast(_electionId, _candidateId);
    }

    function getResults(uint _electionId) public view returns (uint[] memory, string[] memory) {
        require(!elections[_electionId].isActive, "Election is still active");
        
        uint candidatesCount = elections[_electionId].candidatesCount;
        uint[] memory voteCounts = new uint[](candidatesCount);
        string[] memory candidateNames = new string[](candidatesCount);

        for (uint i = 1; i <= candidatesCount; i++) {
            Candidate memory candidate = elections[_electionId].candidates[i];
            voteCounts[i - 1] = candidate.voteCount;
            candidateNames[i - 1] = candidate.name;
        }

        return (voteCounts, candidateNames);
    }
    function getLiveVotes(uint _electionId) public view returns (uint[] memory, string[] memory) {
        require(elections[_electionId].isActive, "Election must be active");

        uint candidatesCount = elections[_electionId].candidatesCount;
        uint[] memory voteCounts = new uint[](candidatesCount);
        string[] memory candidateNames = new string[](candidatesCount);

        for (uint i = 1; i <= candidatesCount; i++) {
             Candidate memory candidate = elections[_electionId].candidates[i];
             voteCounts[i - 1] = candidate.voteCount;
             candidateNames[i - 1] = candidate.name;
        }

        return (voteCounts, candidateNames);
    }



    function endElection(uint _electionId) public {
        require(elections[_electionId].isActive, "Election is already ended");
        elections[_electionId].isActive = false;
    }
}