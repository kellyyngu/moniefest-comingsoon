import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
// Background served from public/optimized (WebP)
const heroBg = "/optimized/speakerBanner.webp";

type Speaker = {
  name: string;
  title?: string;
  company?: string;
  photo?: string;
  nowrapName?: boolean;
  whiteBg?: boolean;
  chineseName?: string;
  bio?: string;
};

const speakers: Speaker[] = [
  {
    name: "Yeoh Chen Chow",
    title: "Independent Non-Executive Chairman",
    company: "Foodie Media Berhad",
    photo: "/optimized/yeohChenChow.avif",
    bio: `Yeoh Chen Chow is Independent Non-Executive Chairman of Foodie Media Berhad, a company listed on Bursa Ace market. He is also Founder of 1% Advisory & Coaching and Independent Non-Executive Director of Audience Analytics Limited, a company listed on SGX Catalist.

Prior to this, he was co-founder of Fave Group. He is an alumnus of Cornell University and an Eisenhower Fellow.`,
  },
  {
    name: "Lucas",
    chineseName: "卢卡斯",
    title: "Stand-up Comedian & Lead Host",
    company: "BBK Network",
    photo: "/optimized/lucas.avif",
    bio: `Lucas is a premier Stand-up Comedian and content strategist known for his sharp wit and insightful perspective on global affairs. Holding a background in Economics, he possesses a unique ability to dissect complex national and international news, transforming intricate socio-economic topics into engaging and relatable comedic narratives.

Beyond the digital screen, Lucas is a powerhouse on the live stage, having successfully completed multiple sold-out Solo Stand-up Specials across Malaysia and overseas. His performances are a masterclass in satirical comedy, blending data-driven insights with fearless social commentary. Whether analyzing market trends or local current events, Lucas delivers a highly intellectual yet hilariously provocative experience that resonates with a diverse, international audience.`,
  },

  {
    name: "Kah Mun",
    chineseName: "嘉雯",
    title: "Stand-up Comedian & Lead Host",
    company: "BBK Network",
    photo: "/optimized/kahMun.avif",
    bio: `Kah Mun is a vibrant and charismatic Stand-up Comedian and media professional who has taken the Malaysian comedy scene by storm. As a Lead Host and Content Producer at BBK Network, she plays a pivotal role in shaping digital narratives, blending her sharp journalistic sense with creative entertainment. She is widely recognized for her on-screen news analysis, where she breaks down current events with a signature blend of humor and clarity, making complex topics accessible to a wide audience.

On the live stage, Kah Mun is a powerhouse, having performed in numerous Solo Stand-up Specials and collaborative comedy tours. With her dual expertise in content production and live performance, she uniquely commands an audience while seamlessly weaving brand messaging into a comedic yet authentic flow, making her one of the industry's most versatile standout performers today.`,
  },
  {
    name: "Lim Pinn Yang",
    title: "Chief Executive Officer",
    company: "Foodie Media Berhad",
    photo: "/optimized/pinnyang.webp",
    bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.`,
  },
  {
    name: "Yang Berhormat Liew Chin Tong",
    title: "Deputy Minister of Finance",
    company: "Government of Malaysia",
    photo: "/optimized/liewChinTong.png",
    whiteBg: true,
    bio: `Liew Chin Tong is the Deputy Minister of Finance of Malaysia, appointed on 16 December 2025. He is currently the Member of Parliament for Iskandar Puteri, after being elected on 19 November 2022. He is also the State Assemblyperson for Perling, Johor.

While serving as the Deputy Minister of Investment, Trade and Industry from December 2022 to December 2025, he worked closely with Minister Tengku Zafrul Aziz, with the New Industrial Master Plan (NIMP 2030) as the guiding document, to shape the strategic directions of Malaysia’s industrial development, especially for the semiconductor, iron and steel, and automotive sectors.

He was a Senator in Dewan Negara from 2018 to 2021 and served as Deputy Minister of Defence from July 2018 to February 2020. He was first elected Member of Parliament for Bukit Bendera (2008-2013) and was subsequently the Member of Parliament for Kluang (2013-2018).

Since 1999, Chin Tong has served the Democratic Action Party (DAP) in various capacities and is now a member of its Central Executive Committee, serving as the Strategic Director.

Chin Tong graduated with a degree in Political Science and an honours degree in Asian Studies from the Australian National University and holds an International Masters in Regional Integration from the Asia-Europe Institute, University of Malaya.

Chin Tong was the Chairman of Research for Social Advancement (REFSA) from 2012 to May 2025. Prior to that, he was the Executive Director of Penang Institute from 2009-2012. He was also formerly a Visiting Senior Fellow at the Institute of Southeast Asian Studies (ISEAS), Singapore.

He recently published the book Second Takeoff: Strategies for Malaysia’s Economic Resurgence which outlined his vision for the emergence of Malaysia as a middle-class society.`,
  },
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
    name: "Afiq Ismail",
    title: "PR & Marketing Manager",
    company: "microLEAP",
    photo: "/optimized/afiq.webp",
    whiteBg: true,
    bio: `Afiq Ismail is the PR & Marketing Manager at microLEAP, with extensive experience in public relations, digital marketing, and brand communications, particularly within the fintech and impact-driven sectors. He plays a key role in shaping microLEAP’s brand presence and positioning as Malaysia’s leading Shariah-compliant peer-to-peer financing platform.

In 2024, Afiq was instrumental in driving microLEAP’s brand growth, contributing to a 246% increase in social media engagement and significantly expanding the platform’s share of voice. His expertise spans strategic content creation, media planning, and narrative development to effectively connect fintech solutions with broader audiences.

Afiq is also a strong advocate for integrating AI tools into public relations, leveraging automation and data-driven insights to enhance storytelling, outreach, and audience engagement. Passionate about purposeful branding and inclusive financial communication, he is committed to humanising fintech and making financial solutions more accessible to underserved communities.`,
  },
  {
    name: "Datuk Clifford Hii",
    title: "Group CEO",
    company: "Gambit Group",
    photo: "/optimized/datuk_clifford_hii.jpg",
    bio: `Datuk Clifford Hii is a former lawyer turned corporate leader with extensive experience at the helm of both public-listed and private organisations. He has held CEO and Managing Director roles in prominent institutions, including HCK Capital Berhad and SEGi, among others.

With a proven track record in driving growth, strategic transformation, and organisational turnaround, Datuk Clifford brings deep expertise across the education, property, and financial sectors. His leadership is marked by strong governance, commercial acumen, and a forward-looking approach to building sustainable and scalable businesses.`,
  },
  {
    name: "Cheah Zi Kah",
    title: "Chief Growth Officer",
    company: "Gambit Group",
    photo: "/optimized/cheah_Zi_Kah.jpg",
    bio: `Cheah Zi Kah is a Certified Financial Planner (CFP®) with over 10 years of experience in the financial services industry. He specialises in unit trust investments, insurance solutions, and will & trust planning, with a strong and comprehensive understanding of holistic financial planning.`,
  },
  {
    name: "Bryan Loo Woi Lip",
    title: "CEO",
    company: "Tealive",
    photo: "/optimized/bryanloo.jpg",
    bio: `Bryan Loo is the Founder and CEO of Tealive and the founder of Loob Holding Sdn Bhd. An award-winning entrepreneur, he has grown Tealive into Southeast Asia’s leading lifestyle tea brand, with over 1,000 outlets serving 5.5 million customers monthly across multiple international markets.

Guided by his philosophy “Think Big, Start Small, Scale Fast,” Bryan has expanded Loob Holding into one of Malaysia’s largest F&B groups, overseeing brands such as Bask Bear Coffee, Happy Potato, WonderBrew Kombucha, and Sodaxpress.

Recognised for his entrepreneurial achievements, Bryan has received numerous accolades including the Ernst & Young Entrepreneur of the Year and has been named among Tatler Asia’s Most Influential. He is also an Endeavor Entrepreneur and part of the Endeavor Outliers Class of 2025.

Bryan is passionate about inspiring young entrepreneurs and continues to champion innovation in the food and beverage industry.`,
  },
   {
    name: "Chin Yi Xuan",
    title: "Finance Creator",
    company: "No Money Lah",
    photo: "/optimized/yixuan.webp",
    bio: `Yi Xuan Chin is a dividend investor, speaker, and the creator of the finance blog nomoneylah.com, where he shares practical money and investing habits for everyday Malaysians. Over the past seven years, he has documented his own dividend investing journey to inspire others to build their “freedom of choice” in life.

He holds a degree in Economics from Universiti Malaya (UM) and was formerly the General Manager of a licensed proprietary trading firm in Malaysia. Yi Xuan has been a speaker for Bursa Malaysia’s educational webinars for the past three years, and has also appeared on platforms such as BBK Network and Caijin by BFM.

Currently pursuing his Certified Financial Planner (CFP) qualification, he combines real-world investing experience with structured financial planning principles — helping working adults prepare not just for retirement, but for life’s bigger financial responsibilities, including caring for aging parents.`,
  },

  {
    name: "Gin Chong",
    title: "Founder",
    company: "StayWokeProperty",
    photo: "/optimized/ginChong.jpeg",
    bio: `Gin Chong is the Founder of StayWokeProperty and a prominent property content creator in Malaysia. He has reviewed over 200 property developments nationwide, providing honest, educational and engaging insights into the real estate market. Through an entertaining yet informative approach, Gin empowers homebuyers and investors to make smarter property decisions.`,
  },

  {
    name: "Fong Wei Ziet",
    title: "Director",
    company: "Ziet Media Sdn Bhd",
    photo: "/optimized/ziet.JPG",
    bio: `Ziet is a financial educator who simplifies personal finance, investments, wealth-building, and economics for Malaysians. He’s passionate about making financial literacy practical, relatable, and accessible. His YouTube channel “Ziet Invests” has over 230K subscribers and has garnered more than 16 million views, establishing him as a leading voice in Malaysian financial literacy.

He was previously a senior analyst (commercial) at YTL Power International Berhad with experience in research analysis, financial modeling, M&As, and has helped develop Ryt Bank (a BNM-licensed digital bank) Ziet is currently partners with trusted financial brands, including Moomoo Malaysia, Webull, Wise, Ryt Bank, Versa, etc.`,
  },
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

  {
    name: "Jeroni Khoo",
    title: "Deputy Country Manager",
    company: "Luno Malaysia",
    photo: "/optimized/jeroni.jpg",
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
  {
    name: "Liksen Lei",
    title: "U.S. Equities Investor & Analyst",
    company: "@insightinvests",
    photo: "/optimized/liksen.png",
    bio: `Liksen Lei is an investor focused on U.S. equities with over five years of investing experience. His investment journey gained strong momentum following the COVID-19 period, where he achieved consistent alpha through disciplined research and strategic positioning.

Liksen holds a Bachelor’s degree in Banking and Finance (2022–2025) and is currently pursuing a Master’s degree in International Business at Monash University (2025–2026). Alongside his academic pursuits, he actively shares investment insights through his platform, @insightinvests, where he focuses on market trends, portfolio strategy, and navigating macroeconomic developments.

His approach combines academic knowledge with practical market experience, offering a grounded perspective on investing in global equity markets.`,
  },
 

  {
    name: "Mohammad Bazli Che Rozenan, CFA",
    title: "Director, Members Engagement",
    company: "CFA Society Malaysia",
    photo: "/optimized/mohammadBazli.jpg",
    bio: `Mohammad Bazli Che Rozenan, CFA, serves as Director of Members Engagement for CFA Society Malaysia, bringing his expertise in economic research and market analysis to support member value and community engagement. Bazli leads FX, Rates, and Commodities research in PNB's Economics team, where he is responsible for developing sophisticated forecasting and strategic market analysis for the PNB Investment team.

Previously, as a Special Officer to the Minister of Finance, he helped develop national economic responses, including 2020 stimulus packages and Budget 2021, engaging extensively with government and industry stakeholders.

Bazli graduated with a First Class Master of Physics from the University of Warwick and is a CFA Charterholder.`,
  },
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
    name: "Nigel Chong",
    title: "Founder, NCSPACE ACADEMY SDN BHD | SC Registered MR",
    company: "NCSPACE ACADEMY",
    photo: "/optimized/nigelChong.png",
    whiteBg: true,
    bio: `Nigel Chong is a full-time stock trader and the founder of NCSPACE ACADEMY SDN BHD. Holding a degree in Business Economics and Finance from the University of Nottingham and registered as an MR with the Securities Commissions (SC), Nigel bridges the gap between complex market dynamics and accessible trading strategies. As a featured speaker for Bursa Malaysia's educational series, he specializes in trend trading methodologies and the application of AI-powered tools to uncover market momentum. Known as a "trading buddy" to his community, Nigel is dedicated to helping retail investors build consistent, profitable trading systems.`,
  },
  {
    name: "Sean Freer",
    title: "Director, Global Exchange Indices",
    company: "S&P Dow Jones Indices (S&P DJI)",
    photo: "/optimized/seanFreer.jpg",
    bio: `Sean Freer is Director, Global Exchange Indices at S&P Dow Jones Indices (S&P DJI). He is responsible for the product management of S&P DJI’s global exchange partnered indices including the S&P/ASX series. In this role, Sean supports S&P DJI’s efforts developing new benchmarks for local and international equity markets and promotes their use among clients in the Asia‑Pacific region. He also regularly publishes research, analytical reports and market commentary on a variety of international investment topics.

Prior to joining S&P DJI, Sean was a senior product specialist at Franklin Templeton, supporting a number of business development and client retention activities for their global, emerging market and U.S. equity investment platforms. He has also had roles as a product manager and proposal and investment writer at AMP Capital Investors, Russell Investments and Fidelity International. Before joining the financial services industry in 2006, Sean was a broadcast journalist in Queensland, Australia.

Sean holds a master’s degree in International Relations from Dublin City University and bachelor’s degree in Journalism from the University of Queensland.`,
  },

  {
    name: "Peter Yong",
    title: "Founder",
    company: "Mr Money TV",
    photo: "/optimized/peter.webp",
    bio: `Peter Yong is the visionary behind Finlit Media, a dynamic media startup with a mission centered on empowering individuals through engaging educational and entertaining content.

Renowned as the charismatic host of Malaysia's groundbreaking financial channel, Mr. Money TV, Peter boasts over a decade of expertise as a financial planner and advisor. His unique talent lies in distilling intricate financial concepts into accessible, actionable knowledge through the art of storytelling.

Peter's influential work extends beyond the screen, as he collaborates with esteemed financial institutions both nationally and internationally. His partnerships with institutions such as MOF, KWSP, BSN, PNB, AHAM Capital, Prudential, and more, exemplify his commitment to elevating financial literacy and enhancing the quality of life for Malaysians.

In terms of education, Peter holds a degree in psychology and business management, underpinning his multidisciplinary approach to financial enlightenment. Furthermore, he is also a Registered Financial Planner (RFP) endorsed by the Malaysian Financial Planning Council (MFPC).`,
  },
  {
    name: "Sai",
    title: "Comedy Skits, Penang Influencer, Authentic Storyteller",
    company: "Wabikong",
    photo: "/optimized/sai.jpg",
    bio: `Sai a proud Penangite, is a comedy, lifestyle and culture content creator known for his comedic skits and street interviews like the Boss Series and 30 Days 30 Jobs in Penang Series.

Blending elements of Japanese and Penang culture in his comedic skits, his viewers enjoy his cultural experience videos where he explores the traditions and the linguistics of local people with his unique sense of humour. His content also occasionally takes viewers on a journey to various locations within Malaysia, particularly Penang.

Sai has also been featured in films such as Follow Aunty La! and variety shows like Why You So Smart Geh? His charisma and ability to engage with both local and international audiences have garnered him a dedicated fanbase, with many tuning in for his lighthearted yet informative takes on life.`,
  },

    {
    name: "Sean Tan",
    title: "Property YouTuber",
    company: "@iherng",
    photo: "/optimized/iherng.jpg",
    bio: `Sean, academically trained with a Degree in Architecture and a Master’s in Real Estate, brings over 15 years of industry experience to the table. Along the way, he has seen early investment successes, and yes, a few failures too, which shaped his practical and grounded perspective on property.

Today, he channels that experience into his mission of simplifying property knowledge through engaging videos and honest property reviews nationwide. Moreover, he has documented more than 500 different property projects to date.`,
  },
  {
    name: "Shane Choo",
    title: "Director",
    company: "WealthFort",
    photo: "/optimized/shane.png",
    whiteBg: true,
    bio: `Shane Choo is a financial speaker, trader and investor, with over 15 years of experience trading and investing in local and international stocks, options, ETF, and currency. As a speaker, he is often engaged by investment banks and securities firms to train their retail clients in trading and investment. Since 2015, he has been appointed by Bursa Malaysia to design and conduct investment curriculum to young investors and retail investors nationwide. To date, he has trained over 35,000 individuals in stock investing. Shane is also an International Certified Professional Trainer by IPMA, UK and an Accredited Trainer by HRD Corp. In 2015, he was acknowledged by President Obama for his work as a young leader in financial education.`,
  },
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
  {
    name: "Tevaryan Thiagarajan",
    title: "Senior Manager, Digital Asset & Corporate Development",
    company: "Gambit Group",
    photo: "/optimized/tevaryanThiagarajan.png",
    bio: `A mechanical and aerospace engineering graduate from Nanyang Technological University, Tevaryan Thiagarajan leads innovative projects at the intersection of digital assets and traditional finance. With a strong grasp in tech and markets, he builds ventures that connect both—structuring profitable deals and driving sustainable growth.`,
  },

  {
    name: "Vincent Wang",
    title: "Manager, APAC Derivatives Sales",
    company: "Cboe Global Markets",
    photo: "/optimized/vincentWang.jpg",
    bio: `Vincent Wang is part of the APAC Derivatives Sales team at Cboe Global Markets, focusing on supporting the firm’s regional growth strategy across retail brokers and online trading platforms. Based in Singapore, he leads initiatives to deepen client relationships through strategic marketing collaborations and by establishing Cboe’s footprint in Southeast Asian markets. He holds an Honours Degree in Banking and Finance from Nanyang Technological University.`,
  },
  
  {
    name: "Jay Cheong",
    title: "Founder & CEO",
    company: "BenchX Capital",
    photo: "/optimized/jay.avif",
    bio: `Jay Cheong has over 7 years of experience across hedge funds, private markets, and investment platforms, specialising in capital structuring, transaction execution, and disciplined capital allocation.

Jay is the Founder & CEO of BenchX Capital, where he advises founders, corporates, and investors on private market transactions, capital strategy, and complex solutions, supported by institutional-grade financial analysis and market intelligence.

He works closely with PLCs, institutional partners, and senior management on capital planning, financial product structuring, strategic partnerships, and growth positioning.`,
  },
  {
    name: "Isabelle Zhen",
    title: "Head of Group Equity Marketing",
    company: "Kenanga Investment Bank Berhad",
    photo: "/optimized/isabelleZhen.avif",
    bio: `A multiple award-winning financial product specialist at Kenanga Investment Bank, with awards from UK, HK, Singapore & Malaysia. She has spoken at over 190 events & today, she has a theory that men are great traders, but women are fantastic investors. She is licensed by Securities Commission with CMSRL 6 and 7, she now serves as Head of Group Equity Marketing at Kenanga Investment Bank Berhad.`,
  },
  {
    name: "Chloe Foo",
    title: "Finance Creator",
    company: "Finance Lang",
    photo: "/optimized/chloe.avif",
    bio: `Chloe is the producer and finance creator of Finance Lang, and also represents the “beginner investor” perspective on the show.

Her role goes beyond being a host—she acts as a bridge between the audience and financial professionals. By asking the right questions, she helps translate complex financial and investment concepts into simple, authentic, and relatable discussions, making it easier for more people to truly access and understand personal finance.

With a background in multimedia design and video production, Chloe works with her team to build one of Malaysia’s fastest-growing personal finance and investment podcasts — Finance Lang. Within just eight months, the show surpassed 2 million views and has inspired more than 80,000 viewers to start paying attention to and learning about investing and financial management.`,
  },
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
    name: "Khairy Jamaluddin",
    title: "Former Cabinet Minister Malaysia",
    company: "KS Media",
    photo: "/optimized/khairyJamaluddin.avif",
    bio: `An alumnus of University of Oxford and University College London, Khairy Jamaluddin (KJ) served as Malaysia’s Minister of Health from 2021 to 2022. He previously held the positions of Minister of Science, Technology and Innovation (2020–2021) and Minister of Youth and Sports (2013–2018). Today, he co-hosts the Keluar Sekejap and is a radio presenter at Hot FM.`,
  },
  {
    name: "Jack Chan (天哥)",
    title: "Founder",
    company: "第一天投资理财日记",
    photo: "/optimized/jackChan.avif",
    bio: `Jack Chan（天哥）是《第一天投资理财日记》的创办人，也是马来西亚知名投资理财内容创作者与畅销理财书作者。他积极推广大众理财教育，曾担任 ASTRO 著名理财节目《全家私房钱》编剧，并拥有 FIMM 信托基金顾问高级组织经理及私人退休金计划（PRS）顾问资格，曾名列多家上市公司前30大股东之列。`,
  },
];

// Grouping for page layout
const guestOfHonour =
  (speakers.find((s) => s.name.includes("Liew Chin Tong")) as Speaker) || null;
// organisersList removed — include all speakers in main list (except guestOfHonour)
const organisersList: Speaker[] = [];
const mainSpeakersList = speakers.filter((s) => s !== guestOfHonour);

// Desired display order for main speakers (keep organisers and guest unchanged)
const desiredSpeakerOrder: string[] = [
  "Yeoh Chen Chow",
  "Lim Pinn Yang",
  "George Poh, CFP®",
  "Jay Cheong",
  "Khairy Jamaluddin",
  "Dr. Ong Kian Ming",
  "Datuk Clifford Hii",
  "Cheah Zi Kah",
  "Isabelle Zhen",
  "Aaron Tang",
  "Jeroni Khoo",
  "Tevaryan Thiagarajan",
  "Afiq Ismail",
  "Mohammad Bazli Che Rozenan, CFA",
  "Sean Freer",
  "Vincent Wang",
  "Bryan Loo Woi Lip",
  "Chin Yi Xuan",
  "Chloe Foo",
  "Gin Chong",
  "Fong Wei Ziet",
  "Frankie Lim",
  "Jack Chan (天哥)",
  "Kah Mun",
  "Liksen Lei",
  "Lucas",
  "Nigel Chong",
  "Peter Yong",
  "Sai",
  "Sean Tan",
  "Shane Choo",
  "Tan Kyzen, Max",
];

const mainSpeakersListOrdered = [...mainSpeakersList].sort((a, b) => {
  const ia = desiredSpeakerOrder.indexOf(a.name);
  const ib = desiredSpeakerOrder.indexOf(b.name);
  if (ia === -1 && ib === -1) return 0;
  if (ia === -1) return 1;
  if (ib === -1) return -1;
  return ia - ib;
});

const SpeakerCard = ({ s, singleCol }: { s: Speaker; singleCol?: boolean }) => {
  const isLogo =
    !!(s.photo && s.photo.toLowerCase().includes("microleap")) ||
    (s.name || "").toLowerCase().includes("microleap");
  const headshotStyle: React.CSSProperties | undefined =
    s.name === "Datuk Clifford Hii"
      ? {
          objectPosition: "center 18%",
          transform: "scale(1.65)",
          transformOrigin: "center 22%",
        }
      : s.name === "Fong Wei Ziet"
        ? { objectPosition: "center 22%", transform: "scale(1.35)", transformOrigin: "center 22%" }
      : s.name === "Shane Choo"
        ? { objectPosition: "center 12%" }
      : s.name === "Chloe Foo"
        ? { objectPosition: "center 2%" }
        : s.name === "Cheah Zi Kah" || s.name === "Tevaryan Thiagarajan"
          ? { objectPosition: "center 25%" }
          : undefined;

  const initials = s.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  // ── Mobile 1-per-row: horizontal pill card ──
  if (singleCol) {
    return (
      <div className="group flex items-center gap-4 bg-card rounded-2xl border border-white/6 px-5 py-4 w-full hover:border-primary/40 hover:bg-white/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-primary/40 transition-all duration-200 flex items-center justify-center ${s.whiteBg ? "bg-white" : "bg-muted"}`}
        >
          {s.photo ? (
            <img
              src={s.photo}
              alt={s.name}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className={
                isLogo
                  ? "w-full h-full object-contain p-1"
                  : "w-full h-full object-cover object-top"
              }
              style={headshotStyle}
            />
          ) : (
            <span className="text-primary font-bold text-lg">{initials}</span>
          )}
        </div>
        {/* Accent bar */}
        <div className="w-0.5 self-stretch flex-shrink-0 rounded-full bg-gradient-to-b from-primary/70 via-primary/25 to-transparent" />
        {/* Text */}
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <p className="font-bold text-white text-sm leading-snug mb-0.5">
            {s.name}
            {s.chineseName && (
              <span className="text-white ml-2">({s.chineseName})</span>
            )}
          </p>
          {s.title && (
            <p className="text-sm text-primary italic mt-0.5 leading-normal">{s.title}</p>
          )}
          {s.company && (
            <p className="text-sm text-white mt-0.5 leading-normal">{s.company}</p>
          )}
          <div className="mt-1.5 flex items-center gap-1 text-[10px] text-primary/50 group-hover:text-primary transition-colors duration-150">
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
        </div>
      </div>
    );
  }

  // ── Desktop / 2-per-row: vertical card with top photo panel ──
  return (
    <div className="group flex flex-col bg-card rounded-2xl border border-white/6 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-200 w-full min-h-[320px] h-full">
      {/* Photo panel */}
      <div className="relative flex items-end justify-center pt-10 pb-0 bg-gradient-to-b from-primary/8 to-transparent">
        {/* Glow behind avatar */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-primary/15 blur-xl group-hover:bg-primary/25 transition-all duration-300" />
        <div
          className={`relative z-10 w-28 h-28 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-primary/50 transition-all duration-200 flex items-center justify-center ${s.whiteBg ? "bg-white" : "bg-muted"}`}
        >
          {s.photo ? (
            <img
              src={s.photo}
              alt={s.name}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className={
                isLogo
                  ? "w-full h-full object-contain p-2"
                  : "w-full h-full object-cover object-top"
              }
              style={headshotStyle}
            />
          ) : (
            <span className="text-primary font-bold text-2xl">{initials}</span>
          )}
        </div>
      </div>

      {/* Divider line */}
      <div className="mx-5 mt-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Text panel */}
      <div className="flex flex-col items-center text-center px-5 pt-4 pb-6 flex-1">
        <p className="font-bold text-base text-white leading-snug mb-0.5">
          {s.name}
          {s.chineseName && (
            <span className="text-white ml-2">({s.chineseName})</span>
          )}
        </p>
        {s.title && (
          <p className="text-sm text-primary italic leading-normal mb-0.5">
            {s.title}
          </p>
        )}
        {s.company && (
          <p className="text-sm text-white leading-normal">
            {s.company}
          </p>
        )}
        <div className="mt-auto pt-3 flex items-center gap-1 text-[10px] text-primary/50 group-hover:text-primary transition-colors duration-150">
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
      </div>
    </div>
  );
};

const SpeakersPage = () => {
  const [mobileCols, setMobileCols] = useState<number>(() => {
    try {
      const v = localStorage.getItem("speakersMobileCols");
      return v ? Number(v) : 2;
    } catch {
      return 2;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("speakersMobileCols", String(mobileCols));
    } catch {}
  }, [mobileCols]);

  const isMobile = useIsMobile();
  const singleCol = isMobile && mobileCols === 1;

  const [speakerModalOpen, setSpeakerModalOpen] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    // Use CSS-only lock: toggle a class that sets `overflow: hidden` on the body.
    try {
      if (speakerModalOpen) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    } catch (e) {}

    // Cleanup: ensure class is removed when component unmounts
    return () => {
      try {
        document.body.classList.remove("modal-open");
      } catch {}
    };
  }, [speakerModalOpen]);

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

  const computeHeadshotStyle = (name?: string): React.CSSProperties | undefined =>
    name === "Datuk Clifford Hii"
      ? { objectPosition: "center 18%", transform: "scale(1.65)", transformOrigin: "center 22%" }
      : name === "Fong Wei Ziet"
      ? { objectPosition: "center 22%", transform: "scale(1.35)", transformOrigin: "center 22%" }
      : name === "Shane Choo"
      ? { objectPosition: "center 12%" }
      : name === "Cheah Zi Kah" || name === "Tevaryan Thiagarajan"
      ? { objectPosition: "center 25%" }
      : undefined;

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[44vh] flex items-center justify-center">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 hero-gradient opacity-60" />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-8">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white text-center tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-xl">
            Speakers
          </h1>
          <p className="mt-3 text-sm md:text-lg text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Meet the experts and leaders joining our panels and sessions. Their
            combined experience spans research, asset management and corporate
            leadership.
          </p>
        </div>
      </section>

      <main className="py-4 sm:py-6">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          {/* Mobile layout toggle */}
          <div className="flex items-center justify-center gap-2 sm:hidden">
            <span className="text-xs text-muted-foreground mr-1">Layout:</span>
            <button
              aria-label="One per row"
              onClick={() => setMobileCols(1)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                mobileCols === 1
                  ? "bg-primary text-black border-primary"
                  : "border-white/10 text-white/70 bg-transparent hover:bg-white/5"
              }`}
            >
              1 per row
            </button>
            <button
              aria-label="Two per row"
              onClick={() => setMobileCols(2)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                mobileCols === 2
                  ? "bg-primary text-black border-primary"
                  : "border-white/10 text-white/70 bg-transparent hover:bg-white/5"
              }`}
            >
              2 per row
            </button>
          </div>

          {/* ── Guest of Honour ── */}
          {guestOfHonour && (
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
                Guest of Honour
              </h2>
              <div className="flex justify-center">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openSpeakerModal(guestOfHonour)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      openSpeakerModal(guestOfHonour);
                  }}
                  className="max-w-2xl w-full cursor-pointer focus:outline-none rounded-xl"
                >
                  <div className="group bg-card rounded-xl p-6 sm:p-8 shadow-md border border-white/6 flex flex-col items-center sm:flex-row sm:items-center gap-5 sm:gap-8">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden ${guestOfHonour.whiteBg ? "bg-white" : "bg-muted"}`}
                      >
                        <img
                          src={
                            guestOfHonour.photo ||
                            placeholderImage(guestOfHonour.name)
                          }
                          alt={guestOfHonour.name}
                          loading="eager"
                          fetchPriority="high"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <span className="inline-block text-[10px] uppercase tracking-widest text-primary/80 font-semibold mb-1.5">
                        Guest of Honour
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {guestOfHonour.name}
                      </h3>
                      {guestOfHonour.title && (
                        <p className="text-sm text-primary italic mt-1">
                          {guestOfHonour.title}
                        </p>
                      )}
                      {guestOfHonour.company && (
                        <p className="text-sm text-white mt-1">
                          {guestOfHonour.company}
                        </p>
                      )}
                      <div className="mt-2 w-full flex items-center gap-1 text-[11px] text-primary/50 group-hover:text-primary transition-colors duration-150 justify-center sm:justify-start">
                        <div className="flex items-center gap-1">
                          <span>View profile</span>
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}



          {/* ── Speakers ── */}
          {mainSpeakersList.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
                Speakers
              </h2>
              <div
                className={
                  singleCol
                    ? "flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 px-2 mb-12"
                    : "flex flex-wrap items-stretch justify-center gap-4 sm:gap-6 px-2 mb-12"
                }
              >
                {mainSpeakersListOrdered.map((s, i) => (
                  <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    className={`cursor-pointer flex flex-col ${singleCol ? "w-full max-w-md sm:w-auto" : "w-[calc(50%-0.5rem)] sm:w-56"}`}
                    onClick={() => openSpeakerModal(s)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        openSpeakerModal(s);
                    }}
                  >
                    <SpeakerCard s={s} singleCol={singleCol} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Speaker profile modal (re-uses Programme modal style) */}
      {speakerModalOpen && activeSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            role="dialog"
            aria-modal="true"
            className="bg-card rounded-lg w-full mx-4 sm:mx-auto max-w-2xl p-0 relative max-h-[90vh] overflow-hidden"
          >
            <div className="relative">
              <div className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm p-4 sm:p-6 border-b border-white/6">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img
                          src={
                            activeSpeaker.photo ||
                            placeholderImage(activeSpeaker.name)
                          }
                          alt={activeSpeaker.name}
                          loading="eager"
                          fetchPriority="high"
                          className="w-full h-full object-cover object-top"
                          style={computeHeadshotStyle(activeSpeaker.name)}
                        />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold text-white">
                      {activeSpeaker.name}
                      {activeSpeaker.chineseName && (
                        <span className="text-white ml-2">({activeSpeaker.chineseName})</span>
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
                      <p key={idx} className="mb-2 text-left sm:text-justify">
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

      <Footer />
    </div>
  );
};

export default SpeakersPage;
