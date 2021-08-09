import { Chart } from '../components';
import { ChartsData } from "../types";
import styles from "../styles/Charts.module.css";

const Charts = ({ chartsData } : ChartsData): JSX.Element => {
    return (
        <div className={styles.charts}>
            <Chart title={"TTFB"} chart={chartsData["ttfb"]} />
            <Chart title={"FCP"} chart={chartsData["fcp"]} />
            <Chart title={"Window Load"} chart={chartsData["windowLoad"]} />
            <Chart title={"DOM Load"} chart={chartsData["domLoad"]} />
        </div>
    );
};

export default Charts;
