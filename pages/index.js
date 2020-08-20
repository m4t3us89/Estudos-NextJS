import Link from "next/link";
import { useEffect, useState } from "react";
import api from "./../services/axios";
import styles from "../styles/Home.module.css";

const baseUrlGitLab =  process.env.BASE_URL_GITLAB
const baseUrlGitHub =  process.env.BASE_URL_GITHUB


export default function Home() {
  const [repositorios, setRepositorio] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    async function consultarUsuario(urlUser) {
      try {
        const { data } = await api.get(urlUser);
        console.log("User", data);
        setUsuario(usuario ?  usuario.concat(data) : data );
        console.log("User", usuario);
      } catch (err) {
        console.log("Err", err);
      }
    }

    async function listarRepositorios({urlRep,urlUser}) {
      try {
        const { data } = await api.get(urlRep);
        console.log("Rep", data);
     
        setRepositorio(data);
        console.log("Repositorios", repositorios);
      } catch (err) {
        console.log("Err", err);
      } finally {
        urlUser ? consultarUsuario(urlUser) : null;
      }
    }

 
    listarRepositorios({urlRep: `${baseUrlGitHub}users/m4t3us89/repos`,urlUser: `${baseUrlGitHub}users/m4t3us89`});
    //setTimeout(()=> listarRepositorios({urlRep: `${baseUrlGitLab}users/2919291/projects`,urlUser: /*`${baseUrlGitLab}user?username=m4t3us`*/ null}) , 5000);
    
  

   
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
              src={usuario[0]?.avatar_url}
              style={{ height: "300px", width: "300px" }}
              onLoad={() => setLoaded(true)}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title">{usuario[0]?.name}</h5>
              <p className="card-text">{usuario[0]?.bio}</p>
              <a
                href={usuario[0]?.html_url}
                target="blank"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Ver Perfil
              </a>
            </div>
          </div>
          <div className={styles.cards}>
            {repositorios.map((repositorio,index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <h5 className="card-title">{repositorio?.name} </h5>
                  <small className="text-muted">{repositorio?.language}</small>
                  <p className="card-text">
                    {repositorio.description
                      ? repositorio.description
                      : "Não há descrição"}
                  </p>
                  <br />
                  <a
                    href={repositorio?.html_url}
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
