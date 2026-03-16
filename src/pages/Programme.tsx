import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
const heroBg = "/optimized/banner_bg.webp";
const pinnyang = "/optimized/pinnyang.webp";
const george = "/optimized/george.webp";
const jeroni = "/optimized/jeroni.jpg";
const liewBio = `Liew Chin Tong is the Deputy Minister of Finance of Malaysia, appointed on 16 December 2025. He is currently the Member of Parliament for Iskandar Puteri, after being elected on 19 November 2022. He is also the State Assemblyperson for Perling, Johor.

While serving as the Deputy Minister of Investment, Trade and Industry from December 2022 to December 2025, he worked closely with Minister Tengku Zafrul Aziz, with the New Industrial Master Plan (NIMP 2030) as the guiding document, to shape the strategic directions of Malaysia’s industrial development, especially for the semiconductor, iron and steel, and automotive sectors.

He was a Senator in Dewan Negara from 2018 to 2021 and served as Deputy Minister of Defence from July 2018 to February 2020. He was first elected Member of Parliament for Bukit Bendera (2008-2013) and was subsequently the Member of Parliament for Kluang (2013-2018).

Since 1999, Chin Tong has served the Democratic Action Party (DAP) in various capacities and is now a member of its Central Executive Committee, serving as the Strategic Director.

Chin Tong graduated with a degree in Political Science and an honours degree in Asian Studies from the Australian National University and holds an International Masters in Regional Integration from the Asia-Europe Institute, University of Malaya.

Chin Tong was the Chairman of Research for Social Advancement (REFSA) from 2012 to May 2025. Prior to that, he was the Executive Director of Penang Institute from 2009-2012. He was also formerly a Visiting Senior Fellow at the Institute of Southeast Asian Studies (ISEAS), Singapore.

He recently published the book Second Takeoff: Strategies for Malaysia’s Economic Resurgence which outlined his vision for the emergence of Malaysia as a middle-class society.`;

type Speaker = {
  name: string;
  nowrapName?: boolean;
  title: string;
  company: string;
  photo?: string;
  whiteBg?: boolean;
  chineseName?: string;
  logoOnly?: boolean;
  clickable?: boolean;
  bio?: string;
};

type Session = {
  time: string;
  title?: string;
  description?: string;
  speakers?: Speaker[];
  moderator?: Speaker;
  host?: Speaker;
  bullets?: string[];
  prizes?: {
    name: string;
    url?: string;
    image?: string;
    note?: string;
  }[];
  isPanel?: boolean;
  panelNumber?: number;
  panelTitle?: string;
  isSpecial?: boolean;
  specialImage?: string;
};

const mainStageSchedule: Session[] = [
  {
    time: "09:40 - 09:45",
    title: "Welcoming Address",
    description: "",
    speakers: [
      {
        name: "Lim Pinn Yang",
        title: "Chief Executive Officer",
        company: "Foodie Media Berhad",
        photo: pinnyang,
        bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.`,
      },
    ],
  },
  { time: "09:45 - 09:55", title: "Industrial Address", description: "" },
  {
    time: "09:55 - 10:05",
    title: "Opening Address",
    description: "",
    speakers: [
      {
        name: "Yang Berhormat Liew Chin Tong",
        title: "Deputy Minister of Finance",
        company: "Government of Malaysia",
        photo: "/optimized/liewChinTong.png",
        whiteBg: true,
        bio: liewBio,
      },
    ],
  },
  {
    time: "10:05 - 10:10",
    title: "Official Launch",
    description: "",
    speakers: [
      {
        name: "Yang Berhormat Liew Chin Tong",
        title: "Deputy Minister of Finance",
        company: "Government of Malaysia",
        photo: "/optimized/liewChinTong.png",
        whiteBg: true,
        bio: liewBio,
      },
      {
        name: "Lim Pinn Yang",
        title: "Chief Executive Officer",
        company: "Foodie Media Berhad",
        photo: pinnyang,
        bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.`,
      },
      {
        name: "George Poh, CFP®",
        title: "Chief Executive Officer",
        company: "Spire Digital Sdn. Bhd.",
        photo: george,
        bio: `George Poh, CFP® is the Chief Executive Officer of Spire Digital Sdn Bhd, a finance-focused digital media company under EE Cameron Group, built with one mission: to make financial literacy more accessible, responsible, and impactful for everyday Malaysians. Spire Digital stands for one purpose — Inspiring Confidence, Empowering Financial Decisions.

Before leading Spire Digital, George built hands-on experience in banking and wealth-related roles, including Hong Leong Bank Berhad, where he served more than 150 High Net Worth Individuals (HNWI) in wealth management and asset financing solutions. He later led performance outcomes in asset financing, achieving more than RM150 million in new loan acquisition during the 2020/21 financial year.

Driven by the belief that education is the foundation of better money choices, George transitioned in 2H 2022 to focus on financial planning and education, combining industry experience with professional standards as a Licensed Financial Planner and CFP® professional. With his team, he has since educated 1,120+ young working adults on personal finance and investing through his proprietary learning approach.

At Monie Fest, George represents a long-term vision: building a credible financial media ecosystem that raises literacy, strengthens decision-making, and creates lasting financial confidence.`,
      },
    ],
  },
  {
    time: "10:10 - 11:00",
    title: "Event Walkabout & Press Conference",
    description: "",
    speakers: [
      {
        name: "Yang Berhormat Liew Chin Tong",
        title: "Deputy Minister of Finance",
        company: "Government of Malaysia",
        photo: "/optimized/liewChinTong.png",
        whiteBg: true,
        bio: liewBio,
      },
      {
        name: "Lim Pinn Yang",
        title: "Chief Executive Officer",
        company: "Foodie Media Berhad",
        photo: pinnyang,
        bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.`,
      },
      {
        name: "George Poh, CFP®",
        title: "Chief Executive Officer",
        company: "Spire Digital Sdn. Bhd.",
        photo: george,
        bio: `George Poh, CFP® is the Chief Executive Officer of Spire Digital Sdn Bhd, a finance-focused digital media company under EE Cameron Group, built with one mission: to make financial literacy more accessible, responsible, and impactful for everyday Malaysians. Spire Digital stands for one purpose — Inspiring Confidence, Empowering Financial Decisions.

Before leading Spire Digital, George built hands-on experience in banking and wealth-related roles, including Hong Leong Bank Berhad, where he served more than 150 High Net Worth Individuals (HNWI) in wealth management and asset financing solutions. He later led performance outcomes in asset financing, achieving more than RM150 million in new loan acquisition during the 2020/21 financial year.

Driven by the belief that education is the foundation of better money choices, George transitioned in 2H 2022 to focus on financial planning and education, combining industry experience with professional standards as a Licensed Financial Planner and CFP® professional. With his team, he has since educated 1,120+ young working adults on personal finance and investing through his proprietary learning approach.

At Monie Fest, George represents a long-term vision: building a credible financial media ecosystem that raises literacy, strengthens decision-making, and creates lasting financial confidence.`,
      },
    ],
  },
  {
    time: "11:00 - 11:15",
    title: "Lucky Draw (up to RM100,000 worth of Prizes)",
    isSpecial: true,
    prizes: [
      {
        name: "Dyson Supersonic",
        url: "https://www.dyson.my/supersonic-nural-ceramic-pink",
        image: "/optimized/dyson.jpg",
        note: "worth RM2,399",
      },
      {
        name: "Xiaomi 55' TV",
        url: "https://www.mi.com/my/product/xiaomi-tv-a-55-2026/",
        image: "/optimized/xiaomitv.webp",
        note: "worth RM1,999",
      },
      {
        name: "Samsung Galaxy Buds",
        url: "https://www.samsung.com/my/audio-sound/galaxy-buds/galaxy-buds-core-black-sm-r410nzkaxme/",
        image: "/optimized/samsung-galaxy-buds.webp",
        note: "worth RM199",
      },
    ],
  },
  {
    time: "11:15 - 12:00",
    title: "Malaysia’s Outlook 2026 - What It Means for Investors in 2H",
    moderator: {
      name: "Mohammad Bazli Che Rozenan",
      title: "Director, Members Engagement",
      company: "CFA Society Malaysia",
      photo: "/optimized/mohammadBazli.jpg",
      bio: `Mohammad Bazli Che Rozenan, CFA, serves as Director of Members Engagement for CFA Society Malaysia, bringing his expertise in economic research and market analysis to support member value and community engagement. Bazli leads FX, Rates, and Commodities research in PNB's Economics team, where he is responsible for developing sophisticated forecasting and strategic market analysis for the PNB Investment team.\n\nPreviously, as a Special Officer to the Minister of Finance, he helped develop national economic responses, including 2020 stimulus packages and Budget 2021, engaging extensively with government and industry stakeholders.\n\nBazli graduated with a First Class Master of Physics from the University of Warwick and is a CFA Charterholder.`,
    },
  },
  {
    time: "12:00 - 12:45",
    title: "Investment Talk",
    description: "",
    speakers: [],
  },
  {
    time: "12:45 - 13:30",
    title: "Investment Talk",
    description: "",
    speakers: [
      {
        name: "Moomoo Malaysia",
        title: "",
        company: "",
        photo: "/optimized/moomoo.webp",
        whiteBg: true,
      },
    ],
  },
  {
    time: "13:30 - 14:15",
    title: "Investment Talk",
    description: "",
    speakers: [
      {
        name: "FSMOne",
        title: "",
        company: "",
        photo: "/optimized/FSM_One.png",
        whiteBg: true,
        logoOnly: true,
        clickable: false,
      },
    ],
  },
  {
    time: "14:15 - 15:00",
    isPanel: true,
    panelNumber: 2,
    panelTitle: "How Government Policies Quietly Shape Your Personal Finances",
    bullets: [],
    speakers: [
      {
        name: "Dr. Ong Kian Ming",
        title: "Adjunct Professor",
        company: "Taylor's University",
        photo: "/optimized/ongKianMing.avif",
        bio: `Dr. Ong Kian Ming is the Executive Director of RGE Malaysia, part of a Singapore-headquartered global resources-based manufacturing and management group. He is also an Adjunct Professor at Taylor’s University and previously served as the university’s Pro Vice-Chancellor for External Engagement as well as Program Director for the Philosophy, Politics and Economics (PPE) programme.

Dr. Ong brings extensive experience across government, academia, and industry. He served on the Board of Directors of the Malaysian Investment Development Authority (MIDA) and acts as an adviser to several organisations, including the Malaysia China Chamber of Commerce (MCCC) and the Federation of Malaysian Manufacturers (FMM). He is also a member of the Danish Chamber of Commerce (DANCHAM) and part of the CEREBRUM Council, a policy think tank initiated by Johor Corporation.

Prior to his current roles, Dr. Ong served two terms as a Member of Parliament in Malaysia from 2013 to 2022 and was the Deputy Minister of International Trade and Industry from 2018 to 2020. He has also held research and advisory roles with international and regional institutions, including Global Counsel and the ISEAS–Yusof Ishak Institute.

A former Fulbright Scholar, Dr. Ong holds a PhD in Political Science from Duke University, an MPhil in Economics from the University of Cambridge, and a BSc in Economics from the London School of Economics. Before entering politics, he worked as a consultant at the Boston Consulting Group and as a lecturer and policy researcher in Malaysia.

Outside of his professional work, Dr. Ong enjoys jogging, watching movies, and listening to podcasts. He also hosts his own podcast channel, “Are We OK?”.`,
      },
      {
        name: "Khairy Jamaluddin",
        title: "Former Cabinet Minister Malaysia",
        company: "KS Media",
        photo: "/optimized/khairyJamaluddin.avif",
        bio: `An alumnus of University of Oxford and University College London, Khairy Jamaluddin (KJ) served as Malaysia’s Minister of Health from 2021 to 2022. He previously held the positions of Minister of Science, Technology and Innovation (2020–2021) and Minister of Youth and Sports (2013–2018). Today, he co-hosts the Keluar Sekejap and is a radio presenter at Hot FM.`,
      },
      {
        name: "George Poh, CFP®",
        title: "Chief Executive Officer",
        company: "Spire Digital Sdn. Bhd.",
        photo: "/optimized/george.webp",
        bio: `George Poh, CFP® is the Chief Executive Officer of Spire Digital Sdn Bhd, a finance-focused digital media company under EE Cameron Group, built with one mission: to make financial literacy more accessible, responsible, and impactful for everyday Malaysians. Spire Digital stands for one purpose — Inspiring Confidence, Empowering Financial Decisions.

Before leading Spire Digital, George built hands-on experience in banking and wealth-related roles, including Hong Leong Bank Berhad, where he served more than 150 High Net Worth Individuals (HNWI) in wealth management and asset financing solutions. He later led performance outcomes in asset financing, achieving more than RM150 million in new loan acquisition during the 2020/21 financial year.

Driven by the belief that education is the foundation of better money choices, George transitioned in 2H 2022 to focus on financial planning and education, combining industry experience with professional standards as a Licensed Financial Planner and CFP® professional. With his team, he has since educated 1,120+ young working adults on personal finance and investing through his proprietary learning approach.

At Monie Fest, George represents a long-term vision: building a credible financial media ecosystem that raises literacy, strengthens decision-making, and creates lasting financial confidence.`,
      },
    ],
  },
  {
    time: "15:00 - 15:45",
    title: "Don’t Fall For These Bitcoin (& Crypto) Myths",
    description: "",
    speakers: [
      {
        name: "Jeroni Khoo",
        title: "Deputy Country Manager",
        company: "Luno Malaysia",
        photo: jeroni,
        bio: `Jeroni Khoo is the Deputy Country Manager at Luno Malaysia, a leading digital asset
exchange in Malaysia. He supports the Country Manager in ensuring regulatory compliance,
overseeing daily operations, and driving cross-functional projects that align with the
company’s strategic objectives. In this role, he also heads community engagement
initiatives, cultivates relationships with key industry influencers, and spearheads localised
marketing and promotional campaigns in collaboration with strategic partners.

Jeroni joined Luno in 2022 as the Partnerships & Affiliates Lead, where he played a pivotal
role in driving customer acquisition through high-impact brand partnerships with
e-commerce platforms and mass-market brands. He also managed Luno’s local affiliate
program, successfully expanding the network of affiliates to enhance the company’s
referral program.

With a background in local and international Fast-Moving Consumer Goods companies,
Jeroni brings extensive experience in brand management and marketing strategy. His
expertise in developing and executing data-driven marketing initiatives has contributed to
brand growth and increased market share in highly competitive industries.

Jeroni holds a Bachelor's Degree in Business & Commerce, with a double major in
Marketing and Economics, from Monash University.`,
      },
    ],
  },
  {
    time: "15:45 - 16:00",
    title: "Lucky Draw (up to RM100,000 worth of Prizes)",
    isSpecial: true,
    prizes: [
      {
        name: "Louis Vuitton Pochette Eva",
        url: "https://my.louisvuitton.com/eng-my/products/pochette-eva-monogram-nvprod6380091v/M13567",
        image: "/optimized/louis-vuitton-pochette-eva.webp",
        note: "worth RM6,750",
      },
      {
        name: "iPad 11 (128GB, Blue)",
        url: "https://www.apple.com/my/shop/buy-ipad/ipad/128gb-blue-wifi",
        image: "/optimized/ipad11.webp",
        note: "worth RM1599",
      },
      {
        name: "Dior Rouge Lipstick (x2)",
        url: "https://www.dior.com/en_my/beauty/products/rouge-dior-Y0356009.html",
        image: "/optimized/dior-lipstick.webp",
        note: "worth RM410",
      },
    ],
  },
  {
    time: "16:00 - 16:45",
    title: "Big Returns Without Big Barriers: From RM10 to 18%",
    description: "",
    speakers: [
      {
        name: "Afiq Ismail",
        title: "PR & Marketing Manager",
        company: "microLEAP",
        photo: "/optimized/afiq.webp",
        whiteBg: true,
        bio: `Afiq Ismail is the PR & Marketing Manager at microLEAP, with extensive experience in public relations, digital marketing, and brand communications, particularly within the fintech and impact-driven sectors. He plays a key role in shaping microLEAP’s brand presence and positioning as Malaysia’s leading Shariah-compliant peer-to-peer financing platform.

In 2024, Afiq was instrumental in driving microLEAP’s brand growth, contributing to a 246% increase in social media engagement and significantly expanding the platform’s share of voice. His expertise spans strategic content creation, media planning, and narrative development to effectively connect fintech solutions with broader audiences.

Afiq is also a strong advocate for integrating AI tools into public relations, leveraging automation and data-driven insights to enhance storytelling, outreach, and audience engagement. Passionate about purposeful branding and inclusive financial communication, he is committed to humanising fintech and making financial solutions more accessible to underserved communities.`,
      },
    ],
  },
  {
    time: "16:45 - 17:30",
    isPanel: true,
    panelNumber: 3,
    panelTitle: "Can Crypto Coexist With a Boring, Stable Financial Plan?",
    bullets: [],
    speakers: [
      {
        name: "Aaron Tang",
        title: "General Manager (APAC)",
        company: "Luno Malaysia",
        photo: "/optimized/aaronTang.avif",
        bio: `Aaron is the General Manager (APAC) for Luno where he oversees Luno’s business operations in the region. He is also responsible for cultivating relationships with stakeholders in the local digital asset and financial sectors, banks and key government bodies to help drive business and industry interests in cryptocurrency.

    As part of the pioneering team in Malaysia, Aaron began his journey at Luno in 2018 as the
    Marketing and Community Lead, following which he took on the role as the Country Manager for Luno Malaysia in 2019. Notably, he played an instrumental role in launching Luno in Malaysia, where the company became the first Digital Asset Exchange to obtain full approval from Securities Commission Malaysia in 2019.

    Prior to joining Luno, Aaron spent almost a decade in the Oil & Gas industry working with international companies like PETRONAS and Weatherford International. He also has experience in the Learning & Development and Social Enterprise space. In his free time, he runs a popular blog — which has been featured in publications such as Business Insider, The Edge, iMoney, SAYS and Malaysia’s #1 Business Radio, BFM.

    Aaron holds a Bachelor’s Degree in Electrical & Electronics Engineering from Universiti Teknologi PETRONAS.`,
      },
      {
        name: "Datuk Clifford Hii",
        title: "Chief Executive Officer",
        company: "Gambit Group",
        photo: "/optimized/datuk_clifford_hii.jpg",
        bio: `Datuk Clifford Hii is a former lawyer turned corporate leader with extensive experience at the helm of both public-listed and private organisations. He has held CEO and Managing Director roles in prominent institutions, including HCK Capital Berhad and SEGi, among others.

  With a proven track record in driving growth, strategic transformation, and organisational turnaround, Datuk Clifford brings deep expertise across the education, property, and financial sectors. His leadership is marked by strong governance, commercial acumen, and a forward-looking approach to building sustainable and scalable businesses.`,
      },
    ],
    description: "",
  },
  {
    time: "17:30 - 18:15",
    title: "You Can’t Build a Stable Financial Plan on Unstable Custody",
    description: "",
    speakers: [
      {
        name: "Tevaryan A/L Thiagarajan",
        title: "Senior Manager, Digital Asset & Corporate Development",
        company: "Gambit Custody",
        photo: "/optimized/tevaryanThiagarajan.jpg",
        bio: `A mechanical and aerospace engineering graduate from Nanyang Technological University, Tevaryan Thiagarajan leads innovative projects at the intersection of digital assets and traditional finance. With a strong grasp in tech and markets, he builds ventures that connect both—structuring profitable deals and driving sustainable growth.`,
      },
    ],
  },
  {
    time: "18:15 - 19:00",
    isPanel: true,
    panelNumber: 4,
    panelTitle: "When Passion Meets Planning: How to Turn Dreams into Reality",
    bullets: [],
    speakers: [],
    description: "",
  },
  {
    time: "19:00 - 19:45",
    title: "Investment Talk 5",
    description: "",
    speakers: [{ name: "Exhibitor G", title: "Exhibitor", company: "" }],
  },
  {
    time: "19:45 - 20:00",
    title: "Lucky Draw (up to RM100,000 worth of Prizes)",
    isSpecial: true,
    prizes: [
      {
        name: "Modenas Kriss 110 2026",
        url: "https://www.zigwheels.my/new-motorcycles/modenas/kriss-110#:~:text=RM%204%2C599%20%2D%204%2C998%20OTR%20Price,115S%2C%20Kriss%20MR2%20and%20RX110.",
        image: "/optimized/modenas-kriss.webp",
        note: "worth RM4,998",
      },
      {
        name: "Apple Watch SE (40mm)",
        url: "https://www.apple.com/my/shop/buy-watch/apple-watch-se/40mm-gps-midnight-aluminium-neon-yellow-sport-band-m-l-se",
        image: "/optimized/applewatch.webp",
        note: "worth RM1,049",
      },
      {
        name: "Philips NA110 Air Fryer",
        url: "https://www.philips.com.my/c-p/NA110_09/1000-series-airfryer-1000-series-32l",
        image: "/optimized/airfryer.webp",
        note: "worth RM259",
      },
    ],
  },
  { time: "20:00 - 20:10", title: "Day 1 End" },
];

const engagementStageSchedule: Session[] = [
  {
    time: "11:30 - 12:00",
    title: "Investment Talk 1",
    description: "",
    speakers: [{ name: "Exhibitor A", title: "Exhibitor", company: "" }],
  },
  {
    time: "12:00 - 12:30",
    title: "Investment Talk 2",
    description: "",
    speakers: [{ name: "Exhibitor B", title: "Exhibitor", company: "" }],
  },
  {
    time: "12:30 - 13:00",
    title: "When Parents Grow Older: Here's How to Prepare Financially",
    description: "",
    speakers: [
      {
        name: "Chin Yi Xuan",
        title: "Finance Creator",
        company: "No Money Lah",
        photo: "/optimized/yixuan.webp",
        bio: `Yi Xuan Chin is a dividend investor, speaker, and the creator of the finance blog nomoneylah.com, where he shares practical money and investing habits for everyday Malaysians. Over the past seven years, he has documented his own dividend investing journey to inspire others to build their “freedom of choice” in life.

He holds a degree in Economics from Universiti Malaya (UM) and was formerly the General Manager of a licensed proprietary trading firm in Malaysia. Yi Xuan has been a speaker for Bursa Malaysia’s educational webinars for the past three years, and has also appeared on platforms such as BBK Network and Caijin by BFM.

Currently pursuing his Certified Financial Planner (CFP) qualification, he combines real-world investing experience with structured financial planning principles — helping working adults prepare not just for retirement, but for life’s bigger financial responsibilities, including caring for aging parents.`,
      },
    ],
  },
  {
    time: "13:00 - 13:30",
    title: "Beyond Salary: Building Passive Income in 2026",
    description: "",
    speakers: [
      {
        name: "Gin Chong",
        title: "Founder",
        company: "StayWokeProperty",
        photo: "/optimized/ginChong.jpeg",
        bio: `Gin Chong is the Founder of StayWokeProperty and a prominent property content creator in Malaysia. He has reviewed over 200 property developments nationwide, providing honest, educational and engaging insights into the real estate market. Through his entertaining yet informative approach, Gin empowers homebuyers and investors to make smarter property decisions.`,
      },
      {
        name: "William K",
        title: "Finance and Lifestyle Content Creator",
        company: "@richdadwilliam @richdadinvests",
        photo: "/optimized/william.jpeg",
        bio: `Expertise in personal finances investment and management. Occasionally does comedic content.`,
      },
    ],
  },

  {
    time: "13:30 - 14:00",
    title: "Investment Talk 3",
    description: "",
    speakers: [{ name: "Exhibitor D", title: "Exhibitor", company: "" }],
  },

  {
    time: "14:00 - 14:30",
    title: "Investment Talk 4",
    description: "",
    speakers: [{ name: "Exhibitor E", title: "Exhibitor", company: "" }],
  },

  {
    time: "14:30 - 15:00",
    title: "Podcast 2: When Is It Actually Safe to Upgrade Your Lifestyle?",
    description: "",
    speakers: [
      {
        name: "Exhibitor F & Panelists",
        title: "Exhibitor & Panelists",
        company: "",
      },
    ],
    host: {
      name: "Sai",
      title: "Comedy Skits, Penang Influencer, Authentic Storyteller",
      company: "Wabikong",
      photo: "/optimized/sai.jpg",
      bio: `Sai a proud Penangite, is a comedy, lifestyle and culture content creator known for his comedic skits and street interviews like the Boss Series and 30 Days 30 Jobs in Penang Series.

    Blending elements of Japanese and Penang culture in his comedic skits, his viewers enjoy his cultural experience videos where he explores the traditions and the linguistics of local people with his unique sense of humour. His content also occasionally takes viewers on a journey to various locations within Malaysia, particularly Penang.

    Sai has also been featured in films such as Follow Aunty La! and variety shows like Why You So Smart Geh? His charisma and ability to engage with both local and international audiences have garnered him a dedicated fanbase, with many tuning in for his lighthearted yet informative takes on life.`,
    },
  },

  { time: "15:00 - 15:30" },

  {
    time: "15:30 - 16:00",
    title: "Investment Talk 5",
    description: "",
    speakers: [{ name: "Exhibitor G", title: "Exhibitor", company: "" }],
  },

  {
    time: "16:00 - 16:30",
    title: "Podcast 3: Starting Your Journey into Alternative Investments",
    description: "",
    speakers: [
      {
        name: "Frankie Lim",
        title: "Host",
        company: "FAQ Show",
        photo: "/optimized/frankie.png",
        bio: `Frankie Lim is a partner and Chief Sales Officer at FitLit Media Tech Group and the host of the FAQ Show, with a vision to empower retail investors amidst the growing trend of retail participation in financial markets. With over a decade of experience in investment banking across corporate finance, equity capital markets, trading, and investor relations, Frankie collaborates closely with financial institutions to simplify financial knowledge for Mr Money TV's audience.

He holds a Bachelor's degree in Economics from the University of Manchester, UK, with a focus on accounting and finance.

A pioneer in retail investor engagement, Frankie co-organized the first-ever retail corporate day in partnership with an investment bank, traditionally reserved for institutional investors, bridging retail investors with company executives to deepen understanding of corporate prospects.

He has interviewed influential figures, including Farm Fresh CEO Mr. Loi Tuan Ee, MSM Malaysia CEO Syed Feizal, renowned economist Jomo Kwame Sundaram, and Abdul Jalil Abdul Rasheed, the former CEO of Berjaya Corporation and Permodalan Nasional Berhad.`,
      },
    ],
  },

  { time: "16:30 - 17:00" },
  {
    time: "17:00 - 17:30",
    title: "Investment Talk",
    description: "",
    speakers: [],
  },

  {
    time: "17:30 - 18:00",
    title: "Investment Talk",
    description: "",
    speakers: [],
  },

  {
    time: "18:00 - 18:30",
    title: "Podcast 4: When Life Happens - Is Your Family Financially Ready?",
    description: "",
    speakers: [
      {
        name: "Cheah Zi Kah, CFP®",
        title: "Chief Growth Officer",
        company: "Gambit Digital Trustees, Part of Gambit Group Consortium",
        photo: "/optimized/cheah_Zi_Kah.jpg",
        bio: `Cheah Zi Kah is a Certified Financial Planner (CFP®) with over 10 years of experience in the financial services industry. He specialises in unit trust investments, insurance solutions, and will & trust planning, with a strong and comprehensive understanding of holistic financial planning.`,
      },
    ],
  },

  {
    time: "18:30 - 19:00",
    title: "Investment Talk 6",
    description: "",
    speakers: [{ name: "Exhibitor K", title: "Exhibitor", company: "" }],
  },

  { time: "19:00 - 19:30", title: "Investment Talk" },

  { time: "19:30 - 20:00" },
  { time: "20:00 - 20:10", title: "Day 1 End" },
];

// Day 2 Capital Stage schedule (red-cell entries only)
const mainStageScheduleDay2: Session[] = [
  {
    time: "10:30 - 11:15",
    isPanel: true,
    panelNumber: 1,
    panelTitle: "Buy, Rent, or Wait: Making Property Decisions Without FOMO",
    bullets: [],
    speakers: [
      {
        name: "Sean Tan",
        title: "Property YouTuber",
        company: "@iherng",
        photo: "/optimized/iherng.jpg",
        bio: `Sean, academically trained with a Degree in Architecture and a Master’s in Real Estate, brings over 15 years of industry experience to the table. Along the way, he has seen early investment successes, and yes, a few failures too, which shaped his practical and grounded perspective on property.

    Today, he channels that experience into his mission of simplifying property knowledge through engaging videos and honest property reviews nationwide. Moreover, he has documented more than 500 different property projects to date.`,
      },
    ],
    description: "",
  },

  {
    time: "11:15 - 12:00",
    title: "Investment Talk 6",
    description: "",
    speakers: [
      {
        name: "Moomoo Malaysia",
        title: "",
        company: "",
        photo: "/optimized/moomoo.webp",
        whiteBg: true,
      },
    ],
  },

  {
    time: "12:00 - 12:45",
    isPanel: true,
    panelNumber: 2,
    panelTitle: "Global Market Signals - Rates, Indices and Volatility",
    bullets: [],
    speakers: [
      {
        name: "Sean Freer",
        title: "Director, Global Exchange Indices",
        company: "S&P Dow Jones Indices",
        photo: "/optimized/seanFreer.jpg",
        bio: `Sean Freer is Director, Global Exchange Indices at S&P Dow Jones Indices (S&P DJI). He is responsible for the product management of S&P DJI’s global exchange partnered indices including the S&P/ASX series. In this role, Sean supports S&P DJI’s efforts developing new benchmarks for local and international equity markets and promotes their use among clients in the Asia‑Pacific region. He also regularly publishes research, analytical reports and market commentary on a variety of international investment topics.

Prior to joining S&P DJI, Sean was a senior product specialist at Franklin Templeton, supporting a number of business development and client retention activities for their global, emerging market and U.S. equity investment platforms. He has also had roles as a product manager and proposal and investment writer at AMP Capital Investors, Russell Investments and Fidelity International. Before joining the financial services industry in 2006, Sean was a broadcast journalist in Queensland, Australia.

Sean holds a master’s degree in International Relations from Dublin City University and bachelor’s degree in Journalism from the University of Queensland.`,
      },
      {
        name: "Vincent Wang",
        title: "Manager, APAC Derivatives Sales",
        company: "Cboe Global Markets",
        photo: "/optimized/vincentWang.jpg",
        bio: `Vincent Wang is part of the APAC Derivatives Sales team at Cboe Global Markets, focusing on supporting the firm’s regional growth strategy across retail brokers and online trading platforms. Based in Singapore, he leads initiatives to deepen client relationships through strategic marketing collaborations and by establishing Cboe’s footprint in Southeast Asian markets. He holds an Honours Degree in Banking and Finance from Nanyang Technological University.`,
      },
    ],
    description: "",
  },

  {
    time: "12:45 - 13:00",
    title: "Lucky Draw (up to RM100,000 worth of Prizes)",
    isSpecial: true,
    prizes: [
      {
        name: "Ogawa Inizio Massage Chair",
        url: "https://ogawaworld.net/ogawa-inizio-massage-chair?srsltid=AfmBOorKzRgXQ_RRf11WLwi5yCVhaVNDwEhUG8akwMVa_W105r-dWvv2",
        image: "/optimized/ogawaMassageChair.webp",
        note: "worth RM9,999",
      },
      {
        name: "Dior Rouge Lipstick (x2)",
        url: "https://www.dior.com/en_my/beauty/products/rouge-dior-Y0356009.html",
        image: "/optimized/dior-lipstick.webp",
        note: "worth RM410",
      },
    ],
  },

  {
    time: "13:00 - 13:45",
    title: "Finance Lang 现场环节",
    description: "",
    speakers: [
      {
        name: "George Poh, CFP®",
        title: "Chief Executive Officer",
        company: "Spire Digital Sdn. Bhd.",
        photo: "/optimized/george.webp",
        nowrapName: true,
        bio: `George Poh, CFP® is the Chief Executive Officer of Spire Digital Sdn Bhd, a finance-focused digital media company under EE Cameron Group, built with one mission: to make financial literacy more accessible, responsible, and impactful for everyday Malaysians. Spire Digital stands for one purpose — Inspiring Confidence, Empowering Financial Decisions.

Before leading Spire Digital, George built hands-on experience in banking and wealth-related roles, including Hong Leong Bank Berhad, where he served more than 150 High Net Worth Individuals (HNWI) in wealth management and asset financing solutions. He later led performance outcomes in asset financing, achieving more than RM150 million in new loan acquisition during the 2020/21 financial year.

Driven by the belief that education is the foundation of better money choices, George transitioned in 2H 2022 to focus on financial planning and education, combining industry experience with professional standards as a Licensed Financial Planner and CFP® professional. With his team, he has since educated 1,120+ young working adults on personal finance and investing through his proprietary learning approach.

At Monie Fest, George represents a long-term vision: building a credible financial media ecosystem that raises literacy, strengthens decision-making, and creates lasting financial confidence.`,
      },
      {
        name: "Chloe Foo",
        title: "Creator",
        company: "Finance Lang",
        photo: "/optimized/chloe.avif",
        bio: `Chloe is the producer and finance creator of Finance Lang, and also represents the “beginner investor” perspective on the show.

Her role goes beyond being a host—she acts as a bridge between the audience and financial professionals. By asking the right questions, she helps translate complex financial and investment concepts into simple, authentic, and relatable discussions, making it easier for more people to truly access and understand personal finance.

With a background in multimedia design and video production, Chloe works with her team to build one of Malaysia’s fastest-growing personal finance and investment podcasts — Finance Lang. Within just eight months, the show surpassed 2 million views and has inspired more than 80,000 viewers to start paying attention to and learning about investing and financial management.`,
      },
    ],
  },

  {
    time: "13:45 - 14:30",
    isPanel: true,
    panelNumber: 3,
    panelTitle: "Gaji Naik, Kenapa Duit Tetap Tak Cukup?",
    bullets: [],
    speakers: [
      {
        name: "Exhibitor N & Panelists",
        title: "Exhibitor & Panelists",
        company: "",
      },
    ],
    moderator: {
      name: "Financial Faiz",
      title: "Moderator",
      company: "",
    },
    description: "",
  },

  {
    time: "14:30 - 15:15",
    isPanel: true,
    panelNumber: 4,
    panelTitle:
      "Entrepreneurship in 2026: Building Businesses That Last in a Changing Economy",
    bullets: [],
    speakers: [
      {
        name: "Yeoh Chen Chow",
        title: "Independent Non-Executive Chairman",
        company: "Foodie Media Berhad",
        photo: "/optimized/yeohChenChow.avif",
        bio: `Yeoh Chen Chow is Independent Non-Executive Chairman of Foodie Media Berhad, a company listed on Bursa Ace market. He is also Founder of 1% Advisory & Coaching and Independent Non-Executive Director of Audience Analytics Limited, a company listed on SGX Catalist.

    Prior to this, he was co-founder of Fave Group. He is an alumnus of Cornell University and an Eisenhower Fellow.`,
      },
    ],
    description: "",
  },

  { time: "15:15 - 15:30", title: "Break", description: "" },
  {
    time: "15:30 - 15:45",
    title: "Lucky Draw (up to RM100,000 worth of Prizes)",
    isSpecial: true,
    prizes: [
      {
        name: "Modenas Kriss 110 2026",
        url: "https://www.zigwheels.my/new-motorcycles/modenas/kriss-110#:~:text=RM%204%2C599%20%2D%204%2C998%20OTR%20Price,115S%2C%20Kriss%20MR2%20and%20RX110.",
        image: "/optimized/modenas-kriss.webp",
        note: "worth RM4,998",
      },
      {
        name: "Dior Rouge Lipstick (x2)",
        url: "https://www.dior.com/en_my/beauty/products/rouge-dior-Y0356009.html",
        image: "/optimized/dior-lipstick.webp",
        note: "worth RM410",
      },
    ],
  },
  {
    time: "15:45 - 16:30",
    title: "US Fed policy & global rate cycles",
    description: "",
    speakers: [
      {
        name: "Moomoo Malaysia",
        title: "",
        company: "",
        photo: "/optimized/moomoo.webp",
        whiteBg: true,
      },
      {
        name: "Fong Wei Ziet",
        title: "Director",
        company: "Ziet Media Sdn Bhd",
        photo: "/optimized/ziet.JPG",
        bio: `Ziet is a financial educator who simplifies personal finance, investments, wealth-building, and economics for Malaysians. He’s passionate about making financial literacy practical, relatable, and accessible. His YouTube channel “Ziet Invests” has over 230K subscribers and has garnered more than 16 million views, establishing him as a leading voice in Malaysian financial literacy.

He was previously a senior analyst (commercial) at YTL Power International Berhad with experience in research analysis, financial modeling, M&As, and has helped develop Ryt Bank (a BNM-licensed digital bank) Ziet is currently partners with trusted financial brands, including Moomoo Malaysia, Webull, Wise, Ryt Bank, Versa, etc.`,
      },
    ],
  },

  {
    time: "16:30 - 17:15",
    isPanel: true,
    panelNumber: 5,
    panelTitle:
      "Why East Malaysia Policy Direction Matters to Long-Term Investors",
    bullets: [],
    speakers: [],
    moderator: {
      name: "Peter Kong",
      title: "Head of Research",
      company: "Kenanga Investment Bank Berhad",
      photo: "/optimized/peterKong.jpg",
      bio: `Prior to joining Kenanga as Head of Research, Peter was an award-winning analyst for financials and industrials sector with CLSA Securities Malaysia, where he assumed the role of Deputy Head of Research. Prior to that, Peter honed his credit/bond market skills during his time at RAM Rating Services Berhad as a credit analyst. Starting out his career as an auditor with PricewaterhouseCoopers, Peter is both a licensed accountant and a Chartered Financial Analyst.`,
    },
    description: "",
  },

  {
    time: "17:15 - 18:00",
    title: "Investment Talk 9",
    description: "",
    speakers: [{ name: "Exhibitor R", title: "Exhibitor", company: "" }],
  },

  {
    time: "18:00 - 18:45",
    panelTitle: "SME: The Backbone of the Malaysian Economy",
    description: "",
    isPanel: true,
    bullets: [],
    moderator: {
      name: "Lim Pinn Yang",
      title: "Chief Executive Officer",
      company: "Foodie Media Berhad",
      photo: pinnyang,
      bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.`,
    },
    speakers: [
      {
        name: "YB Steven Sim",
        title: "",
        company: "",
      },
      {
        name: "Shan Li Tay",
        title: "Managing Director",
        company: "Endeavor Malaysia",
        photo: "/optimized/shanLiTay.jpg",
        bio: `As the Managing Director, Shan Li is passionate in helping to accelerate the growth of Malaysia’s high impact entrepreneurs and contributing to the success of the ecosystem.

With an extensive background in corporate leadership, entrepreneurship, and strategic growth, Shan Li brings a dynamic blend of experience that will drive Endeavor Malaysia’s mission to empower high-impact entrepreneurs and foster a vibrant entrepreneurial ecosystem.

Shan Li’s career spans diverse industries and roles, reflecting her innovative and agile approach to business. She is a qualified Chartered Accountant with over 15 years experience in banking and finance before venturing into the entrepreneurial world. As an entrepreneur she is the founder of Swipeless, a singles platform that believes in connecting people in real life as well as the co-founder of Babydash,one of Malaysia’s pioneering e-commerce platforms for the mum and baby industry. Shan Li is also a partner at ScaleUp Malaysia, where she plays a pivotal role in accelerating and investing in startups.

Under Shan Li’s leadership, Endeavor Malaysia will expand its support for entrepreneurs through tailored mentorship, access to capital, and global networking opportunities.`,
      },
    ],
  },

  {
    time: "18:45 - 19:30",
    isPanel: true,
    panelNumber: 6,
    panelTitle: "What Changes After You Make Your First Million?",
    bullets: [],
    host: {
      name: "Peter Yong",
      title: "Founder",
      company: "Mr Money TV",
      photo: "/optimized/peter.webp",
      bio: `Peter Yong is the visionary behind Finlit Media, a dynamic media startup with a mission centered on empowering individuals through engaging educational and entertaining content.

Renowned as the charismatic host of Malaysia's groundbreaking financial channel, Mr. Money TV, Peter boasts over a decade of expertise as a financial planner and advisor. His unique talent lies in distilling intricate financial concepts into accessible, actionable knowledge through the art of storytelling.

Peter's influential work extends beyond the screen, as he collaborates with esteemed financial institutions both nationally and internationally. His partnerships with institutions such as MOF, KWSP, BSN, PNB, AHAM Capital, Prudential, and more, exemplify his commitment to elevating financial literacy and enhancing the quality of life for Malaysians.

In terms of education, Peter holds a degree in psychology and business management, underpinning his multidisciplinary approach to financial enlightenment. Furthermore, he is also a Registered Financial Planner (RFP) endorsed by the Malaysian Financial Planning Council (MFPC).`,
    },
    speakers: [
      {
        name: "Bryan Loo",
        title: "CEO",
        company: "Tealive",
        photo: "/optimized/bryanloo.jpg",
        bio: `Bryan Loo is the Founder and CEO of Tealive and the founder of Loob Holding Sdn Bhd. An award-winning entrepreneur, he has grown Tealive into Southeast Asia’s leading lifestyle tea brand, with over 1,000 outlets serving 5.5 million customers monthly across multiple international markets.

Guided by his philosophy “Think Big, Start Small, Scale Fast,” Bryan has expanded Loob Holding into one of Malaysia’s largest F&B groups, overseeing brands such as Bask Bear Coffee, Happy Potato, WonderBrew Kombucha, and Sodaxpress.

Recognised for his entrepreneurial achievements, Bryan has received numerous accolades including the Ernst & Young Entrepreneur of the Year and has been named among Tatler Asia’s Most Influential. He is also an Endeavor Entrepreneur and part of the Endeavor Outliers Class of 2025.

Bryan is passionate about inspiring young entrepreneurs and continues to champion innovation in the food and beverage industry.`,
      },
      {
        name: "Lim Pinn Yang",
        title: "Chief Executive Officer",
        company: "Foodie Media Berhad",
        photo: pinnyang,
        bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.`,
      },
    ],
  },

  {
    time: "19:30 - 20:00",
    title: "Lucky Draw (up to RM100,000 worth of Prizes)",
    isSpecial: true,
    prizes: [
      {
        name: "Zenith Chronomaster Sport Watch",
        url: "https://www.zenith-watches.com/en_my/product/chronomaster-sport-95-3100-3600-39-m3100",
        image: "/optimized/chronomasterSport.webp",
        note: "worth RM56,500",
      },
      {
        name: "iPhone 17 Pro Max",
        url: "https://www.apple.com/my/shop/buy-iphone/iphone-17-pro/6.9-inch-display-256gb-cosmic-orange",
        image: "/optimized/iphone-17-pro.webp",
        note: "worth RM5,999",
      },
    ],
  },
  { time: "20:00 - 20:15", title: "Day 2 End" },
];

const engagementStageScheduleDay2: Session[] = [
  { time: "10:30 - 11:00" },
  {
    time: "11:00 - 11:30",
    title: "Building Your Dividend Machine",
    description: "",
    speakers: [
      {
        name: "Tan Kyzen, Max",
        title: "Director",
        company: "Gyaku Capital Sdn. Bhd.",
        photo: "/optimized/max.jpg",
        bio: `Tan Kyzen, Max is a passionate investor with over 8 years of investment experience, and currently serving as an Senior Partner at a corporate advisory firm, with prior experience as an associate director in a private equity firm.

With extensive experience in risk and compliance management and a solid background in the Malaysian stock market, Max bridges funds with promising investment prospects. He is also the Director of Gyaku Capital Sdn. Bhd., delivering valuable financial content and ensuring fair information distribution among investors.

Max’s expertise is further recognised as an active speaker on Cityplus FM, a columnist on Nanyang via Eventure Group, a speaker for Bursa Malaysia, RHB Investment Bank, and an SGX Academy Speaker. Furthermore, Max is also a registered Marketing Representative with Moomoo Securities Malaysia Sdn. Bhd. and iFast Capital Sdn. Bhd., and had interviewed more than 60 public listed companies across Bursa Malaysia. He is also currently an active speaker across several universities across Malaysia.

Over his career, Max had previously been involved in a software development company, as well as a business solutions consultation company in Malaysia. He was also featured on NanYang （南洋）, Oriental Daily （东方）, China Press（中国报）, and had secured numerous awards including Best Intelligent Figures 2022/2023, as well as interview by Shanghai（商海) previously.`,
      },
    ],
  },
  {
    time: "11:30 - 12:00",
    title:
      "Podcast 1: High Value Future Skills for Malaysia's Youth: What Do the Market Really Value?",
    speakers: [
      {
        name: "Prestine Davekhaw",
        title: "Founder",
        company: "MalaysianPAYGAP",
        photo: "/optimized/prestine.jpg",
        bio: `Prestine Davekhaw is the founder of MalaysianPAYGAP, the community-driven platform pioneering salary transparency in Southeast Asia. Since its inception as a grassroots movement, the platform has grown into a leading HR tech startup, utilizing tens of thousands of data points to advocate for fair pay and equity. A champion for data-driven hiring, Prestine works at the intersection of community advocacy and corporate transparency to build a more equitable future for the Malaysian workforce.`,
      },
    ],
  },
  { time: "12:00 - 12:30" },
  {
    time: "12:30 - 13:00",
    title: "The Asset Most People Ignore… Until It’s Too Late",
    description: "",
    speakers: [
      {
        name: "Wan Azfar Azeem (MrKripto)",
        title: "Ikon Kripto Syariah",
        company: "Asri Ahmad Academy Sdn. Bhd.",
        photo: "/optimized/azfar.jpg",
        bio: `Dedicated professional with passion in evolving landscape of WEB 3 technologies, with focus on Cryptocurrency Investment & Trading. With over 12 years of comprehensive investment experience, I am currently entrusted with the role of an educator, providing valuable insights into investment opportunities.

A accredited HRDC Trainer, specializing in Digital Assets investing, I have had the privilege of imparting knowledge to a diverse audience of over 15,000 individuals since 2020. The success of this educational initiative has been underscored by the full support and collaboration extended by Luno, KDX & Mx Global, a regulatory-compliant entity under the Malaysian Securities Commission.

Further strengthening the credibility of my educational initiatives, my training modules are officially endorsed by UTM Space, ensuring a structured, high-quality learning experience backed by academic excellence.

Driven by a commitment to financial literacy and responsible investing, I continue to bridge the gap between traditional finance and the future of digital assets, helping individuals make informed investment decisions in the rapidly growing WEB3 ecosystem.
`,
      },
    ],
  },
  {
    time: "13:00 - 13:30",
    title:
      "Podcast 2: Financial Independence for Women — Planning, Investing & Growing",
    description: "",
    speakers: [
      {
        name: "Isabelle Zhen",
        title: "Head of Group Equity Marketing",
        company: "Kenanga Investment Bank Berhad",
        photo: "/optimized/isabelleZhen.avif",
        bio: `A multiple award-winning financial product specialist at Kenanga Investment Bank, with awards from UK, HK, Singapore & Malaysia. She has spoken at over 190 events & today, she has a theory that men are great traders, but women are fantastic investors. She is licensed by Securities Commission with CMSRL 6 and 7, she now serves as Head of Group Equity Marketing at Kenanga Investment Bank Berhad.`,
      },
      {
        name: "Pn. Adibah Mazlan",
        title: "",
        company: "",
      },
    ],
  },
  {
    time: "13:30 - 14:00",
    title: "100万其实没有你想象那么大和难累积",
    description: "",
    speakers: [
      {
        name: "Jack Chan (天哥)",
        title: "Founder",
        company: "第一天投资理财日记",
        photo: "/optimized/jackChan.avif",
        bio: `Jack Chan（天哥）是《第一天投资理财日记》的创办人，也是马来西亚知名投资理财内容创作者与畅销理财书作者。他积极推广大众理财教育，曾担任 ASTRO 著名理财节目《全家私房钱》编剧，并拥有 FIMM 信托基金顾问高级组织经理及私人退休金计划（PRS）顾问资格，曾名列多家上市公司前30大股东之列。`,
      },
    ],
  },
  {
    time: "14:00 - 14:30",
    title: "Investment Talk 7",
    description: "",
    speakers: [{ name: "Exhibitor L", title: "Exhibitor", company: "" }],
  },
  {
    time: "14:30 - 15:00",
    title: "Podcast 3: Finance Lang 现场环节",
    description: "",
    speakers: [
      {
        name: "George Poh, CFP®",
        title: "Chief Executive Officer",
        company: "Spire Digital Sdn. Bhd.",
        photo: "/optimized/george.webp",
        nowrapName: true,
        bio: `George Poh, CFP® is the Chief Executive Officer of Spire Digital Sdn Bhd, a finance-focused digital media company under EE Cameron Group, built with one mission: to make financial literacy more accessible, responsible, and impactful for everyday Malaysians. Spire Digital stands for one purpose — Inspiring Confidence, Empowering Financial Decisions.

Before leading Spire Digital, George built hands-on experience in banking and wealth-related roles, including Hong Leong Bank Berhad, where he served more than 150 High Net Worth Individuals (HNWI) in wealth management and asset financing solutions. He later led performance outcomes in asset financing, achieving more than RM150 million in new loan acquisition during the 2020/21 financial year.

Driven by the belief that education is the foundation of better money choices, George transitioned in 2H 2022 to focus on financial planning and education, combining industry experience with professional standards as a Licensed Financial Planner and CFP® professional. With his team, he has since educated 1,120+ young working adults on personal finance and investing through his proprietary learning approach.

At Monie Fest, George represents a long-term vision: building a credible financial media ecosystem that raises literacy, strengthens decision-making, and creates lasting financial confidence.`,
      },
      {
        name: "Chloe Foo",
        title: "Creator",
        company: "Finance Lang",
        photo: "/optimized/chloe.avif",
        bio: `Chloe is the producer and finance creator of Finance Lang, and also represents the “beginner investor” perspective on the show.

Her role goes beyond being a host—she acts as a bridge between the audience and financial professionals. By asking the right questions, she helps translate complex financial and investment concepts into simple, authentic, and relatable discussions, making it easier for more people to truly access and understand personal finance.

With a background in multimedia design and video production, Chloe works with her team to build one of Malaysia’s fastest-growing personal finance and investment podcasts — Finance Lang. Within just eight months, the show surpassed 2 million views and has inspired more than 80,000 viewers to start paying attention to and learning about investing and financial management.`,
      },
    ],
  },
  { time: "15:00 - 15:30" },
  {
    time: "15:30 - 16:00",
    title: "Investment Talk 8",
    description: "",
    speakers: [{ name: "Exhibitor M", title: "Exhibitor", company: "" }],
  },
  {
    time: "16:00 - 16:30",
    title: "Stand-up Comedy by BBK Network",
    description: "",
    speakers: [
      {
        name: "Lucas",
        chineseName: "卢卡斯",
        title: "Stand-up Comedian & Lead Host",
        photo: "/optimized/lucas.avif",
        company: "BBK Network",
        bio: `Lucas is a premier Stand-up Comedian and content strategist known for his sharp wit and insightful perspective on global affairs. Holding a background in Economics, he possesses a unique ability to dissect complex national and international news, transforming intricate socio-economic topics into engaging and relatable comedic narratives.

Beyond the digital screen, Lucas is a powerhouse on the live stage, having successfully completed multiple sold-out Solo Stand-up Specials across Malaysia and overseas. His performances are a masterclass in satirical comedy, blending data-driven insights with fearless social commentary. Whether analyzing market trends or local current events, Lucas delivers a highly intellectual yet hilariously provocative experience that resonates with a diverse, international audience.`,
      },
      {
        name: "Kah Mun",
        chineseName: "嘉雯",
        title: "Stand-up Comedian & Lead Host",
        photo: "/optimized/kahMun.avif",
        company: "BBK Network",
        bio: `Kah Mun is a vibrant and charismatic Stand-up Comedian and media professional who has taken the Malaysian comedy scene by storm. As a Lead Host and Content Producer at BBK Network, she plays a pivotal role in shaping digital narratives, blending her sharp journalistic sense with creative entertainment. She is widely recognized for her on-screen news analysis, where she breaks down current events with a signature blend of humor and clarity, making complex topics accessible to a wide audience.

On the live stage, Kah Mun is a powerhouse, having performed in numerous Solo Stand-up Specials and collaborative comedy tours. With her dual expertise in content production and live performance, she uniquely commands an audience while seamlessly weaving brand messaging into a comedic yet authentic flow, making her one of the industry's most versatile standout performers today.`,
      },
    ],
  },
  { time: "16:30 - 17:00" },
  {
    time: "17:00 - 17:30",
    title: "Why Stock Investing is For You?",
    description: "",
    speakers: [
      {
        name: "Shane Choo",
        title: "Director",
        company: "WealthFort",
        photo: "/optimized/shane.png",
        whiteBg: true,
        bio: `Shane Choo is a financial speaker, trader and investor, with over 15 years of experience trading and investing in local and international stocks, options, ETF, and currency. As a speaker, he is often engaged by investment banks and securities firms to train their retail clients in trading and investment. Since 2015, he has been appointed by Bursa Malaysia to design and conduct investment curriculum to young investors and retail investors nationwide. To date, he has trained over 35,000 individuals in stock investing. Shane is also an International Certified Professional Trainer by IPMA, UK and an Accredited Trainer by HRD Corp. In 2015, he was acknowledged by President Obama for his work as a young leader in financial education.`,
      },
    ],
  },
  {
    time: "17:30 - 18:00",
    title:
      "The Trend is Your Friend: A Masterclass in Consistent Trading Profits",
    description: "",
    speakers: [
      {
        name: "Nigel Chong",
        title: "Founder, NCSPACE ACADEMY SDN BHD | SC Registered MR",
        company: "NCSPACE ACADEMY",
        photo: "/optimized/nigelChong.png",
        whiteBg: true,
        bio: `Nigel Chong is a full-time stock trader and the founder of NCSPACE ACADEMY SDN BHD. Holding a degree in Business Economics and Finance from the University of Nottingham and registered as an MR with the Securities Commissions (SC), Nigel bridges the gap between complex market dynamics and accessible trading strategies. As a featured speaker for Bursa Malaysia's educational series, he specializes in trend trading methodologies and the application of AI-powered tools to uncover market momentum. Known as a "trading buddy" to his community, Nigel is dedicated to helping retail investors build consistent, profitable trading systems.`,
      },
    ],
  },
  {
    time: "18:00 - 18:30",
    title: "Navigating Personal Finance in a Changing Macroeconomic Landscape",
    description: "",
    speakers: [
      {
        name: "Liksen Lei",
        title: "U.S. Equities Investor & Analyst",
        company: "@insightinvests",
        photo: "/optimized/liksen.png",
        bio: `Liksen Lei is an investor focused on U.S. equities with over five years of investing experience. His investment journey gained strong momentum following the COVID-19 period, where he achieved consistent alpha through disciplined research and strategic positioning.

Liksen holds a Bachelor’s degree in Banking and Finance (2022–2025) and is currently pursuing a Master’s degree in Investment Banking at Monash University (2025–2026). Alongside his academic pursuits, he actively shares investment insights through his platform, @insightinvests, where he focuses on market trends, portfolio strategy, and navigating macroeconomic developments.

His approach combines academic knowledge with practical market experience, offering a grounded perspective on investing in global equity markets.`,
      },
    ],
  },
  { time: "18:30 - 18:40", title: "Wrap" },
];

const SpeakerCard = ({
  speaker,
  onClick,
}: {
  speaker: Speaker;
  onClick?: (s: Speaker) => void;
}) => {
  const displayName = speaker?.name || "TBD Speaker";
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  const clickable = !!onClick;

  const nameLower = (speaker.name || "").toLowerCase();
  const companyLower = (speaker.company || "").toLowerCase();
  const isLogo =
    !!(speaker.photo && speaker.photo.toLowerCase().includes("microleap")) ||
    nameLower.includes("microleap");
  const isLogoOnly =
    nameLower.includes("moomoo") ||
    companyLower.includes("moomoo") ||
    !!speaker.logoOnly;
  const headshotStyle: React.CSSProperties | undefined =
    (speaker.name || "") === "Datuk Clifford Hii"
      ? {
          objectPosition: "center 18%",
          transform: "scale(1.65)",
          transformOrigin: "center 22%",
        }
      : (speaker.name || "") === "Fong Wei Ziet"
        ? {
            objectPosition: "center 22%",
            transform: "scale(1.35)",
            transformOrigin: "center 22%",
          }
        : (speaker.name || "") === "Cheah Zi Kah" ||
            (speaker.name || "") === "Shane Choo"
          ? { objectPosition: "center 25%" }
          : undefined;
  const upliftHeadshot = !!headshotStyle;

  const cardProps: any = {};
  if (clickable) {
    cardProps.role = "button";
    cardProps.tabIndex = 0;
    cardProps.onClick = (e: any) => {
      e.stopPropagation();
      onClick && onClick(speaker);
    };
    cardProps.onKeyDown = (e: any) => {
      if (e.key === "Enter" || e.key === " ") {
        e.stopPropagation();
        onClick && onClick(speaker);
      }
    };
  }

  return (
    <div
      className={`group flex items-center gap-3 rounded-xl border border-white/6 bg-white/3 px-3 py-2.5 transition-all duration-200 ${
        clickable
          ? "cursor-pointer hover:border-primary/40 hover:bg-white/6 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
          : ""
      }`}
      {...cardProps}
    >
      {/* Avatar (rectangle for logo-only, circle otherwise) */}
      <div
        className={
          isLogoOnly
            ? `flex-shrink-0 w-28 h-14 rounded-xl overflow-hidden flex items-center justify-center bg-white`
            : `flex-shrink-0 w-14 h-14 rounded-full overflow-hidden flex items-center justify-center font-bold text-lg ${isLogo ? "bg-transparent" : speaker.whiteBg ? "bg-white" : "bg-gradient-to-br from-navy-light to-navy-deep"}`
        }
      >
        {speaker.photo ? (
          <img
            src={speaker.photo}
            alt={displayName}
            loading="eager"
            fetchPriority="high"
            className={
              isLogoOnly
                ? "w-full h-full object-contain p-2"
                : `w-full h-full ${isLogo ? "object-contain p-1" : "object-cover object-top"}`
            }
            style={headshotStyle}
          />
        ) : (
          <span className="text-primary-foreground">{initials}</span>
        )}
      </div>

      {/* Accent bar: hide for logo-only to keep layout clean */}
      {!isLogoOnly && (
        <div className="w-0.5 self-stretch flex-shrink-0 rounded-full bg-gradient-to-b from-primary/70 via-primary/25 to-transparent" />
      )}

      {/* Text */}
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <p className="font-bold text-white text-sm leading-snug">
          {displayName}
          {speaker.chineseName && (
            <span className="text-white ml-2">({speaker.chineseName})</span>
          )}
        </p>
        {speaker.title && (
          <p className="text-xs text-primary italic mt-0.5 leading-tight">
            {speaker.title}
          </p>
        )}
        {speaker.company && (
          <p className="text-xs text-white mt-0.5 leading-tight">
            {speaker.company}
          </p>
        )}
        {clickable && (
          <div className="mt-1 flex items-center gap-1 text-[10px] text-primary/50 group-hover:text-primary transition-colors duration-150">
            View profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
const SessionRow = ({
  session,
  onSpeakerClick,
}: {
  session: Session;
  onSpeakerClick?: (sp: Speaker) => void;
}) => {
  const isDayEnd = !!(session.title && /Day\s*\d+\s*End/i.test(session.title));
  const isInvestmentTalk = !!(
    session.title && session.title.startsWith("Investment Talk")
  );
  return (
    <div className="border-b-2 border-white/6 last:border-b-0 py-4">
      <div
        className={`flex gap-6 ${isDayEnd ? "items-center" : "items-start"}`}
      >
        <div className="w-12 sm:w-14 md:w-32 flex-shrink-0">
          <div className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs sm:text-sm font-medium text-center md:whitespace-nowrap">
            {session.time}
          </div>
        </div>

        <div className="flex-1 pr-4">
          {session.isPanel ? (
            <>
              <p className="text-muted-foreground font-medium mb-1 text-center">
                Panel Discussion
              </p>
              <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500 mb-2 text-center text-lg md:text-xl">
                {session.panelTitle}
              </h3>
            </>
          ) : (
            session.title && (
              <h3
                className={`font-bold ${session.isSpecial ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400 text-center text-lg md:text-xl" : isInvestmentTalk ? "bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-600 text-center text-lg md:text-xl" : "bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500 text-center text-lg md:text-xl"}`}
              >
                {session.title}
              </h3>
            )
          )}

          {session.description && (
            <p className="text-muted-foreground mt-3 text-center md:text-left">
              {session.description}
            </p>
          )}

          {session.prizes &&
            session.prizes.length > 0 &&
            (() => {
              const count = session.prizes.length;
              const gridClass =
                count === 1
                  ? "grid grid-cols-1 max-w-[180px]"
                  : count === 2
                    ? "grid grid-cols-1 md:grid-cols-2 max-w-[560px] mx-auto"
                    : "grid grid-cols-1 sm:grid-cols-3";
              return (
                <div className={`mt-5 ${gridClass} gap-3`}>
                  {session.prizes.map((p, idx) => {
                    const nameLower = (p.name || "").toLowerCase();
                    const whiteBg =
                      nameLower.includes("samsung") ||
                      nameLower.includes("louis") ||
                      nameLower.includes("pochette") ||
                      nameLower.includes("vuitton") ||
                      nameLower.includes("dyson") ||
                      nameLower.includes("apple") ||
                      nameLower.includes("ipad") ||
                      nameLower.includes("iphone");
                    return (
                      <a
                        key={idx}
                        href={p.url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col rounded-xl overflow-hidden border border-white/8 hover:border-primary/50 bg-white/3 hover:bg-white/6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                        aria-label={`Prize: ${p.name}`}
                      >
                        {/* Image panel */}
                        <div
                          className={`relative flex items-center justify-center overflow-hidden ${whiteBg ? "bg-white" : "bg-black/25"}`}
                          style={{ aspectRatio: "5/3" }}
                        >
                          <img
                            src={
                              p.image ||
                              `https://via.placeholder.com/200?text=${encodeURIComponent(p.name)}`
                            }
                            alt={p.name}
                            loading="eager"
                            fetchPriority="high"
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                            style={{ padding: whiteBg ? "8%" : "4%" }}
                          />
                          <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold rounded-full bg-primary text-black uppercase tracking-wider shadow-sm">
                            Lucky Draw
                          </span>
                        </div>
                        {/* Text panel */}
                        <div className="flex flex-col flex-1 px-3 py-2.5 gap-0.5">
                          <div className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors">
                            {p.name}
                          </div>
                          {p.note && (
                            <div className="text-primary/90 text-xs font-semibold mt-0.5">
                              {p.note}
                            </div>
                          )}
                          <div className="mt-auto pt-2 text-[11px] text-muted-foreground/70 flex items-center gap-1">
                            Tap to view
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 17 17 7M7 7h10v10" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              );
            })()}

          {session.bullets && (
            <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground text-sm">
              {session.bullets.map((bullet, i) => (
                <li key={i} className="text-muted-foreground">
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {session.speakers && session.speakers.length > 0 && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {session.speakers.map((speaker, i) => {
                const nameLower = (speaker.name || "").toLowerCase();
                const companyLower = (speaker.company || "").toLowerCase();
                const isExhibitor =
                  /exhibitor|panelists?/.test(nameLower) ||
                  nameLower.includes("microleap") ||
                  nameLower.includes("moomoo") ||
                  companyLower.includes("moomoo");
                const speakerClickable =
                  speaker.clickable !== false && !isExhibitor;
                return (
                  <SpeakerCard
                    key={i}
                    speaker={speaker}
                    onClick={
                      speakerClickable
                        ? (sp) => onSpeakerClick && onSpeakerClick(sp)
                        : undefined
                    }
                  />
                );
              })}
            </div>
          )}

          {(session.host || session.moderator) && (
            <div className="mt-4">
              <p className="font-semibold text-navy-deep mb-2">
                {session.host
                  ? "Hosted by"
                  : session.moderator?.name === "Fong Wei Ziet"
                    ? "Hosted by"
                    : "Moderated by"}
              </p>
              <SpeakerCard
                speaker={session.host ?? session.moderator}
                onClick={(sp) => onSpeakerClick && onSpeakerClick(sp)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Programme = () => {
  const [activeTab, setActiveTab] = useState<"main" | "engagement">("main");
  const [day, setDay] = useState<1 | 2>(1);
  const [speakerModalOpen, setSpeakerModalOpen] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  const placeholderImage = (name = "Speaker") =>
    `https://via.placeholder.com/160?text=${encodeURIComponent(name)}`;

  const openSpeakerModal = (sp: Speaker) => {
    setActiveSpeaker({ ...sp, photo: sp.photo || placeholderImage(sp.name) });
    setSpeakerModalOpen(true);
  };

  const closeSpeakerModal = () => {
    setSpeakerModalOpen(false);
    setActiveSpeaker(null);
  };

  useEffect(() => {
    // Toggle CSS-only modal lock to prevent background scroll without manipulating position.
    try {
      if (speakerModalOpen) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    } catch (e) {}

    return () => {
      try {
        document.body.classList.remove("modal-open");
      } catch {}
    };
  }, [speakerModalOpen]);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[44vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white text-center tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-xl">
            Programme
          </h1>
          <p className="mt-3 text-sm md:text-lg text-primary-foreground/90 text-center max-w-5xl mx-auto">
            MONIE Fest is a large-scale financial lifestyle festival focused on
            money, investing, banking, and everyday financial decisions.
            Co-created by Foodie Media and Spire Digital, the event brings
            leading financial institutions and lifestyle brands together to
            engage 25,000–30,000 retail attendees in one location.
          </p>
        </div>
      </section>

      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Day selector */}
          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={() => setDay(1)}
              aria-pressed={day === 1}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                day === 1
                  ? "cta-pill text-black"
                  : "bg-transparent text-muted-foreground hover:text-primary border border-primary/10"
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setDay(2)}
              aria-pressed={day === 2}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                day === 2
                  ? "cta-pill text-black"
                  : "bg-transparent text-muted-foreground hover:text-primary border border-primary/10"
              }`}
            >
              Day 2
            </button>
          </div>

          {/* Stage Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("main")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === "main"
                  ? "cta-pill text-black"
                  : "bg-transparent text-muted-foreground hover:text-primary border border-primary/10"
              }`}
            >
              Monie Stage
            </button>
            <button
              onClick={() => setActiveTab("engagement")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === "engagement"
                  ? "cta-pill text-black"
                  : "bg-transparent text-muted-foreground hover:text-primary border border-primary/10"
              }`}
            >
              Creator Stage
            </button>
          </div>

          {/* Schedule Table */}
          <div className="mx-auto bg-card rounded-lg overflow-hidden shadow-lg px-2 sm:px-0">
            {/* Table Header */}
            <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] md:grid-cols-[120px_1fr] bg-gradient-to-r from-primary to-primary/80">
              <div className="px-4 py-3 text-black font-bold">Time</div>
              <div className="px-4 py-3 text-black font-bold text-center">
                Topic
              </div>
            </div>

            {/* Table Body */}
            <div className="bg-card px-4">
              {(day === 1
                ? activeTab === "main"
                  ? mainStageSchedule
                  : engagementStageSchedule
                : activeTab === "main"
                  ? mainStageScheduleDay2
                  : engagementStageScheduleDay2
              ).map((session, index) => (
                <SessionRow
                  key={index}
                  session={session}
                  onSpeakerClick={openSpeakerModal}
                />
              ))}
            </div>
          </div>

          {/* Session modal removed - only speaker popup is shown when speakers are clicked */}

          {/* Modal for speaker profile (opens when clicking a speaker) */}
          {speakerModalOpen && activeSpeaker && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
              <div
                role="dialog"
                aria-modal="true"
                className="bg-card rounded-lg w-full mx-4 sm:mx-auto max-w-2xl sm:max-w-xl md:max-w-2xl p-0 relative max-h-[90vh] overflow-hidden"
              >
                <div className="relative">
                  <div className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm p-4 sm:p-6 border-b border-white/6">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="flex-shrink-0">
                        {(() => {
                          const modalHeadshotStyle:
                            | React.CSSProperties
                            | undefined =
                            (activeSpeaker.name || "") === "Datuk Clifford Hii"
                              ? {
                                  objectPosition: "center 18%",
                                  transform: "scale(1.65)",
                                  transformOrigin: "center 22%",
                                }
                              : (activeSpeaker.name || "") === "Fong Wei Ziet"
                                ? {
                                    objectPosition: "center 22%",
                                    transform: "scale(1.35)",
                                    transformOrigin: "center 22%",
                                  }
                                : (activeSpeaker.name || "") ===
                                      "Cheah Zi Kah" ||
                                    (activeSpeaker.name || "") === "Shane Choo"
                                  ? { objectPosition: "center 25%" }
                                  : undefined;
                          return (
                            <div
                              className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden ${activeSpeaker.whiteBg ? "bg-white" : "bg-gray-100"} flex items-center justify-center`}
                            >
                              <img
                                src={
                                  activeSpeaker.photo ||
                                  placeholderImage(activeSpeaker.name)
                                }
                                alt={activeSpeaker.name}
                                loading="eager"
                                fetchPriority="high"
                                className="w-full h-full object-cover object-top"
                                style={modalHeadshotStyle}
                              />
                            </div>
                          );
                        })()}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg sm:text-2xl font-bold text-white">
                          {activeSpeaker.name}
                          {activeSpeaker.chineseName && (
                            <span className="text-white ml-2">
                              ({activeSpeaker.chineseName})
                            </span>
                          )}
                        </h3>
                        <p className="text-xs sm:text-sm text-primary italic mt-1">
                          {activeSpeaker.title}
                        </p>
                        <p className="text-sm text-white font-semibold mt-1">
                          {activeSpeaker.company}
                        </p>
                      </div>

                      <button
                        onClick={closeSpeakerModal}
                        aria-label="Close"
                        className="ml-4 text-muted-foreground text-lg"
                      >
                        ×
                      </button>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 overflow-auto max-h-[70vh]">
                    <div className="speaker-bio text-white text-sm leading-relaxed">
                      {activeSpeaker.bio ? (
                        activeSpeaker.bio.split(/\n\s*\n/).map((para, idx) => (
                          <p
                            key={idx}
                            className="mb-2 text-left sm:text-justify"
                          >
                            {para}
                          </p>
                        ))
                      ) : activeSpeaker.name === "Datuk Clifford Hii" ? null : (
                        <p className="italic">Speaker profile not available.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-center text-muted-foreground text-sm mt-8 italic">
            *Programme might be subjected to changes
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programme;
