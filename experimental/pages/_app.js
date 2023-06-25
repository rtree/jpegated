

import { EthereumClient, w3mConnectors, w3mProvider     } from '@web3modal/ethereum'
import { Web3Modal, Web3Button                          } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig     } from 'wagmi'
import { goerli, polygonMumbai, xdcTestnet, lineaTestnet } from 'wagmi/chains'

function WrapperApp({ Component, pageProps }){
  const chains           = [ goerli, polygonMumbai, xdcTestnet, lineaTestnet ] // right seems not to exist: xdcTestnet, lineaTestnet
  const projectId        = 'f6366bf277bf84b6d1da831b99be7fc6'     //specific for each project, get from https://cloud.walletconnect.com/sign-in
  const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiConfig      = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    publicClient
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains)
  
  return(
    <>
      <WagmiConfig config={wagmiConfig}>
        <Web3Button />
        <MyApp Component={Component} pageProps={pageProps} />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

//===================================================================================================
import * as React from "react";
import {
  ChakraProvider,
  Box,
  LinkBox,
  LinkOverlay,
  HStack,
  extendTheme,
  ColorModeScript,
  useColorModeValue,
  Flex
} from "@chakra-ui/react";
import { UUIDContext, NetworkContext } from "../context";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import "@fontsource/londrina-solid"; // Defaults to weight 400
const id = uuid();
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
    router.push(url);
  }
  const bg = useColorModeValue("gray.800", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex direction="column" minH="100vh" bg={bg} w="100%" p={4} color="neon.500" justify="space-between" pb={8}>
        <NetworkContext.Provider value={"lineaGoerli"}>
          <UUIDContext.Provider value={{ id }}>
            <Component {...pageProps} />
          </UUIDContext.Provider>
        </NetworkContext.Provider>
        <HStack spacing={8} mb={4}>
          <LinkBox
            flex="1"
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            borderColor={borderColor}
            rounded="md"
            _hover={{ boxShadow: "lg" }}
          >
            <LinkOverlay onClick={() => navigate("/")}>Home</LinkOverlay>
          </LinkBox>
          <LinkBox
            flex="1"
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            borderColor={borderColor}
            rounded="md"
            _hover={{ boxShadow: "lg" }}
          >
            <LinkOverlay onClick={() => navigate(`/issue?id=${id}`)}>
              Issue Ticket
            </LinkOverlay>
          </LinkBox>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
}
export default WrapperApp;
