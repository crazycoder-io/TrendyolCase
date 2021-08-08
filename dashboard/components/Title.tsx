import styles from "../styles/Title.module.css";

const Title = (): JSX.Element => {
    return (
        <h1 className={styles.title}>
            Welcome to <a href="https://perf-analytics-client.herokuapp.com">PerfAnalytics.js</a> Dashboard
        </h1>
    );
};

export default Title;
