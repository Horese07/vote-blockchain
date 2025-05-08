import { Box, Button, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";

export default function CandidateCard({
  backgroundImage,
  name,
  description,
  votes,
  icon,
  action = false,
  onAdd
}) {
  const textColor = useColorModeValue("white", "white");

  return (
    <Box
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      borderRadius="20px"
      p="20px"
      minH="200px"
      color={textColor}
    >
      <Flex direction="column" h="100%" justify="space-between">
        <Flex justify="space-between">
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb="8px">
              {name}
            </Text>
            <Text fontSize="sm" mb="12px">
              {description}
            </Text>
          </Box>
          {icon}
        </Flex>
        
        {action ? (
          <Button
          bg="teal.300" 
            colorScheme="gray" 
            onClick={onAdd}
          >
            Ajouter
          </Button>
        ) : (
          <Text fontSize="2xl" fontWeight="bold">
            {votes} votes
          </Text>
        )}
      </Flex>
    </Box>
  );
}