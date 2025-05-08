import { Box, Flex, Text } from "@chakra-ui/react";

export default function ElectionStatistics({ title, stats, icon }) {
  return (
    <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
      <Flex align="center" mb={4}>
        {icon}
        <Text fontSize="xl" fontWeight="bold" ml={2}>{title}</Text>
      </Flex>
      {stats.map((stat, i) => (
        <Flex key={i} justify="space-between" my={1}>
          <Text>{stat.title}</Text>
          <Text fontWeight="bold">{stat.value}</Text>
        </Flex>
      ))}
    </Box>
  );
}
