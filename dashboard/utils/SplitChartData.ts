import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");
import { Metrics, ChartsData } from "../types";
const SplittedData: ChartsData = {
    ttfb: [],
    fcp: [],
    domLoad: [],
    windowLoad: [],
};

const SplitData = (metrics: Metrics): ChartsData => {
    metrics.map((metric) => {
        SplittedData.ttfb.push({
            x: moment(metric.createdAt).format("DD/MM HH:mm").toString(),
            y: metric.ttfb,
        });
    
        SplittedData.fcp.push({
            x: moment(metric.createdAt).format("DD/MM HH:mm").toString(),
            y: metric.fcp,
        });
    
        SplittedData.domLoad.push({
            x: moment(metric.createdAt).format("DD/MM HH:mm").toString(),
            y: metric.domLoad,
        });
    
        SplittedData.windowLoad.push({
            x: moment(metric.createdAt).format("DD/MM HH:mm").toString(),
            y: metric.windowLoad,
        });
    });
    return SplittedData;
};

export default SplitData;