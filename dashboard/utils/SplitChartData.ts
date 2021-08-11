import { Metrics, ChartsData } from "../types";
const SplittedData: ChartsData = {
    ttfb: [],
    fcp: [],
    domLoad: [],
    windowLoad: [],
};

const OPTIONS: Intl.DateTimeFormatOptions = {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
};

const converter = (value) => value.toString().split(".")[0] + "." + value.toString().split(".")[1].toString().substring(0,3);

const SplitData = (metrics: Metrics): ChartsData => {
    metrics.map((metric) => {
        SplittedData.ttfb.push({
            x: new Date(metric.createdAt).toLocaleString("tr-TR", OPTIONS),
            y: converter(metric.ttfb),
        });
    
        SplittedData.fcp.push({
            x: new Date(metric.createdAt).toLocaleString("tr-TR", OPTIONS),
            y: converter(metric.fcp),
        });
    
        SplittedData.domLoad.push({
            x: new Date(metric.createdAt).toLocaleString("tr-TR", OPTIONS),
            y: converter(metric.domLoad),
        });
    
        SplittedData.windowLoad.push({
            x: new Date(metric.createdAt).toLocaleString("tr-TR", OPTIONS),
            y: converter(metric.windowLoad),
        });
    });
    return SplittedData;
};

export default SplitData;
