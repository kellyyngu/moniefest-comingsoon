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
  bio?: string;
};

const speakers: Speaker[] = [
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
    photo: "/optimized/cheah_Zi_Kah.png",
    bio: `Cheah Zi Kah is a Certified Financial Planner (CFP®) with over 10 years of experience in the financial services industry. He specialises in unit trust investments, insurance solutions, and will & trust planning, with a strong and comprehensive understanding of holistic financial planning.`,
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

Liksen holds a Bachelor’s degree in Banking and Finance (2022–2025) and is currently pursuing a Master’s degree in Investment Banking at Monash University (2025–2026). Alongside his academic pursuits, he actively shares investment insights through his platform, @insightinvests, where he focuses on market trends, portfolio strategy, and navigating macroeconomic developments.

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
    name: "Shane Choo",
    title: "Director, WealthFort",
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
];

// Grouping for page layout
const guestOfHonour =
  (speakers.find((s) => s.name.includes("Liew Chin Tong")) as Speaker) || null;
const organisersList = speakers.filter(
  (s) => s.name.includes("Lim Pinn Yang") || s.name.includes("George Poh"),
);
const mainSpeakersList = speakers.filter(
  (s) => s !== guestOfHonour && !organisersList.includes(s),
);

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
      : s.name === "Shane Choo"
        ? { objectPosition: "center 12%" }
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
        <div className="flex-1 min-w-0">
          <p className="font-bold text-base text-foreground leading-snug">
            {s.name}
          </p>
          {s.title && (
            <p className="text-sm text-primary italic mt-0.5 leading-tight">
              {s.title}
            </p>
          )}
          {s.company && (
            <p className="text-sm text-muted-foreground mt-0.5 leading-tight">
              {s.company}
            </p>
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
      <div className="flex flex-col items-center text-center px-5 pt-4 pb-5 flex-1">
        <p className="font-bold text-base text-foreground leading-snug mb-0.5">
          {s.name}
        </p>
        {s.title && (
          <p className="text-sm text-primary italic leading-tight mb-0.5 line-clamp-2">
            {s.title}
          </p>
        )}
        {s.company && (
          <p className="text-sm text-muted-foreground leading-tight line-clamp-1">
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
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <span className="inline-block text-[10px] uppercase tracking-widest text-primary/80 font-semibold mb-1.5">
                        Guest of Honour
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-deep leading-tight">
                        {guestOfHonour.name}
                      </h3>
                      {guestOfHonour.title && (
                        <p className="text-sm text-primary italic mt-1">
                          {guestOfHonour.title}
                        </p>
                      )}
                      {guestOfHonour.company && (
                        <p className="text-sm text-foreground/80 mt-1">
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

          {/* ── Organisers ── */}
          {organisersList.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
                Organisers
              </h2>
              <div
                className={
                  singleCol
                    ? "flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 px-2 mb-12"
                    : "flex flex-wrap items-stretch justify-center gap-4 sm:gap-6 px-2 mb-12"
                }
              >
                {organisersList.map((o, idx) => (
                  <div
                    key={idx}
                    role="button"
                    tabIndex={0}
                    className={`cursor-pointer flex flex-col ${singleCol ? "w-full max-w-md sm:w-auto" : "w-[calc(50%-0.5rem)] sm:w-56"}`}
                    onClick={() => openSpeakerModal(o)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        openSpeakerModal(o);
                    }}
                  >
                    <SpeakerCard s={o} singleCol={singleCol} />
                  </div>
                ))}
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
                {mainSpeakersList.map((s, i) => (
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
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold text-navy-deep">
                      {activeSpeaker.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary italic mt-1">
                      {activeSpeaker.title}
                    </p>
                    <p className="text-sm text-foreground font-semibold mt-1">
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
                <div className="speaker-bio text-muted-foreground text-sm leading-relaxed">
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
