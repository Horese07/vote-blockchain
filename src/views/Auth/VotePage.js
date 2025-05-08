// Chakra imports
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import { 
    Box, 
    Button, 
    Flex, 
    Text, 
    VStack, 
    Image, 
    useColorModeValue, 
    Icon, 
    Badge, 
    Progress, 
    Divider 
  } from "@chakra-ui/react";
  import { FaVoteYea, FaLock, FaChartBar } from "react-icons/fa";
  import candidateImg1 from 'assets/img/Merkel-Official.jpg';
  import candidateImg2 from 'assets/img/Alain-Berset.png';
  function VotePage() {
    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const cardBg = useColorModeValue("gray.50", "gray.800");
  
    const candidates = [
      {
        id: 1,
        name: "Candidate A",
        description: "Fonctionnaire expérimenté avec plus de 10 ans d'expérience en leadership communautaire",
        image: candidateImg1,
        progress: 55
      },
      {
        id: 2,
        name: "Candidate B",
        description: "Entrepreneur innovant et visionnaire, spécialisé dans le développement économique durable.",
        image: candidateImg2,
        progress: 45
      }
    ];
  
    return (
      <Flex
        direction='column'
        alignSelf='center'
        justifySelf='center'
        overflow='hidden'
        minH='100vh'
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        <Flex
          direction='column'
          textAlign='center'
          justifyContent='center'
          align='center'
          mt='2rem'
          mb='30px'
        >
          <Icon as={FaVoteYea} w={12} h={12} color='teal.300' mb='4' />
          <Text fontSize='4xl' color={textColor} fontWeight='bold'>
          Votez pour votre candidat préféré
          </Text>
          <Text
            fontSize='md'
            color={textColor}
            fontWeight='normal'
            mt='10px'
            mb='26px'
            w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
          >
            Votre vote est sécurisé et anonyme. Sélectionnez votre choix ci-dessous.
          </Text>
        </Flex>
  
        <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
          <VStack spacing={6} w={{ base: "90%", md: "80%", lg: "60%" }}>
            {candidates.map((candidate) => (
              <Card key={candidate.id} w='100%' bg={cardBg} boxShadow='lg'>
                <CardBody>
                  <Flex direction={{ base: "column", md: "row" }} align='center'>
                    <Image
                      src={candidate.image}
                      alt={candidate.name}
                      borderRadius='full'
                      boxSize='100px'
                      objectFit='cover'
                      mr={{ md: 6 }}
                      mb={{ base: 4, md: 0 }}
                    />
                    
                    <Box flex={1} width="100%" mb={4}>
                      <Text fontSize='xl' fontWeight='bold' mb={2}>
                        {candidate.name}
                      </Text>
                      <Text mb={4}>{candidate.description}</Text>
                      <Progress value={candidate.progress} size='sm' colorScheme='orange' mb={4} />
                      <Button
                      width="100%"
                      bg="teal.300"
                        colorScheme='teal.300'
                        rightIcon={<FaLock />}
                        w='100%'
                      >
                        Select {candidate.name}
                      </Button>
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </VStack>
        </Flex>
  
        <Box textAlign='center' pb={8}>
          <Divider mb={4} />
          <Text fontSize='sm' color='gray.500'>
            <Icon as={FaChartBar} mr={2} /> Les résultats en temps réel seront disponibles après la fin du vote
          </Text>
        </Box>
      </Flex>
    );
  }
  
  export default VotePage;