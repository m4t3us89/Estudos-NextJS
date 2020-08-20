import { useEffect, useState } from "react";
import api from "./../services/axios";
import styles from "../styles/Home.module.css";

const baseUrlGitLab = process.env.BASE_URL_GITLAB;
const baseUrlGitHub = process.env.BASE_URL_GITHUB;

function Home() {
  const [projetos, setProjeto] = useState([]);
  const [perfis, setPerfil] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  return (
    <div className={styles.homeContainer}>
      {perfis.length > 0 ? (
        <>
          <div
            className="card"
            style={{ maxWidth: "310px", width: "100%", height: "100%" }}
          >
            <img
              style={loaded ? {} : { display: "none" }}
              className="card-img-top"
              src={perfis[1]?.avatar_url}
              style={{ height: "300px", width: "100%" }}
              onLoad={() => setLoaded(true)}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title">{perfis[0]?.name}</h5>
              <p className="card-text">{perfis[0]?.bio}</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <a href={perfis[0]?.html_url} target="blank">
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
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            {projetos.map((projeto, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <h5 className="card-title">{projeto?.name} </h5>
                  <small className="text-muted">{projeto?.language}</small>
                  <p className="card-text">
                    {projeto.description
                      ? projeto.description
                      : "Não há descrição"}
                  </p>
                  <br />
                  <a
                    href={projeto?.html_url || projeto?.http_url_to_repo}
                    target="blank"
                    className="btn btn-secondary btn-sm"
                    style={{
                      width: "85%",
                      position: "absolute",
                      bottom: 0,
                      margin: "20px 0px 10px 0px",
                    }}
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              position: "fixed",
              right: "0",
              bottom: "0",
              padding: "10px",
            }}
          >
            {" "}
            <small className="text-muted">PROJETOS: {projetos.length}</small>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Home;
