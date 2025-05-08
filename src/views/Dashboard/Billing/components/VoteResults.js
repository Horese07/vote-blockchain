import { Box, Progress, Text, VStack } from "@chakra-ui/react";

export default function VoteResults({ title, data }) {
    const totalVotes = data.reduce((sum, c) => sum + c.votes, 0);

    return (
        <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold" mb={4}>{title}</Text>
            <VStack spacing={3} align="stretch">
                {data.map(candidate => {
                    const percent = totalVotes ? (candidate.votes / totalVotes) * 100 : 0;
                    return (
                        <Box key={candidate.id}>
                            <Text fontWeight="bold">{candidate.name}</Text>
                            <Progress value={percent} sx={{
                                '& > div': {
                                    background: '#FF6B6B'
                                }
                            }} colorScheme="#CD81A1" borderRadius="md" />
                            <Text fontSize="sm">{candidate.votes} votes ({percent.toFixed(1)}%)</Text>
                        </Box>
                    );
                })}
            </VStack>
        </Box>
    );
}
