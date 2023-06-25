import * as React from "react"
import { ChakraProvider, Box, LinkBox, LinkOverlay, HStack, extendTheme, ColorModeScript, useColorModeValue } from "@chakra-ui/react"
import { UUIDContext, NetworkContext } from '../context'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid';

const id = uuid()

// 1. Extend the theme to include custom colors.
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    neon: {
      500: "#13f1fc",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  function navigate(url) {
    router.push(url)
  }
  const bg = useColorModeValue("gray.800", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box minH="100vh" bg={bg} w="100%" p={4} color="neon.500">
        <HStack spacing={8}>
          <LinkBox flex="1" as="article" maxW="sm" p="5" borderWidth="1px" borderColor={borderColor} rounded="md" _hover={{ boxShadow: "lg" }}>
            <LinkOverlay onClick={() => navigate("/")}>
              Home
            </LinkOverlay>
          </LinkBox>
          <LinkBox flex="1" as="article" maxW="sm" p="5" borderWidth="1px" borderColor={borderColor} rounded="md" _hover={{ boxShadow: "lg" }}>
            <LinkOverlay onClick={() => navigate(`/issue?id=${id}`)}>
              Issue Ticket
            </LinkOverlay>
          </LinkBox>
        </HStack>
        <NetworkContext.Provider value={'mumbai'}>
          <UUIDContext.Provider  value={{id}}>
            <Component {...pageProps} />
          </UUIDContext.Provider>
        </NetworkContext.Provider>
      </Box>
    </ChakraProvider>
  )
}
export default MyApp
