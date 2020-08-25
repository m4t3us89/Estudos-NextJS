import { useEffect, useState } from "react";
import api from "./../services/axios";
import {
  Flex,
  Text,
  Box,
  Heading,
  Grid,
  useToast,
  Icon,
} from "@chakra-ui/core";

const baseUrlGitLab = process.env.BASE_URL_GITLAB;
const baseUrlGitHub = process.env.BASE_URL_GITHUB;
const tamanhoIcone = 22;
const iconesLinguagem = {
  Python: `<img  src="https://img.icons8.com/dusk/${tamanhoIcone}/000000/python.png"/>`,
  JavaScript: `<img    src="https://img.icons8.com/color/${tamanhoIcone}/000000/javascript.png"/>`,
  TypeScript: `<img src="https://img.icons8.com/color/${tamanhoIcone}/000000/typescript.png"/>`,
  Vue: `<img src="https://img.icons8.com/color/${tamanhoIcone}/000000/vue-js.png"/>`,
  HTML: `<img src="https://img.icons8.com/color/${tamanhoIcone}/000000/html.png"/>`,
  CSS: `<img src="https://img.icons8.com/ios/${tamanhoIcone}/000000/css.png"/>`,
};

function Home() {
  const [projetos, setProjeto] = useState([]);
  const [perfis, setPerfil] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const toast = useToast();

  useEffect(() => {
    async function listarUsuarios() {
      try {
        const { data: usuarioGitHub } = await api.get(
          `${baseUrlGitHub}users/m4t3us89`
        );

        console.log("UsuarioGitHub", usuarioGitHub);

        const { data: usuarioGitLab } = await api.get(
          `${baseUrlGitLab}users/2919291`
        );

        console.log("UsuarioGitLab", usuarioGitLab);

        const todosPerfis = [usuarioGitHub, usuarioGitLab];

        setPerfil(todosPerfis);
      } catch (Err) {
        console.log("err", Err);
      }
    }

    async function listarRepositorios() {
      try {
        const { data: repGitHub } = await api.get(
          `${baseUrlGitHub}users/m4t3us89/repos`
        );

        console.log("RepGitHub", repGitHub);

        setProjeto(repGitHub);

        const { data: repGitLab } = await api.get(
          `${baseUrlGitLab}users/2919291/projects`
        );

        console.log("RepGitLab", repGitLab);

        const todosProjetos = repGitHub.concat(repGitLab);

        console.log("Todos os Projetos", todosProjetos);

        setProjeto(todosProjetos);
      } catch (Err) {
        console.log("err", Err);
      }
    }

    listarRepositorios();
    listarUsuarios();
  }, []);

  function showToast(title, description, status) {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true,
    });
  }

  function removerProjeto(index) {
    const arr = [...projetos];
    arr.splice(index, 1);
    setProjeto(arr);
    showToast(
      "Projeto removido",
      "Seu projeto foi removido com sucesso.",
      "success"
    );
  }

  function CreatePerfis(title) {
    return (
      <Flex alignItems="center" justifyContent="center" gridGap="30px" mt={10}>
        <a href={title?.html_url} target="blank">
          <svg
            className="octicon octicon-mark-github v-align-middle"
            height="32"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>

        <a href="https://gitlab.com/m4t3us" target="blank">
          <svg height="32" className="tanuki-logo" viewBox="0 0 36 36">
            <path
              className="tanuki-shape tanuki-left-ear"
              fill="#e24329"
              d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"
            ></path>
            <path
              className="tanuki-shape tanuki-right-ear"
              fill="#e24329"
              d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
            ></path>
            <path
              className="tanuki-shape tanuki-nose"
              fill="#e24329"
              d="M18,34.38 3,14 33,14 Z"
            ></path>
            <path
              className="tanuki-shape tanuki-left-eye"
              fill="#fc6d26"
              d="M18,34.38 11.38,14 2,14 6,25Z"
            ></path>
            <path
              className="tanuki-shape tanuki-right-eye"
              fill="#fc6d26"
              d="M18,34.38 24.62,14 34,14 30,25Z"
            ></path>
            <path
              className="tanuki-shape tanuki-left-cheek"
              fill="#fca326"
              d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
            ></path>
            <path
              className="tanuki-shape tanuki-right-cheek"
              fill="#fca326"
              d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
            ></path>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/allisson-mateus-06a957137"
          target="blank"
        >
          <img src="https://img.icons8.com/color/38/000000/linkedin.png" />
        </a>

        <a href="" target="blank">
          <img src="https://img.icons8.com/fluent/38/000000/twitter.png" />
        </a>
      </Flex>
    );
  }

  return (
    <Box
      gridGap={["10px", "50px"]}
      display="flex"
      flexDirection={["column", "row"]}
      width="100%"
    >
      {projetos.length > 0 ? (
        <>
          <Box
            p={4}
            shadow="md"
            borderWidth="1px"
            width={["100%", "430px"]}
            height="300px"
            rounded="md"
            bg="gray.600"
          >
            <Heading fontSize="xl" textAlign="center">
              <Text>{perfis[0]?.name}</Text>
              <Text>{perfis[0]?.blog}</Text>
              <Text>{perfis[0]?.location}</Text>
            </Heading>
            <Text mt={4}>{perfis[0]?.bio}</Text>

            {perfis[0]?.name ? CreatePerfis(perfis[0]) : ""}
          </Box>

          <Grid
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap={["10px", "50px"]}
          >
            {projetos.map((projeto, index) => (
              <Box
                p={4}
                shadow="md"
                borderWidth="1px"
                rounded="lg"
                key={index}
                bg="gray.700"
                d="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Icon
                  name="close"
                  alignSelf="flex-end"
                  size="10px"
                  color="red.500"
                  cursor="pointer"
                  onClick={() => removerProjeto(index)}
                />
                <Heading fontSize="md" textAlign="center">
                  <Text>{projeto?.name}</Text>
                </Heading>
                <Text mt={4}>
                  {projeto?.description
                    ? projeto?.description
                    : "Não há descrição"}
                </Text>

                <Icon
                  alignSelf="flex-end"
                  name="view"
                  size="18px"
                  color="white.500"
                  cursor="pointer"
                  onClick={() => window.open(projeto?.html_url, "_blank")}
                />
              </Box>
            ))}
          </Grid>
        </>
      ) : (
        ""
      )}
    </Box>
  );
}

export default Home;
