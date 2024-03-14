import React, { useState } from "react";
import { Box, Heading, Text, Flex, Input, Button, Grid, Image, Icon, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "WordPress Theme",
    price: "$49",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjB0aGVtZSUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEwMzk3OTQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "Themes",
  },
  {
    id: 2,
    name: "React UI Kit",
    price: "$39",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHVpJTIwa2l0JTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTAzOTc5NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "UI Kits",
  },
  {
    id: 3,
    name: "iOS App Template",
    price: "$29",
    image: "https://images.unsplash.com/photo-1531986362435-16b427eb9c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpb3MlMjBhcHAlMjB0ZW1wbGF0ZSUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEwMzk3OTQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "App Templates",
  },
  // More products...
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Envato Market
          </Heading>
        </Flex>

        <Flex align="center" justify="space-between" width={{ base: "full", md: "auto" }} mt={{ base: 4, md: 0 }}>
          <Input placeholder="Search products..." mr={2} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Button leftIcon={<FaSearch />} colorScheme="teal" variant="solid">
            Search
          </Button>

          <Icon as={FaShoppingCart} w={6} h={6} ml={6} />

          <Menu>
            <MenuButton as={Avatar} aria-label="Options" icon={<FaUser />} variant="outline" ml={4} />
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Purchases</MenuItem>
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Box p={4}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {filteredProducts.map((product) => (
            <Box key={product.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" mr="2">
                    {product.category}
                  </Text>
                </Box>

                <Heading mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {product.name}
                </Heading>

                <Text fontWeight="bold" fontSize="xl" mt={2}>
                  {product.price}
                </Text>

                <Button mt={4} colorScheme="teal" size="sm" leftIcon={<FaShoppingCart />}>
                  Add to cart
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
