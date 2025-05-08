// Chakra imports
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// Custom icons
import {
  CartIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,PersonIcon
} from "components/Icons/Icons.js";
import React from "react";
import ChartStatistics from "./ChartStatistics";

const ActiveUsers = ({ title, percentage, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='16px'>
      <CardBody>
        <Flex direction='column' w='100%'>
          {chart}
          <Flex direction='column' mt='24px' mb='36px' alignSelf='flex-start'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
              {title}
            </Text>
            <Text fontSize='md' fontWeight='medium' color='gray.400'>
              <Text
                as='span'
                color={percentage > 0 ? "green.400" : "red.400"}
                fontWeight='bold'>
                {percentage > 0 ? `+${percentage}%` : `-${percentage}%`}
              </Text>{" "}
              Que la semaine dernière
            </Text>
          </Flex>
          <SimpleGrid gap={{ sm: "12px" }} columns={3}>
            <ChartStatistics
              title={"Candidat A"}
              amount={"20%"}
              percentage={20}
              icon={<PersonIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Candidat B"}
              amount={"50%"}
              percentage={50}
              icon={<PersonIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"Candidat C"}
              amount={"30%"}
              percentage={30}
              icon={<PersonIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            
          </SimpleGrid>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ActiveUsers;
