export type ChartObject = {
    x: String;
    y: String;
}

export type ChartsData = {
    [key: string]: Array<ChartObject>;
};

export type _Date = { startDate: Date, endDate: Date };

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

export interface HomeProps {
    metrics: Metrics;
    chartsData: ChartsData;
}

export interface ChartProps {
    title: String;
    chart: ChartObject[];
    loading: boolean;
}

export interface DatePickerProps {
    specificDate: {
        startDate: Date;
        endDate: Date;
    };
    setDate: (key, data) => void;
    keyword: string;
};


export interface ServiceCall {
    data: { report: Metrics }
};

export interface Error {
    error: Object
};
