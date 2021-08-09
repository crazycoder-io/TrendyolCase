export type ChartObject = {
    time: String;
    value: Number;
}

export type ChartsData = {
    [key: string]: Array<ChartObject>;
};

export type Metric = {
    resources: Array<Object>;
    createdAt: Date;
    _id: String;
    ttfb: Number;
    domLoad: Number;
    windowLoad: Number;
    fcp: Number;
    UserAgent: String;
    URL: String
    __v: Number;
};

export type Metrics = Array<Metric>;

export type SplittedData = {
    [key: string]: ChartObject[]
};

export interface HomeProps {
    metrics: Metrics;
    chartsData: ChartObject[];
}

export interface ChartProps {
    title: String;
    chart: ChartObject[];
}
