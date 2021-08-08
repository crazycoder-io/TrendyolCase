import Head from "next/head";

const Header = (): JSX.Element => {
    return (
        <Head>
            <title>PerfAnalytics Dashboard</title>
            <meta name="description" content="PerfAnalytics.js Dashboard panel made by Mesut KILINCASLAN" />
            <link rel="icon" href="/performance-analytics-icon.png" />
        </Head>
    );
};

export default Header;
