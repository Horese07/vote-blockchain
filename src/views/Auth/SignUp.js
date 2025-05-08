// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
function SignUp() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  const history = useHistory();

  const handleLogin = () => {
    // Your authentication logic here
    history.push('/auth/vote'); // Use history.push instead of navigate
  };

  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          Bienvenue sur Election App!
        </Text>
        <Text
          fontSize='md'
          color='white'
          fontWeight='normal'
          mt='10px'
          mb='26px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
          Votre plateforme de confiance pour voter en toute sécurité et transparence.
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            Connectez-vous
          </Text>

          <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              CIN
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Entrer votre CIN'
              mb='24px'
              size='lg'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Verification Code
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='password'
              placeholder='Your password'
              mb='24px'
              size='lg'
            />
            <FormControl display='flex' alignItems='center' mb='24px'>
              <Switch id='remember-login' colorScheme='teal' me='10px' />
              <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                Se souvenir de moi
              </FormLabel>
            </FormControl>
            <Button
              type='submit'
              onClick={handleLogin}
              bg='teal.300'
              fontSize='15px'
              color='white'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
              //onClick={() => window.location.href = "/auth/vote"} // Redirection vers la page de vote
            > 
              Connecter
            </Button>
          </FormControl>

        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
