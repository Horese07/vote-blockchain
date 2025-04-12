import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import VoteContract from '../contracts/Vote.json';

const VotingInterface = () => {
    const [account, setAccount] = useState('');
    const [candidates, setCandidates] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState('');
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
                deployedNetwork && deployedNetwork.address,
            );
            setContract(instance);
            loadCandidates(instance);
        };

        init();
    }, []);

    const loadCandidates = async (instance) => {
        const candidateCount = await instance.methods.getCandidateCount().call();
        const candidatesList = [];
        for (let i = 0; i < candidateCount; i++) {
            const candidate = await instance.methods.candidates(i).call();
            candidatesList.push(candidate);
        }
        setCandidates(candidatesList);
    };

    const handleVote = async () => {
        if (!selectedCandidate) {
            setMessage('Please select a candidate to vote for.');
            return;
        }

        try {
            await contract.methods.vote(selectedCandidate).send({ from: account });
            setMessage('Vote cast successfully!');
            loadCandidates(contract);
        } catch (error) {
            setMessage('Error casting vote. Please try again.');
        }
    };

    return (
        <div>
            <h1>Voting Interface</h1>
            <h2>Account: {account}</h2>
            <div>
                <h3>Select a Candidate:</h3>
                {candidates.map((candidate, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            value={candidate}
                            onChange={(e) => setSelectedCandidate(e.target.value)}
                        />
                        {candidate}
                    </div>
                ))}
            </div>
            <button onClick={handleVote}>Vote</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default VotingInterface;