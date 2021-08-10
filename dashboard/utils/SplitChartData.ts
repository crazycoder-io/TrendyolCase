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
            x: new Date(metric.createdAt!).toLocaleTimeString(),
            y: metric.ttfb,
        });
    
        SplittedData.fcp.push({
            x: new Date(metric.createdAt).toLocaleTimeString(),
            y: metric.fcp,
        });
    
        SplittedData.domLoad.push({
            x: new Date(metric.createdAt).toLocaleTimeString(),
            y: metric.domLoad,
        });
    
        SplittedData.windowLoad.push({
            x: new Date(metric.createdAt).toLocaleTimeString(),
            y: metric.windowLoad,
        });
    });
    return SplittedData;
};

export default SplitData;