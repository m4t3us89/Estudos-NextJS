import Link from "next/link";
import { useEffect, useState } from "react";
import api from "./../services/axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [repositorios, setRepositorio] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    async function consultarUsuario() {
      try {
        const { data } = await api.get("users/m4t3us89");
        console.log("User", data);
        setUsuario(data);
      } catch (err) {
        console.log("Err", err);
      }
    }

    async function listarRepositorios() {
      try {
        const { data } = await api.get("users/m4t3us89/repos");
        console.log("Rep", data);
        setRepositorio(data);
      } catch (err) {
        console.log("Err", err);
      } finally {
        consultarUsuario();
      }
    }

    listarRepositorios();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {usuario ? (
        <>
          <div
            className="card"
            style={{ maxWidth: "310px", width: "100%", height: "100%" }}
          >
            <img
              style={loaded ? {} : { display: "none" }}
              className="card-img-top"
              src={usuario?.avatar_url}
              style={{ height: "300px", width: "300px" }}
              onLoad={() => setLoaded(true)}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title">{usuario?.name}</h5>
              <p className="card-text">{usuario?.bio}</p>
              <a
                href={usuario?.html_url}
                target="blank"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Ver Perfil
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            {repositorios.map((repositorio) => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{repositorio.name} </h5>
                  <small className="text-muted">{repositorio.language}</small>
                  <p className="card-text">
                    {repositorio.description
                      ? repositorio.description
                      : "Não há descrição"}
                  </p>
                  <br />
                  <a
                    href={repositorio.html_url}
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
          </div>{" "}
        </>
      ) : null}
    </div>
  );
}
