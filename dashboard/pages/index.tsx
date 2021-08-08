import styles from '../styles/Home.module.css';
import { Header, Title, Charts, Footer } from '../components';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Title />
        <Charts />
      </main>

      <Footer />
    </div>
  )
}
