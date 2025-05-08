// Chakra imports
import { Box, Flex, Grid, Icon, Text, Image } from "@chakra-ui/react";
// Assets
import CandidateBg from "assets/img/BackgroundCard1.png";
import CandidateBg1 from "assets/img/Merkel-Official.jpg";
import CandidateBg2 from "assets/img/Alain-Berset.png";
import { FaUserPlus, FaUsers, FaVoteYea } from "react-icons/fa";
import React, { useState } from "react";
import {
  candidatesData,
  electionStats,
  recentVotes,
} from "variables/general";
import CandidateCard from "./components/CandidateCard";
import AddCandidateForm from "./components/AddCandidateForm";
import ElectionStatistics from "./components/ElectionStatistics";
import VoteResults from "./components/VoteResults";

function Billing() {
  const [candidates, setCandidates] = useState(candidatesData);
  const handleAddCandidate = (newCandidate) => {
    setCandidates([...candidates, {
      ...newCandidate,
      id: candidates.length + 1,
      votes: 0
    }]);
  };

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} px={{ base: "4", md: "10" }}>
      <Box
              bg="white"
              borderRadius="lg"
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              p={6}
              mb={8}
            >
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr",
            }}
            gap='26px'
            mb='26px'
          >
            <CandidateCard
              backgroundImage={CandidateBg}
              name={"Nouveau Candidat"}
              description={"Ajoutez un nouveau candidat"}
              icon={
                <Icon
                  as={FaUserPlus}
                  w='48px'
                  h='auto'
                  color='white'
                />
              }
              action
              onAdd={handleAddCandidate}
            />
            
            {candidates.slice(0, 2).map((candidate, index) => (
              <CandidateCard
                key={candidate.id}
                backgroundImage={index === 0 ? CandidateBg1 : CandidateBg2}
              
                name={candidate.name}
                description={candidate.description}
                votes={candidate.votes}
                
              />
            ))}
          </Grid>
          
          <AddCandidateForm 
            title={"Formulaire d'ajout"}
            onAddCandidate={handleAddCandidate}
          />
        </Box></Box>
        <Box
              bg="white"
              borderRadius="lg"
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              p={6}
              mb={8}
            >
       
      
      <Grid templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }} gap='26px'>
        <VoteResults
          title={"Résultats des votes"}
          data={candidates}
        />
        
        <Box>
          <Text fontSize='xl' fontWeight='bold' mb='24px'>
            Derniers votes
          </Text>
          {recentVotes.map((vote, index) => (
            <Flex 
              key={index} 
              mb='16px' 
              p='16px' 
              bg='white' 
              borderRadius='lg'
              boxShadow='sm'
            >
              <Icon as={FaUsers} mr='12px' color='gray.400' />
              <Box>
                <Text fontWeight='bold'>{vote.voter}</Text>
                <Text fontSize='sm' color='gray.500'>
                  A voté pour {vote.candidate} • {vote.time}
                </Text>
              </Box>
            </Flex>
          ))}
        </Box>
      </Grid></Box>
    </Flex>
  );
}

export default Billing;