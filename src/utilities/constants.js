// import dotenv from "dotenv";

// dotenv.config();

const API_KEY = process.env.REACT_APP_APIKEY;

export const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/videos?regionCode=IN&chart=mostPopular&part=snippet,statistics&maxResults=50&key=${API_KEY}`;
export const YOUTUBE_SEARCH_URL =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const YOUTUBE_CONTENT_URL =
  "https://www.googleapis.com/youtube/v3/search?regionCode=IN&maxResults=10&type=video&part=snippet&key=" +
  API_KEY +
  "&q=";

export const DATA = {
  kind: "youtube#searchListResponse",
  etag: "34Qj8YGZIzRuskUx8htGnOgQfSA",
  nextPageToken: "CDIQAA",
  regionCode: "IN",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 50,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "OuoD1tQqcDI33FrNZI-gBs4tGlk",
      id: {
        kind: "youtube#video",
        videoId: "Xmm3Kr5P1Uw",
      },
      snippet: {
        publishedAt: "2021-10-01T06:04:00Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "India TV Live: Aaj Ki Baat | Arviend Kejriwal Live Updates | AAP Vs ED | PM Modi | Election 2024",
        description:
          "India TV Live: High Court Decision On Kejriwal | Akhilesh Yadav | AAP Vs ED | Azam Khan दिल्ली हाई कोर्ट से ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Xmm3Kr5P1Uw/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Xmm3Kr5P1Uw/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Xmm3Kr5P1Uw/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2021-10-01T06:04:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "I3Ck4C-LYkcP-Ce265Nu9YnXRuU",
      id: {
        kind: "youtube#video",
        videoId: "mF7-mXrwKkk",
      },
      snippet: {
        publishedAt: "2024-03-27T12:59:19Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court Big Decision On Kejriwal Remand: हाईकोर्ट का फैसला केजरीवाल को अभी रहना होगा जेल में |",
        description:
          "High Court Big Decision On Kejriwal Remand: हाईकोर्ट का फैसला केजरीवाल को अभी रहना ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/mF7-mXrwKkk/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/mF7-mXrwKkk/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/mF7-mXrwKkk/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T12:59:19Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "RKY-IIlQzMZE6h9HjyRRWn-a4VA",
      id: {
        kind: "youtube#video",
        videoId: "VWvCu1qnQWo",
      },
      snippet: {
        publishedAt: "2024-03-27T14:12:18Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court Decision On Kejriwal Live: केजरीवाल पर महाफैसला जेल या बैल फैसला LIVE  | ED Vs AAP News",
        description:
          "ED seeks time to respond to Kejriwal's plea against arrest, CM's lawyer calls it 'delay tactics'. The AAP took to the streets on ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/VWvCu1qnQWo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/VWvCu1qnQWo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/VWvCu1qnQWo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T14:12:18Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "4_GMWaX2VzDzsCOGKNw9nKTZBi4",
      id: {
        kind: "youtube#video",
        videoId: "IxphaAjrAlc",
      },
      snippet: {
        publishedAt: "2024-03-27T01:22:04Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Super 100 LIVE: Arvind Kejriwal ED Remand Update | PM Modi | CM Yogi | Congress Seat Sharing",
        description:
          "Super 100 LIVE: Arvind Kejriwal ED Remand Update | PM Modi | CM Yogi | Congress Seat Sharing आज मथुरा से ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/IxphaAjrAlc/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/IxphaAjrAlc/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/IxphaAjrAlc/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T01:22:04Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "aU3Gtg7iP1m3iSf7hWBQk3MWkFE",
      id: {
        kind: "youtube#video",
        videoId: "nogARK2TQVo",
      },
      snippet: {
        publishedAt: "2024-03-27T08:24:14Z",
        channelId: "UCIvaYmXn910QMdemBG3v1pQ",
        title:
          "HC LIVE hearing on Arvind Kejriwal arrest news LIVE: केजरीवाल पर कोर्ट का क्या ऑर्डर | Breaking",
        description:
          "HC LIVE hearing on Arvind Kejriwal arrest news LIVE: केजरीवाल पर कोर्ट का क्या ऑर्डर | Breaking ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nogARK2TQVo/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/nogARK2TQVo/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nogARK2TQVo/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Zee News",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T08:24:14Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "BdBqzXbWelBOE9nBi5AIAbhiuJo",
      id: {
        kind: "youtube#video",
        videoId: "ftoJuMb1szI",
      },
      snippet: {
        publishedAt: "2024-03-27T12:53:10Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court Verdict On Arvind Kejriwal LIVE :  हाईकोर्ट  में केजरीवाल की अचानक तबीयत बिगड़ी | ED",
        description:
          "High Court Verdict On Arvind Kejriwal LIVE : हाईकोर्ट में केजरीवाल की अचानक तबीयत ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ftoJuMb1szI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ftoJuMb1szI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ftoJuMb1szI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T12:53:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "lZiYyjWYegle08rJszrkRDEnFPo",
      id: {
        kind: "youtube#video",
        videoId: "ZwAnMM9aDDY",
      },
      snippet: {
        publishedAt: "2024-03-27T13:38:27Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court On Arvind Kejriwal Live: हाईकोर्ट में केजरीवाल पर सुनवाई...ED ने कोर्ट से मांगा समय | AAP",
        description:
          "High Court On Arvind Kejriwal Live: हाईकोर्ट में केजरीवाल पर सुनवाई...ED ने कोर्ट से ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ZwAnMM9aDDY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ZwAnMM9aDDY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ZwAnMM9aDDY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T13:38:27Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "1BrXekYxmImhd_IBWput9rAYLwE",
      id: {
        kind: "youtube#video",
        videoId: "t48QW6ctdc0",
      },
      snippet: {
        publishedAt: "2024-03-27T14:08:37Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court Decision On Arviend Kejriwal Live: फंस गए केजरीवाल, देना होगा इस्तीफा? | ED Vs AAP News",
        description:
          "ED seeks time to respond to Kejriwal's plea against arrest, CM's lawyer calls it 'delay tactics'. The AAP took to the streets on ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/t48QW6ctdc0/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/t48QW6ctdc0/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/t48QW6ctdc0/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T14:08:37Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "f3Knt_Jjz1PMlk4IXZA-Y9B9bM4",
      id: {
        kind: "youtube#video",
        videoId: "L5SCKVi7rlM",
      },
      snippet: {
        publishedAt: "2024-03-25T18:24:02Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Aaj Ki Baat: BJP ने बाराबंकी सीट से प्रत्याशी क्यों बदला? | Barabanki | BJP Seat | Candidate | 2024",
        description:
          "Aaj Ki Baat: BJP ने बाराबंकी सीट से प्रत्याशी क्यों बदला? | Barabanki | BJP Seat | Candidate ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/L5SCKVi7rlM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/L5SCKVi7rlM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/L5SCKVi7rlM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-25T18:24:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "wt7T36_uqS3-59qFmGByGfaed3w",
      id: {
        kind: "youtube#video",
        videoId: "4-xLgVdNbZg",
      },
      snippet: {
        publishedAt: "2024-03-27T06:53:07Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court Decision On Kejriwal Live: हाई कोर्ट सुना रहा केजरीवाल पर फैसला | Aap Protest In Delhi",
        description:
          "Kejriwal to make explosive revelation in Delhi court tomorrow, announce wife Sunita in her second presser Sunita, the wife of ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/4-xLgVdNbZg/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/4-xLgVdNbZg/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/4-xLgVdNbZg/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T06:53:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Dq2YFtrtedXiHXm91B2mA-f2yRw",
      id: {
        kind: "youtube#video",
        videoId: "MEbWruw6CI0",
      },
      snippet: {
        publishedAt: "2024-03-27T13:11:43Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Arvind Kejriwal High Court Hearing: केजरीवाल पर हाईकोर्ट सुना रहा फैसला! मिलेगी बेल या जाएंगे तिहाड़?",
        description:
          "Arvind Kejriwal High Court Hearing: केजरीवाल पर हाईकोर्ट सुना रहा फैसला! मिलेगी बेल ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/MEbWruw6CI0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/MEbWruw6CI0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/MEbWruw6CI0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T13:11:43Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "TJ3c7fvPbnJeeX13uE6Mzh5pSio",
      id: {
        kind: "youtube#video",
        videoId: "Bh3p9-rKu04",
      },
      snippet: {
        publishedAt: "2024-03-27T12:40:44Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court Big Decision On Kejriwal Remand: हाईकोर्ट का केजरीवाल पर बड़ा फैसला सुरक्षित | AAP",
        description:
          "High Court Decision On Kejriwal Remand : हाईकोर्ट का केजरीवाल पर बड़ा फैसला सुरक्षित ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Bh3p9-rKu04/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Bh3p9-rKu04/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Bh3p9-rKu04/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T12:40:44Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "gfjZS4WxaN6I9gWmMiSCFisoeQc",
      id: {
        kind: "youtube#video",
        videoId: "SDwaR6gZjYQ",
      },
      snippet: {
        publishedAt: "2024-03-27T13:41:57Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "HC Decision On Kejriwal Live:केजरीवाल को लगे एक साथ 2 झटके ! AAP | ED",
        description:
          "HC Decision On Kejriwal Live:केजरीवाल को लगे एक साथ 2 झटके ! AAP | ED थोड़ी ही देर में ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/SDwaR6gZjYQ/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/SDwaR6gZjYQ/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/SDwaR6gZjYQ/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T13:41:57Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "pf_DJw2qY5HQ2vnhV0Tae8F1sVA",
      id: {
        kind: "youtube#video",
        videoId: "n-FjKa2IxnQ",
      },
      snippet: {
        publishedAt: "2024-03-27T11:43:34Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court Decision On Kejriwal: फैसले से पहले केजरीवाल की बिगड़ी तबीयत, CM कुर्सी पर फिर शुरू विवाद?",
        description:
          "High Court Decision On Kejriwal: फैसले से पहले केजरीवाल की बिगड़ी तबीयत, CM कुर्सी ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/n-FjKa2IxnQ/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/n-FjKa2IxnQ/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/n-FjKa2IxnQ/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T11:43:34Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "f2p7f84fj0VZ7umg9b1SEM67zaY",
      id: {
        kind: "youtube#video",
        videoId: "LisrPRojsIg",
      },
      snippet: {
        publishedAt: "2024-03-27T03:04:12Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Aaj Ka Rashifal: Shubh Muhurat | Today Bhavishyavani with Acharya Indu Prakash, 27 March, 2024",
        description:
          "Aaj Ka Rashifal of 27 Mar 2024,: Daily Astrology in Hindi | Bhavishyavani with Acharya Indu Prakash. How will be day today for ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/LisrPRojsIg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/LisrPRojsIg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/LisrPRojsIg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T03:04:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "N6CAWW-f9PYvAgcnnNMgVcAPn8M",
      id: {
        kind: "youtube#video",
        videoId: "PCpXLA6tNJE",
      },
      snippet: {
        publishedAt: "2024-03-27T12:26:45Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Arvind Kejriwal In &#39;Tihar Jail&#39;? Live:  कोर्ट का फैसला LIVE तिहाड़ जेल &#39;केजरीवाल&#39;? | HC On Kejriwal",
        description:
          "ईडी की कस्टडी में बिगड़ी अरविंद केजरीवाल की तबीयत, शुगर लेवल 46 तक ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/PCpXLA6tNJE/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/PCpXLA6tNJE/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/PCpXLA6tNJE/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T12:26:45Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "vWlk8eEO99IR7cieQh0-PZo0w1M",
      id: {
        kind: "youtube#video",
        videoId: "zPQfr2Ub69o",
      },
      snippet: {
        publishedAt: "2024-03-27T05:08:02Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "K Kavitha Witness on Arvind Kejriwal LIVE: के कविता के फोन से मिले सबूत ! फंस गए केजरीवाल !",
        description:
          "K Kavitha Witness on Arvind Kejriwal LIVE: के कविता के फोन से मिले सबूत ! फंस गए केजरीवाल !",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/zPQfr2Ub69o/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/zPQfr2Ub69o/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/zPQfr2Ub69o/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T05:08:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "XpZL8FDEtAdtctNHCkm3BV9mQ5g",
      id: {
        kind: "youtube#video",
        videoId: "OsLExUFBkzc",
      },
      snippet: {
        publishedAt: "2024-03-27T06:07:13Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "HC Decision On Arvind Kejriwal Live: हाई कोर्ट का फैसला LIVE, केजरीवाल को तिहाड़? | AAP Vs ED",
        description:
          "ED seeks time to respond to Kejriwal's plea against arrest, CM's lawyer calls it 'delay tactics' The AAP took to the streets on ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/OsLExUFBkzc/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/OsLExUFBkzc/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/OsLExUFBkzc/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T06:07:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "kcJyM0eBihyRhVkgj6pg35Y4Rao",
      id: {
        kind: "youtube#video",
        videoId: "tt0dvldslFI",
      },
      snippet: {
        publishedAt: "2024-03-26T09:25:43Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Big Expose in Arvind Kejriwal Case LIVE: K. Kavitha और केजरीवाल आमने सामने, खुल गया सारा राज ! ED",
        description:
          "Big Expose in Arvind Kejriwal Case LIVE: K. Kavitha और केजरीवाल आमने सामने, खुल गया सारा राज !",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/tt0dvldslFI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/tt0dvldslFI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/tt0dvldslFI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-26T09:25:43Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "DLPnagzWc0L-lbPjl7nKAN0pT00",
      id: {
        kind: "youtube#video",
        videoId: "P_2qh7iihcg",
      },
      snippet: {
        publishedAt: "2024-03-27T12:42:26Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court Big Decision On Kejriwal Remand: हाईकोर्ट का केजरीवाल पर बड़ा फैसला  | AAP",
        description:
          "High Court Decision On Kejriwal Remand : हाईकोर्ट का केजरीवाल पर बड़ा फैसला सुरक्षित ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/P_2qh7iihcg/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/P_2qh7iihcg/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/P_2qh7iihcg/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T12:42:26Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "gMyAjhjKivEJl84tk36JEZg5LIE",
      id: {
        kind: "youtube#video",
        videoId: "KSpVKjz-gjI",
      },
      snippet: {
        publishedAt: "2024-03-27T12:16:40Z",
        channelId: "UCRfxdPr0OE2Sb8IP4dKD_8A",
        title:
          "IPL 2024 Live: MI vs SRH Live | Mumbai Indians Vs Sunrisers Hyderabad Live Scores &amp; Commentary",
        description:
          "IPL 2024 Live : SRH vs MI Live Match and Commentary | Indians Premier League 2024, Match - 8 , Sunrisers Hyderabad vs ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/KSpVKjz-gjI/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/KSpVKjz-gjI/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/KSpVKjz-gjI/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Pro Tv",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T12:16:40Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "jR89cT3E2q4GKvQNP2uSpa2zK0k",
      id: {
        kind: "youtube#video",
        videoId: "-lrqJvYVbM8",
      },
      snippet: {
        publishedAt: "2024-03-27T10:17:46Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Arvind Kejriwal HC Hearing LIVE: आज केजरीवाल को मिलेगी जमानत ? AAP | ED",
        description:
          "Arvind Kejriwal HC Hearing LIVE: आज केजरीवाल को मिलेगी जमानत ? AAP | ED #arvindkejriwalarrested ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/-lrqJvYVbM8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/-lrqJvYVbM8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/-lrqJvYVbM8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T10:17:46Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "mDnN3TYax9JLS4j9PbAlyqdNl8U",
      id: {
        kind: "youtube#video",
        videoId: "kuiT1G_LTXg",
      },
      snippet: {
        publishedAt: "2024-03-27T03:45:50Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Top News LIVE: Arvind Kejriwal HC Hearing | Kangana Ranaut | PM Modi | Lok Sabha Election | NDA",
        description:
          "Top News LIVE: Arvind Kejriwal HC Hearing | Kangana Ranaut | PM Modi | Lok Sabha Election | NDA सपा ने किया ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/kuiT1G_LTXg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/kuiT1G_LTXg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/kuiT1G_LTXg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T03:45:50Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "YNy0LMXA3QkkSUk9b9_WLYdzAkA",
      id: {
        kind: "youtube#video",
        videoId: "54WXUdYo1T8",
      },
      snippet: {
        publishedAt: "2024-03-20T01:31:09Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Today Breaking News Live: अब तक की सभी बड़ी खबरें | Super 100 | PM Modi | Election Breaking | NDA",
        description:
          "Today Breaking News Live: अब तक की सभी बड़ी खबरें | Super 100 | PM Modi | Election Breaking | NDA ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/54WXUdYo1T8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/54WXUdYo1T8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/54WXUdYo1T8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-20T01:31:09Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "BFO8a8k7Hiq4RIFVLqq5h5RFu1s",
      id: {
        kind: "youtube#video",
        videoId: "A8V60cc_EAM",
      },
      snippet: {
        publishedAt: "2024-03-24T01:12:02Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "New CM of Delhi? LIVE: रिमांड के बाद इस्तीफा, दिल्ली का नया मुख्यमंत्री कौन ? Arvind Kejriwal | AAP",
        description:
          "New CM of Delhi? LIVE: रिमांड के बाद इस्तीफा, दिल्ली का नया मुख्यमंत्री कौन ?",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/A8V60cc_EAM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/A8V60cc_EAM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/A8V60cc_EAM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-24T01:12:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "5zWHe4lcBqxMSI3fHgp_6KhjE6Y",
      id: {
        kind: "youtube#video",
        videoId: "AlyaOTIib4Q",
      },
      snippet: {
        publishedAt: "2024-03-27T00:43:01Z",
        channelId: "UCPP3etACgdUWvizcES1dJ8Q",
        title:
          "🔴Aaj Ki Taaza Khabar LIVE: Arvind Kejriwal | Kangana Ranaut | Varun Gandhi | Election 2024 | BJP",
        description:
          "Aaj Ki Taaza Khabar LIVE: Dilip Ghosh | Arvind Kejriwal | Kangana Ranaut | Varun Gandhi | Election 2024 | BJP #bjpcandidatelist ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/AlyaOTIib4Q/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/AlyaOTIib4Q/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/AlyaOTIib4Q/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "News18 India",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T00:43:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "EzkEAHDewRVE6LFntRMBpSP5zyA",
      id: {
        kind: "youtube#video",
        videoId: "YaNRveP-gXs",
      },
      snippet: {
        publishedAt: "2023-12-04T04:43:59Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "OMG India TV: किसकी बनेगी सरकार ? | PM Modi | Rahul Gandhi | Election 2023 | BJP vs Congress",
        description:
          "OMG India TV: किसकी बनेगी सरकार ? | PM Modi | Rahul Gandhi | Election 2023 | BJP vs Congress #OMGIndiaTV ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/YaNRveP-gXs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/YaNRveP-gXs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/YaNRveP-gXs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2023-12-04T04:43:59Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "3wvkocBJ7hWXmTZU_Z7-5r0PfVA",
      id: {
        kind: "youtube#video",
        videoId: "DZ8HjjohHEs",
      },
      snippet: {
        publishedAt: "2024-03-24T09:19:40Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Arvind Kejriwal Resignation LIVE: केजरीवाल का इस्तीफा, दिल्ली का नया CM ? AAP | ED",
        description:
          "Arvind Kejriwal Resignation LIVE: केजरीवाल का इस्तीफा, दिल्ली का नया CM ? AAP | ED ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/DZ8HjjohHEs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/DZ8HjjohHEs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/DZ8HjjohHEs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-24T09:19:40Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "8QJOZDfVAH-lzejcvCpXw2Rf8cM",
      id: {
        kind: "youtube#video",
        videoId: "TNQJV5hp7Dc",
      },
      snippet: {
        publishedAt: "2024-03-23T08:03:21Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Arvind Kejriwal Wife Big Announcement LIVE: गिरफ्तारी के बाद केजरीवाल की पत्नी Sunita Kejriwal",
        description:
          "Arvind Kejriwal Wife Big Announcement LIVE: गिरफ्तारी के बाद केजरीवाल की पत्नी Sunita Kejriwal ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/TNQJV5hp7Dc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/TNQJV5hp7Dc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/TNQJV5hp7Dc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-23T08:03:21Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "MaKl2WetuIm3Egzc1ci-yThLcok",
      id: {
        kind: "youtube#video",
        videoId: "c2T-J4GX-24",
      },
      snippet: {
        publishedAt: "2024-03-26T06:03:57Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Arvind Kejriwal Exposed By K Kavitha :  केजरीवाल गए जेल  तो AAP किसके दम पर लड़ेंगी चुनाव ? ED | AAP",
        description:
          "Arvind Kejriwal Exposed By K Kavitha : केजरीवाल गए जेल तो AAP किसके दम पर लड़ेंगी चुनाव ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/c2T-J4GX-24/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/c2T-J4GX-24/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/c2T-J4GX-24/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-26T06:03:57Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "F91X0IJPgoLfD__8-GIyNkrMJuo",
      id: {
        kind: "youtube#video",
        videoId: "nVZn_YaJwxI",
      },
      snippet: {
        publishedAt: "2024-03-24T06:13:10Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Aaj Ka Rashifal LIVE: Shubh Muhurat | Today Bhavishyavani with Acharya Indu Prakash, 26 March, 2024",
        description:
          "Aaj Ka Rashifal of 26 Mar 2024, LIVE: Daily Astrology in Hindi | Bhavishyavani with Acharya Indu Prakash. How will be day today ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nVZn_YaJwxI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/nVZn_YaJwxI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nVZn_YaJwxI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-24T06:13:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "wboowhSMjIh8OQVle0JgCAfPkRU",
      id: {
        kind: "youtube#video",
        videoId: "-KklYZC3TZ4",
      },
      snippet: {
        publishedAt: "2024-03-24T01:43:51Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Super 100: Arvind Kejriwal Remand | AAP | BJP 3rd List | PM Modi | Lok Sabha Election",
        description:
          "Super 100: Arvind Kejriwal Remand | AAP | BJP 3rd List | PM Modi | Lok Sabha Election #delhiliquorpolicyscam #arvindkejriwal ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/-KklYZC3TZ4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/-KklYZC3TZ4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/-KklYZC3TZ4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-24T01:43:51Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "EUCOv-xiXupee-X7YlAPJZKiBLU",
      id: {
        kind: "youtube#video",
        videoId: "e6pUg87RpcY",
      },
      snippet: {
        publishedAt: "2024-03-27T04:00:03Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Ravneet Singh Bittu Join BJP LIVE: Congress का बड़ा चेहरा बीजेपी में शामिल | Lok Sabha Election 2024",
        description:
          "Ravneet Singh Bittu Join BJP LIVE: Congress का बड़ा चेहरा बीजेपी में शामिल | Lok Sabha Election ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/e6pUg87RpcY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/e6pUg87RpcY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/e6pUg87RpcY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T04:00:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "7q-etlYnTZi_ty2X1EVXa6I2bok",
      id: {
        kind: "youtube#video",
        videoId: "Yy7FfU-dScI",
      },
      snippet: {
        publishedAt: "2024-03-27T08:38:41Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "High Court Decision On Kejriwal Live: हाई कोर्ट में केजरीवाल पर फैसला, चौंक गए केजरीवाल | ED",
        description:
          "High Court Decision On Kejriwal Live: हाई कोर्ट में केजरीवाल पर फैसला, चौंक गए ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Yy7FfU-dScI/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Yy7FfU-dScI/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Yy7FfU-dScI/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "live",
        publishTime: "2024-03-27T08:38:41Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "xA0yMHbJMyr6b7_aRffvaZRvfy0",
      id: {
        kind: "youtube#video",
        videoId: "Nq2wYlWFucg",
      },
      snippet: {
        publishedAt: "2022-11-16T12:42:23Z",
        channelId: "UCt4t-jeY85JegMlZ-E5UWtA",
        title:
          "Aaj Tak LIVE TV: No Relief For Arvind Kejriwal | | Lok Sabha Elections | Samajwadi Party |BJP Vs AAP",
        description:
          "शराब घोटाले मामले में दिल्ली के मुख्यमंत्री अरविंद केजरीवाल को ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Nq2wYlWFucg/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Nq2wYlWFucg/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Nq2wYlWFucg/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Aaj Tak",
        liveBroadcastContent: "live",
        publishTime: "2022-11-16T12:42:23Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "deDF6NwS7erCwH98NZIJNnblPpw",
      id: {
        kind: "youtube#video",
        videoId: "5o53S1_rt70",
      },
      snippet: {
        publishedAt: "2024-03-27T01:13:05Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Mukhtar Ansari in ICU LIVE Update: ICU में मुख्तार अंसारी, डॉन की जान खतरे में? | Mukhtar Ansari",
        description:
          "Mukhtar Ansari in ICU LIVE Update: ICU में मुख्तार अंसारी, आखिरी सांसे ले रहा डॉन ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/5o53S1_rt70/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/5o53S1_rt70/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/5o53S1_rt70/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T01:13:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Hq9f213fyXKke2_t1s9oC-nXzh8",
      id: {
        kind: "youtube#video",
        videoId: "juKxWSsO9oU",
      },
      snippet: {
        publishedAt: "2024-03-26T09:19:48Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "K Kavitha Witness on Arvind Kejriwal LIVE: के कविता के फोन से मिले सबूत ! फंस गए केजरीवाल !",
        description:
          "K Kavitha Witness on Arvind Kejriwal LIVE: के कविता के फोन से मिले सबूत ! फंस गए केजरीवाल !",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/juKxWSsO9oU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/juKxWSsO9oU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/juKxWSsO9oU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-26T09:19:48Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "eTODI5rytk1vu6Dq8_hiuOJDbEA",
      id: {
        kind: "youtube#video",
        videoId: "74DsXwey8wY",
      },
      snippet: {
        publishedAt: "2022-04-13T05:00:13Z",
        channelId: "UCZFMm1mMw0F81Z37aaEzTUA",
        title:
          "Viral Video: Country-Made Pistol Found On Teacher In UP After Tip-Off",
        description:
          "A woman was arrested in Uttar Pradesh's Mainpuri yesterday for possessing a country-made pistol, police said today. Officials ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/74DsXwey8wY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/74DsXwey8wY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/74DsXwey8wY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "NDTV",
        liveBroadcastContent: "none",
        publishTime: "2022-04-13T05:00:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "vx88ncqofzZZCp7W6CzZ7c00FqI",
      id: {
        kind: "youtube#video",
        videoId: "Y-S2V8schcA",
      },
      snippet: {
        publishedAt: "2024-03-23T11:28:03Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Kejriwal Resignation : Congress के बड़े नेता ने भी, केजरीवाल से क्यों मांगा इस्तीफा ? |  ED Remand",
        description:
          "Kejriwal Resignation : Congress के बड़े नेता ने भी, केजरीवाल से क्यों मांगा इस्तीफा ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Y-S2V8schcA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Y-S2V8schcA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Y-S2V8schcA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-23T11:28:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "R0jFXvPV8Pgc02vuLo5nZCEGYa8",
      id: {
        kind: "youtube#video",
        videoId: "r8zD58QCmQk",
      },
      snippet: {
        publishedAt: "2024-03-27T01:17:29Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "K Kavitha Big Statement On Arvind Kejriwal: रिमांड में के कविता ने केजरीवाल के खोले बड़े राज ?",
        description:
          "Delhi Liquor Policy Scam News: केजरीवाल की गिरफ्तारी को लेकर दिल्ली की सड़कों पर ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/r8zD58QCmQk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/r8zD58QCmQk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/r8zD58QCmQk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T01:17:29Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "kNZe8ByIrkZAXKcIESJydtaQ-8I",
      id: {
        kind: "youtube#video",
        videoId: "Ojw4sw4Wk9U",
      },
      snippet: {
        publishedAt: "2024-03-04T06:13:11Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Today Latest News LIVE: BJP Candidate 1st List | PM Modi Cabinet Meeting | BJP-RLD Seat Sharing",
        description:
          "Today Latest News LIVE: BJP Candidate 1st List | PM Modi Cabinet Meeting | BJP-RLD Seat Sharing | Delhi Weather | Top 100 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Ojw4sw4Wk9U/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Ojw4sw4Wk9U/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Ojw4sw4Wk9U/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-04T06:13:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "HPcF609iIiej1mmvEEqjvQKb9vE",
      id: {
        kind: "youtube#video",
        videoId: "StmQq4hSQwk",
      },
      snippet: {
        publishedAt: "2023-12-28T02:47:16Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Women Question To PM Modi Live: महिला ने किया पीएम मोदी से सवाल, जवाब सुन छूटे सबके पसीने ! India TV",
        description:
          "Women Question To PM Modi Live: महिला ने किया पीएम मोदी से सवाल, जवाब सुन छूटे ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/StmQq4hSQwk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/StmQq4hSQwk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/StmQq4hSQwk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2023-12-28T02:47:16Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "DFN33O2cTvPM2htQX7L7Qpeaugo",
      id: {
        kind: "youtube#video",
        videoId: "xl6j-vJ4Jjw",
      },
      snippet: {
        publishedAt: "2024-03-01T01:39:35Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Maharashtra Opinion Poll LIVE: महाराष्ट्र की 48 सीटों का ओपिनियन पोल...अबकी बार किसकी सरकार ? | 2024",
        description:
          "Maharashtra Opinion Poll LIVE: महाराष्ट्र की 48 सीटों का ओपिनियन पोल...अबकी बार ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/xl6j-vJ4Jjw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/xl6j-vJ4Jjw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/xl6j-vJ4Jjw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-01T01:39:35Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Xt1C2oil4u5x4I_uoxGVQ7Bx_H8",
      id: {
        kind: "youtube#video",
        videoId: "IrhQUQRiepg",
      },
      snippet: {
        publishedAt: "2024-03-25T09:33:39Z",
        channelId: "UCN7B-QD0Qgn2boVH5Q0pOWg",
        title:
          "Pakistan Holi : पाकिस्तान में कैसे मना होली का त्योहार, हिंदुओं ने कैसे रखा रमज़ान का ख़्याल? (BBC)",
        description:
          "इस साल मार्च का महीना पांच अलग-अलग संस्कृतियों और धर्म को मानने वाले ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/IrhQUQRiepg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/IrhQUQRiepg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/IrhQUQRiepg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "BBC News Hindi",
        liveBroadcastContent: "none",
        publishTime: "2024-03-25T09:33:39Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "PmjJRlWjN6PVWhYsAmbErI7Axjc",
      id: {
        kind: "youtube#video",
        videoId: "UEQhAEnM9SU",
      },
      snippet: {
        publishedAt: "2022-07-20T05:56:29Z",
        channelId: "UCef1-8eOpJgud7szVPlZQAQ",
        title:
          "Railway Track Ruckus: Passengers Cross Seconds Before Train&#39;s Arrival | #Shorts | #ViralVideo",
        description:
          "A video shared by IAS officer Awanish Sharan that shows a woman and other passengers crossing a railway track with luggage ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/UEQhAEnM9SU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/UEQhAEnM9SU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/UEQhAEnM9SU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "CNN-News18",
        liveBroadcastContent: "none",
        publishTime: "2022-07-20T05:56:29Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "i1Z4wYK0F-c5Nn8hx6WW2xlU4zU",
      id: {
        kind: "youtube#video",
        videoId: "p5jgUg4fIfk",
      },
      snippet: {
        publishedAt: "2024-03-20T01:35:47Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "BJP- MNS Alliance Live: NDA में MNS की एंट्री, &#39;NDA&#39; में शामिल &#39;राज ठाकरे&#39;? | Maharashtra |Amit Shah",
        description:
          "Lok Sabha elections 2024: Raj Thackeray meets Amit Shah in Delhi over seat-sharing in Maharashtra. Raj Thackeray called on ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/p5jgUg4fIfk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/p5jgUg4fIfk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/p5jgUg4fIfk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-20T01:35:47Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "gKughgbtl4TXAhs4vDNzvlHiYtk",
      id: {
        kind: "youtube#video",
        videoId: "2z16UliNX3U",
      },
      snippet: {
        publishedAt: "2024-03-27T09:37:31Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Arvind Kejriwal High Court Hearing News LIVE: केजरीवाल के लिए पुलिस और वकील भिड़े  | ED | AAP",
        description:
          "Arvind Kejriwal High Court Hearing News LIVE: केजरीवाल के लिए पुलिस और वकील भिड़े | ED | AAP ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/2z16UliNX3U/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/2z16UliNX3U/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/2z16UliNX3U/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-27T09:37:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "76N4iG_HC0U7OhFsZ2TBiqJzPJU",
      id: {
        kind: "youtube#video",
        videoId: "pxuG1uW73_o",
      },
      snippet: {
        publishedAt: "2024-03-26T05:02:55Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Arvind Kejriwal Exposed By K Kavitha :  केजरीवाल गए जेल  तो AAP किसके दम पर लड़ेंगी चुनाव ? ED | AAP",
        description:
          "Arvind Kejriwal Exposed By K Kavitha : केजरीवाल गए जेल तो AAP किसके दम पर लड़ेंगी चुनाव ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/pxuG1uW73_o/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/pxuG1uW73_o/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/pxuG1uW73_o/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-26T05:02:55Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "utZNcjvZsf27WWDutHMBGKH-FSI",
      id: {
        kind: "youtube#video",
        videoId: "wbQ32jjC_Rk",
      },
      snippet: {
        publishedAt: "2024-03-23T13:06:25Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "BJP First Reaction On Kejriwal ED Remand: केजरीवाल को ED रिमांड, BJP का आया पहला ‘रिएक्शन’ India TV",
        description:
          "BJP First Reaction On Kejriwal ED Remand: केजरीवाल को ED रिमांड, BJP का आया पहला 'रिएक्शन' ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/wbQ32jjC_Rk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/wbQ32jjC_Rk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/wbQ32jjC_Rk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-23T13:06:25Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "NzVI0sWE92r0vxhUiS1Oe3XOVgU",
      id: {
        kind: "youtube#video",
        videoId: "F_g9T8lRYSw",
      },
      snippet: {
        publishedAt: "2024-03-24T14:44:59Z",
        channelId: "UCttspZesZIDEwwpVIgoZtWQ",
        title:
          "Javed Arrested Badaun Update LIVE: डर के मारे जावेद ने उगल दिया सारा राज | Encounter | UP Police",
        description:
          "Javed Arrested Badaun Update LIVE: डर के मारे जावेद ने उगल दिया सारा राज | Encounter | UP ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/F_g9T8lRYSw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/F_g9T8lRYSw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/F_g9T8lRYSw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IndiaTV",
        liveBroadcastContent: "none",
        publishTime: "2024-03-24T14:44:59Z",
      },
    },
  ],
};

export const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const timeOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
