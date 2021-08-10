import axios from "axios";
import { _Date, ServiceCall } from "../types";
const BASE_URL = "https://service-perf-analytics.herokuapp.com";

const SERVICE_CALL = async (date: _Date | {} = {}): Promise<ServiceCall> => {
    let res;
    try {
        res = await axios({
            url: `${BASE_URL}/metrics/report-metrics`,
            method: "POST",
            data: date
        });
    } catch (error) {
        console.log(error);
        res = error;
    }

    return res;
};

export default SERVICE_CALL;