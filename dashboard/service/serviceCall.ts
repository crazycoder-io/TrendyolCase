import axios from "axios";
const BASE_URL = "https://service-perf-analytics.herokuapp.com";

const SERVICE_CALL = async (data = {}) => {
    let res;
    try {
        res = await axios({
            url: `${BASE_URL}/metrics/report-metrics`,
            method: "POST",
            data
        });
    } catch (error) {
        console.log(error);
        res = error;
    }

    return res;
};

export default SERVICE_CALL;