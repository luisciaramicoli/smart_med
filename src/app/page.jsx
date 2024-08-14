import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FaBriefcase, FaLightbulb, FaCog } from "react-icons/fa";
export default function Home() {
  return (
    <div className="containerGlobal">
      <header className={styles.cabecalho}>
        <nav>
          <Link href="/Sobre" className={styles.link}>
            Sobre
          </Link>

          <Link href="/Sobre" className={styles.link}>
            Quem somos?
          </Link>
        </nav>
      </header>
      <div className={styles.fundo}>
      <div className={styles.quadroMaior}>
        <div className={styles.quadro}>
        <h1 className={styles.tituloHomePage}>HealthWatch</h1>
          <div className={styles.titulo}>
            <h1>Informações</h1>
          </div>
          <div className={styles.topicos}>
            <div className={styles.topico1}>
              <div className={styles.circulo}>
                < FaBriefcase className={styles.icone} />
              </div>
              <div className={styles.textoTopico1}>
                BPMs
              </div>
            </div>

            <div className={styles.topico2}>
              <div className={styles.circulo}>
                <FaLightbulb className={styles.icone} />
              </div>
              <div className={styles.textoTopico2}>
                Oxigenio no sangue
              </div>
            </div>

            <div className={styles.topico3}>
              <div className={styles.circulo}>
                <FaCog className={styles.icone} />
              </div>
              <div className={styles.textoTopico3}>
                Sono
              </div>
            </div>
          </div>
          <div className={styles.texto}>
            <p>
              O HealthWatch transmite as informações recebidas pelo smartWatch utilizado pelo paciente,
              lembre-se que a total responsabilidade pelo uso durante os dias são por parte do mesmo, o médiuco só será responsavel
              pela análise dos dados aqui transmitidos.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
