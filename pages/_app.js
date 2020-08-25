import Router from "next/router";
import Link from "next/link";

import NProgress from "nprogress";
import ThemeContainer from "../contexts/theme/ThemeContainer";
import { Flex, Text, Box, Link as ChakraLink, Button } from "@chakra-ui/core";

Router.events.on("routeChangeStart", function (url) {
  console.log(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on("routeChangeComplete", function () {
  NProgress.done();
});

Router.events.on("routeChangeError", function () {
  NProgress.done();
});

function App({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Flex align="center" flexDirection="column" height="100vh" width="100%">
        <Box
          postion="fixed"
          d="flex"
          p={4}
          width="100%"
          gridGap="50px"
          justifyContent="center"
          alignItems="center"
          bg="gray.600"
          mb="5"
        >
          <Link href="/">
            <a>PROJETOS</a>
          </Link>
          <Link href="/quem-sou">
            <a>QUEM SOU ?</a>
          </Link>
        </Box>
        <Flex
          width="90%"
          align="center"
          justify="center"
          alignItems="center"
          flex="1"
        >
          <Component {...pageProps} />
        </Flex>
        <Flex
          p={4}
          width="100%"
          gridGap="50px"
          justify="center"
          bg="gray.600"
          mt={5}
        >
          <Text>Palmas-To, {new Date().toLocaleString()}</Text>
        </Flex>
      </Flex>
    </ThemeContainer>
  );
}

export default App;
