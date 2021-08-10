import { ChartsData, Metrics } from "../types";

export const CHARTS_DATA: ChartsData = {
  ttfb: [
    {
      "x": "2:22:51 AM",
      "y": 0.551
    },
    {
      "x": "2:22:52 AM",
      "y": 0.287,
    },
    {
      "x": "2:22:53 AM",
      "y": 0.563,
    },
    {
      "x": "2:22:54 AM",
      "y": 0.101,
    }
  ],
  
  domLoad: [
    {
      "x": "2:22:51 AM",
      "y": 2.045
    },
    {
      "x": "2:22:52 AM",
      "y": 0.456
    },
    {
      "x": "2:22:53 AM",
      "y": 2.567
    },
    {
      "x": "2:22:54 AM",
      "y": 1.896
    }
  ],
  
  fcp: [
    {
      "x": "2:22:51 AM",
      "y": 1.3452000000029801
    },
    {
      "x": "2:22:52 AM",
      "y": 0.1234000000059605
    },
    {
      "x": "2:22:53 AM",
      "y": 0.911
    },
    {
      "x": "2:22:54 AM",
      "y": 1.563615000002901
    }
  ],
  
  windowLoad: [
    {
      "x": "2:22:51 AM",
      "y": 2.456
    },
    {
      "x": "2:22:52 AM",
      "y": 1.23
    },
    {
      "x": "2:22:53 AM",
      "y": 2.101
    },
    {
      "x": "2:22:54 AM",
      "y": 1.989
    }
  ]
};

export const METRICS: Metrics = [{
  "resources": [
    {
      "name": "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap",
      "initiatorType": "link",
      "responseEnd": 0.6699000000059605,
      "transferSize": 0
    },
    {
      "name": "https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap",
      "initiatorType": "link",
      "responseEnd": 0.8762000000029803,
      "transferSize": 0
    },
    {
      "name": "https://perf-analytics-client.herokuapp.com/client/css/styles.css",
      "initiatorType": "link",
      "responseEnd": 1.0439000000059604,
      "transferSize": 1909
    },
    {
      "name": "https://blog.crazycoder.io/images/portfolio-pp.jpg",
      "initiatorType": "img",
      "responseEnd": 1.8305,
      "transferSize": 0
    },
    {
      "name": "https://perf-analytics-client.herokuapp.com/client/js/perfAnalytics.min.js",
      "initiatorType": "script",
      "responseEnd": 0.8561000000014901,
      "transferSize": 2205
    },
    {
      "name": "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap",
      "initiatorType": "other",
      "responseEnd": 0.9022000000029803,
      "transferSize": 778
    },
    {
      "name": "https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap",
      "initiatorType": "other",
      "responseEnd": 0.9665,
      "transferSize": 658
    },
    {
      "name": "https://fonts.gstatic.com/s/rubik/v14/iJWbBXyIfDnIV7nEt3KSJbVDV49rz8sDE3U3f4TnlY1PK6w.woff",
      "initiatorType": "css",
      "responseEnd": 1.2192000000029801,
      "transferSize": 0
    },
    {
      "name": "https://fonts.gstatic.com/s/karla/v15/qkBIXvYC6trAT55ZBi1ueQVIjQTDppqaE0lMZbLXGhmR.woff",
      "initiatorType": "css",
      "responseEnd": 1.2111000000014902,
      "transferSize": 0
    },
    {
      "name": "https://fonts.gstatic.com/s/karla/v15/qkBIXvYC6trAT55ZBi1ueQVIjQTDppqaHUlMZbLXGhmRytc.woff",
      "initiatorType": "css",
      "responseEnd": 1.1963000000044703,
      "transferSize": 0
    }
  ],
  "createdAt": new Date("2021-08-08T23:22:51.219Z"),
  "_id": "611067f680f18100035647e1",
  "ttfb": 0.351,
  "domLoad": 1.045,
  "windowLoad": 2.078,
  "fcp": 1.1162000000029801,
  "UserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
  "URL": "https://perf-analytics-client.herokuapp.com/",
  "__v": 0
}];
