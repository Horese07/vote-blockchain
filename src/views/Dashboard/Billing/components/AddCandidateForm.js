import { useState } from "react";
import { Box, Input, Button, Stack } from "@chakra-ui/react";

export default function AddCandidateForm({ onAddCandidate, title }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (name && description) {
      onAddCandidate({ name, description, avatar: "/img/candidates/default.jpg" });
      setName("");
      setDescription("");
    }
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
      <Stack spacing={3}>
        <strong>{title}</strong>
        <Input placeholder="Nom du candidat" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button onClick={handleSubmit} bg="teal.300" colorScheme="teal">Ajouter</Button>
      </Stack>
    </Box>
  );
}
