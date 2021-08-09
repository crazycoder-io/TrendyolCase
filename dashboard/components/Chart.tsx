import { ChartProps } from "../types";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory";
import styles from "../styles/Chart.module.css";

const Chart: React.FC<ChartProps> = ({ title, chart }): JSX.Element => {
    chart.forEach((item) => {
        item["x"] = item.time;
        item["y"] = item.value;
    });
    
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
                ) : (
                    <p className={styles.message}>No data to draw chart.</p>
                )
            }
        </div>
    );
};

export default Chart;
