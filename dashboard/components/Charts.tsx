import { Chart } from '../components';
import { ChartsData } from "../types";
import styles from "../styles/Charts.module.css";

const Charts = ({ chartsData, loading } : { chartsData: ChartsData, loading: boolean }): JSX.Element => {
    return (
        <div className={styles.charts}>
            <Chart title={"TTFB"} chart={chartsData["ttfb"]} loading={loading} />
            <Chart title={"FCP"} chart={chartsData["fcp"]} loading={loading} />
            <Chart title={"Window Load"} chart={chartsData["windowLoad"]} loading={loading} />
            <Chart title={"DOM Load"} chart={chartsData["domLoad"]} loading={loading} />
        </div>
    );
};

export default Charts;
