import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Chart } from '../components';

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
          Welcome to <a href="https://perf-analytics-client.herokuapp.com">PerfAnalytics.js</a> Dashboard
        </h1>

        <div className={styles.charts}>
          <Chart title={"TTFB"} />
          <Chart title={"FCP"} />
          <Chart title={"Window Load"} />
          <Chart title={"DOM Load"} />
        </div>

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
