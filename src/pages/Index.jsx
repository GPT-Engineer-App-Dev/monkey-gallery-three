import { Box, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Image src="https://via.placeholder.com/300?text=Monkey+1" alt="Monkey in natural setting" boxSize="300px" objectFit="cover" />
        <Image src="https://via.placeholder.com/300?text=Monkey+2" alt="Playful monkey" boxSize="300px" objectFit="cover" />
        <Image src="https://via.placeholder.com/300?text=Monkey+3" alt="Monkey climbing tree" boxSize="300px" objectFit="cover" />
      </SimpleGrid>
    </Box>
  );
};

export default Index;