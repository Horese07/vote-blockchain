import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import VoteContract from '../vote.json';

const CONTRACT_ELECTION_ID = 1;

const VotingInterface = () => {
    const [account, setAccount] = useState('');
    const [candidates, setCandidates] = useState([]);
    const [selectedCandidateId, setSelectedCandidateId] = useState(null);
    const [message, setMessage] = useState('');
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const init = async () => {
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);

            const networkId = await web3.eth.net.getId();
            const deployedNetwork = VoteContract.networks[networkId];
            const instance = new web3.eth.Contract(
                VoteContract.abi,
                deployedNetwork && deployedNetwork.address
            );
            setContract(instance);
            fetchCandidates(instance);
            setInterval(() => fetchCandidates(instance), 5000); // Refresh every 5 seconds
        };

        init();
    }, []);

    const fetchCandidates = async (instance) => {
        try {
            const result = await instance.methods.getLiveVotes(CONTRACT_ELECTION_ID).call();
            const names = result[0];
            const votes = result[1];
            const list = names.map((name, i) => ({
                id: i + 1,
                name,
                votes: parseInt(votes[i])
            }));
            setCandidates(list);
        } catch (err) {
            console.error("Failed to fetch live votes:", err);
        }
    };

    const handleVote = async () => {
        if (selectedCandidateId === null) {
            setMessage('Please select a candidate to vote for.');
            return;
        }

        try {
            // Dummy Merkle proof for now — you must replace this with actual proof logic
            const proof = []; 
            const leaf = '0x...'; // Replace with hashed CIN or similar

            await contract.methods.vote(CONTRACT_ELECTION_ID, selectedCandidateId, proof, leaf)
                .send({ from: account });

            setMessage('Vote cast successfully!');
        } catch (error) {
            setMessage('Error casting vote: ' + error.message);
        }
    };

    return (
        <div>
            <h1>Voting Interface</h1>
            <h2>Account: {account}</h2>
            <div>
                <h3>Select a Candidate:</h3>
                {candidates.map((candidate) => (
                    <div key={candidate.id}>
                        <input
                            type="radio"
                            name="candidate"
                            value={candidate.id}
                            onChange={() => setSelectedCandidateId(candidate.id)}
                        />
                        {candidate.name} — {candidate.votes} votes
                    </div>
                ))}
            </div>
            <button onClick={handleVote}>Vote</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default VotingInterface;
