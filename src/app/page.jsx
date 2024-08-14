import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

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
      <h1 className={styles.tituloHomePage}>Aula Next.js</h1>
        <div className={styles.quadro}>

        </div>
    </div>
  );
}
