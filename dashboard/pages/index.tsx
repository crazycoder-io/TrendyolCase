import { HomeProps, Metrics, ChartsData } from "../types";
import { Header, Title, DatePicker, Charts, Footer } from "../components";
import { LoadingHook, ChartHook, DateHook } from "../hooks";
import { SplitChartData } from "../utils";
import serviceCall from "../service/serviceCall";
import styles from "../styles/Home.module.css";

const Home = (props: HomeProps): JSX.Element => {

    // Get Hooks
    const { loading, updateLoading } = LoadingHook();
    const { chartsData, updateChartsData } = ChartHook(props.chartsData);
    const { specificDate, updateDate } = DateHook();

    const UpdateCharts = async () => {
        updateLoading();
        try {
            if (specificDate.startDate > specificDate.endDate) {
                alert("You cannot set the end date lower than the start date!");
            }
            const res = await serviceCall({
                startDate: specificDate.startDate.toISOString(),
                endDate: specificDate.endDate.toISOString()
            });

            const splitData = SplitChartData(res.data.report);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            updateChartsData(splitData!);
            updateLoading();
        } catch (error) {
            console.log(error);
            updateLoading();
        }
    };

    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <Title />
                <div className={styles.datePicker}>
                    <DatePicker specificDate={specificDate} setDate={updateDate} keyword={"startDate"} />
                    <DatePicker specificDate={specificDate} setDate={updateDate} keyword={"endDate"} />
                    <button onClick={UpdateCharts} className={styles.dateButton}>Update Charts</button>
                </div>
                <Charts chartsData={chartsData} loading={loading} />
            </main>

            <Footer />
        </div>
    );
};

export async function getServerSideProps(): Promise<{
    props: {
        metrics: Metrics;
        chartsData: ChartsData;
    };
}> {
    // Call an external API endpoint to get data.
    const res = await serviceCall();

    const splitData = res.hasOwnProperty("data") && SplitChartData(res.data.report);
  
    // By returning { props: { metrics } }, the Charts component
    // will receive `metrics` as a prop at build time
    return {
        props: {
            metrics: res.data.report,
            chartsData: splitData,
        },
    };
}

export default Home;
