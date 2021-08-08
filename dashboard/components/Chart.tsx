import React from 'react';
import { VictoryChart, VictoryTheme, VictoryLine } from "victory";
import styles from "../styles/Chart.module.css";

const Chart = ({ title }: { title: string }): JSX.Element => {
    return (
        <div className={styles.chart_box}>
            <h4 className={styles.chart_title}>{title}</h4>
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
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                />
            </VictoryChart>
        </div>
    );
};

export default Chart;
