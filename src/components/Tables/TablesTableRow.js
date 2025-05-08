import { Avatar, Badge, Flex, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const { id, titre, status, candidats, dateDebut, dateFin, logo } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Tr>
      <Td>
        <Text fontSize="sm" color={textColor}>
          {id}
        </Text>
      </Td>
      
      <Td minWidth="200px">
        <Flex align="center">
          {logo && <Avatar src={logo} size="sm" mr={3} />}
          <Text fontWeight="bold">{titre}</Text>
        </Flex>
      </Td>

      <Td>
        <Badge 
          colorScheme={status?.color || "gray"} 
          variant="solid"
        >
          {status?.text || status}
        </Badge>
      </Td>

      <Td minWidth="200px">
        <Text fontSize="sm">{candidats}</Text>
      </Td>

      <Td>
        <Text fontSize="sm">{dateDebut}</Text>
      </Td>

      <Td>
        <Text fontSize="sm">{dateFin}</Text>
      </Td>
    </Tr>
  );
}
export default TablesTableRow;