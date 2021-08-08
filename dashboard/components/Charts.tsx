
import { Chart } from '../components';
import styles from "../styles/Charts.module.css";

const Charts = (): JSX.Element => {
    return (
        <div className={styles.charts}>
            <Chart title={"TTFB"} />
            <Chart title={"FCP"} />
            <Chart title={"Window Load"} />
            <Chart title={"DOM Load"} />
        </div>
    );
};

export default Charts;
