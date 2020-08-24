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
    <div>
      {/*<nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <a>PROJETOS</a>
            </Link>
          </li>
          <li>
            <Link href="/quem-sou">
              <a>QUEM SOU ?</a>
            </Link>
          </li>
        </ul>
      </nav>*/}

      <ThemeContainer>
        <Flex align="center" flexDirection="column" height="100vh" width="100%">
          <Flex
            height="10"
            width="100%"
            gridGap="50px"
            justify="center"
            padding="5px 0px 0 5px"
          >
            <Link href="/"><a>PROJETOS</a></Link>
            <Link href="/quem-sou"><a>QUEM SOU ?</a></Link>
          </Flex>
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
            height="10"
            width="100%"
            gridGap="50px"
            justify="center"
            padding="5px 0px 0 5px"
          >
            <Text>Footer</Text>
          </Flex>
        </Flex>
      </ThemeContainer>

      {/*<footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>*/}
    </div>
  );
}

export default App;
