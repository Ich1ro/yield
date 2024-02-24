import Image from "next/image";
import styles from "./page.module.scss";
import Header from './components/Header/page'
import HeaderAbout from './components/HeaderAbout/page'
import Banking from './components/Banking/page'
import Statistic from './components/Statistic/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeaderAbout />
      <Banking />
      <Statistic />
    </main>
  );
}
