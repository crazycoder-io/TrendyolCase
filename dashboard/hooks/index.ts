import { useState, useCallback } from "react";
import { ChartsData, _Date } from "../types";

export const LoadingHook = (): { loading: boolean, updateLoading: () => void } => {
    const [loading, setLoading] = useState<boolean>(false);

    const updateLoading = useCallback(() => setLoading((prev) => !prev), []);

    return { loading, updateLoading };
};

export const ChartHook = (charts?: ChartsData): { chartsData: ChartsData, updateChartsData: (data) => void } => {
    const [chartsData, setChartsData] = useState<ChartsData>(charts);

    const updateChartsData = useCallback((updatedCharts: ChartsData) => setChartsData(updatedCharts), []);

    return { chartsData, updateChartsData };
};

export const DateHook = (): { specificDate: _Date, updateDate: (key, data) => void } => {
    const [specificDate, setDate] = useState<_Date>({
        startDate: new Date(),
        endDate: new Date(),
    });

    const updateDate = useCallback((keyword, date) => setDate(prev => ({...prev, [keyword]: date})), [specificDate]);

    return { specificDate, updateDate };
};
