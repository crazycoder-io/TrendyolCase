# Trendyol PerfAnalytics.JS Case

| Name | Source |
| :---: | :---: |
| Test Client URL | https://perf-analytics-client.herokuapp.com/ |
| Dashboard URL | https://dashboard-perfanalytics.herokuapp.com/ |
| API URL | https://service-perf-analytics.herokuapp.com/ |

## How it works

<span>**Client URL** collect the data like;</span>
  - TTFB (Time to first byte)
  - FCP (First Contentful Paint)
  - Window Load
  - Dom Load

<span>And sends this data to API and **API URL**;</span>
  - Saves this data in MongoDB database from /metrics/collect-metrics
  - Listens /metrics/report-metrics for reporting the metrics
  - If a specific date range is sent by dashboard it returns the data with this range otherwise it returns last 30 mins data

<span>**Dashboard**;</span>
  - Makes a request to API for draws charts by default without parameter
  - But there are two date pickers for make a request with a range and can useful draw a chart with selected date range

![Screenshot-1](https://drive.google.com/uc?export=view&id=1IWUvzOQMAaUsrpga0Yf4OjIQmwE6b_44 "Dashboard 1")

<br>

![Screenshot-2](https://drive.google.com/uc?export=view&id=1QI9V4_eCq5wuBNeg_DfGrDV351F-G5CM "Dashboard 2")