import { Metrics, SplittedData as _SplittedDate } from "../types";
const SplittedData: _SplittedDate = {
    ttfb: [],
    fcp: [],
    domLoad: [],
    windowLoad: [],
};

const SplitData = (metrics: Metrics): Object => {
    metrics.map((metric) => {
        SplittedData.ttfb.push({
            time: new Date(metric.createdAt).toLocaleTimeString(),
            value: metric.ttfb,
        });
    
        SplittedData.fcp.push({
            time: new Date(metric.createdAt).toLocaleTimeString(),
            value: metric.fcp,
        });
    
        SplittedData.domLoad.push({
            time: new Date(metric.createdAt).toLocaleTimeString(),
            value: metric.domLoad,
        });
    
        SplittedData.windowLoad.push({
            time: new Date(metric.createdAt).toLocaleTimeString(),
            value: metric.windowLoad,
        });
    });
    return SplittedData;
};

export default SplitData;