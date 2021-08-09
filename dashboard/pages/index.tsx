import { HomeProps } from "../types";
import { Header, Title, Charts, Footer } from "../components";
import { SplitChartData } from "../utils";
import serviceCall from "../service/serviceCall";
import styles from "../styles/Home.module.css";

const Home = (props: HomeProps): JSX.Element => {
    const { chartsData } = props;
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <Title />
                <Charts chartsData={chartsData}/>
            </main>

            <Footer />
        </div>
    );
};

export async function getStaticProps() {
    // Call an external API endpoint to get data.
    const data = {
        startDate: "2021-08-08T19:42:30.681Z",
        endDate: "2021-08-08T23:42:30.681Z"
    };
    const res = await serviceCall();

    const SplittedData = SplitChartData(res.data.report);
  
    // By returning { props: { metrics } }, the Charts component
    // will receive `metrics` as a prop at build time
    return {
        props: {
            metrics: res.data.report,
            chartsData: SplittedData,
        },
    };
}

export default Home;
