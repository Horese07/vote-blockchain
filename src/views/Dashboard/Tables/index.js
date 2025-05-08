// Chakra imports
import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
  Textarea
} from "@chakra-ui/react";
import React, { useState } from "react";
import Authors from "./components/Authors";
import { tablesTableData } from "variables/general";

function Tables() {
  const [electionData, setElectionData] = useState({
    title: "",
    candidats: "",
    startDate: "",
    endDate: "",
    status: "pending"
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElectionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your API
    toast({
      title: "Election Created",
      candidats: "New election has been successfully created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Reset form
    setElectionData({
      title: "",
      candidats: "",
      startDate: "",
      endDate: "",
      status: "pending"
    });
  };

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} px={{ base: "4", md: "10" }}>
      {/* Create Election Section */}
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        p={6}
        mb={8}
      >
        <Text fontSize="xl" fontWeight="bold" mb={6} color="gray.700">
          Créer une nouvelle élection
        </Text>

        <form onSubmit={handleSubmit}>
          <Flex direction={{ base: "column", md: "row" }} gap={6} mb={6}>
            <FormControl flex={1}>
              <FormLabel>Titre de l'élection</FormLabel>
              <Input
                name="title"
                value={electionData.title}
                onChange={handleChange}
                placeholder="Entrer le titre de l'élection"
                required
              />
            </FormControl>

            <FormControl flex={1}>
              <FormLabel>Status</FormLabel>
              <Select
                name="status"
                value={electionData.status}
                onChange={handleChange}
              >
                <option value="pending">En attente</option>
                <option value="active">Active</option>
                <option value="completed">Complète</option>
              </Select>
            </FormControl>
          </Flex>

          <FormControl mb={6}>
            <FormLabel>Candidats</FormLabel>
            <Textarea
              name="candidats"
              value={electionData.candidats}
              onChange={handleChange}
              placeholder="Entrer les candidats de l'election "
              rows={3}
            />
          </FormControl>

          <Flex direction={{ base: "column", md: "row" }} gap={6} mb={6}>
            <FormControl flex={1}>
              <FormLabel>Date de Début</FormLabel>
              <Input
                name="startDate"
                type="datetime-local"
                value={electionData.startDate}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl flex={1}>
              <FormLabel>Date de Fin</FormLabel>
              <Input
                name="endDate"
                type="datetime-local"
                value={electionData.endDate}
                onChange={handleChange}
                required
              />
            </FormControl>
          </Flex>

          <Flex justify="flex-end">
            <Button
              bg="teal.300"
              type="submit"
              colorScheme="teal"
              px={8}
              size="lg"
            >
              Créer l'élection
            </Button>
          </Flex>
        </form>
      </Box>

      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        p={6}
        mb={8}>
        <Flex justify="center" gap={10}>
          <Button
            bg="teal.300"
            type="submit"
            colorScheme="teal"
            px={8}
            size="lg"
          >
            Importer
          </Button>
          <Button
          bg="teal.300"
            px={8}
            type="submit"
            size="lg"
            colorScheme="teal"
          >
            Générer
          </Button>
        </Flex>
      </Box>

      {/* Tables Section */}
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        p={6}
      >
        <Authors
          title={"Table des Élections"}
          captions={["ID", "TITRE", "STATUS", "CANDIDATS", "DATE DE DÉBUT", "DATE DE FIN"]}
          data={tablesTableData.map(item => ({
            ...item,
            // Si nécessaire, transformez les données ici
          }))}
        />
      </Box>
    </Flex>
  );
}

export default Tables;