import Link from "next/link";
import { useEffect, useState } from "react";
import api from "./../services/axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [repositorios, setRepositorio] = useState([]);

  useEffect(() => {
    async function listarRepositorios() {
      try {
        const { data } = await api.get("users/m4t3us89/repos");
        console.log(data);
        setRepositorio(data);
      } catch (err) {
        console.log("Err", err);
      }
    }
    listarRepositorios();
  }, []);

  return (
    <div className={styles.cards}>
      {repositorios.map((repositorio) => (
        <div className="card">
          <img
            className="card-img-top"
            src={repositorio.owner.avatar_url}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <p className="card-text">{repositorio.name}</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
