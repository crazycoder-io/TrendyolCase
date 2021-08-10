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

const SplitData = (metrics: Metrics): ChartsData => {
    metrics.map((metric) => {
        SplittedData.ttfb.push({
            x: new Date(metric.createdAt).toLocaleString("tr-TR", OPTIONS),
            y: metric.ttfb,
        });
    
        SplittedData.fcp.push({
            x: new Date(metric.createdAt).toLocaleString("tr-TR", OPTIONS),
            y: metric.fcp,
        });
    
        SplittedData.domLoad.push({
            x: new Date(metric.createdAt).toLocaleString("tr-TR", OPTIONS),
            y: metric.domLoad,
        });
    
        SplittedData.windowLoad.push({
            x: new Date(metric.createdAt).toLocaleString("tr-TR", OPTIONS),
            y: metric.windowLoad,
        });
    });
    return SplittedData;
};

export default SplitData;
