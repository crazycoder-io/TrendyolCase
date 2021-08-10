import { ChartProps } from "../types";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "../styles/Chart.module.css";

const Chart: React.FC<ChartProps> = ({ title, chart, loading }): JSX.Element => {
    return (
        <div className={styles.chart_box}>
            <h4 className={styles.chart_title}>{title}</h4>
            {
                chart.length > 0 ? (
                    <VictoryChart
                        theme={VictoryTheme.material}
                    >
                        <VictoryLine
                            style={{
                                data: { stroke: "#FFF" },
                                parent: { border: "1px solid #fff"}
                            }}
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}
                            data={chart}
                        />
                    </VictoryChart>
                ) : loading ? <Loader type="Circles" color="#FFDAB9" height={80} width={80}/> : <p className={styles.message}>No data to draw chart.</p>
            }
        </div>
    );
};

export default Chart;
