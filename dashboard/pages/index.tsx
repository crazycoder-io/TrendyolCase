import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>PerfAnalytics Dashboard</title>
        <meta name="description" content="PerfAnalytics.js Dashboard panel made by Mesut KILINCASLAN" />
        <link rel="icon" href="/performance-analytics-icon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://perf-analytics-client.herokuapp.com">PerfAnalytics.js!</a>
        </h1>

        <p className={styles.description}>
          Chart will be here ASAP
        </p>
      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{' '}
          <span className={styles.signature}>
            <a
              href="https://crazycoder.io/"
              target="_blank"
              rel="noopener noreferrer"
            >Mesut KILINCASLAN</a>
          </span>
        </a>
      </footer>
    </div>
  )
}
