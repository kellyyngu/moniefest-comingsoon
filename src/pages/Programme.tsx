import { useState } from "react";
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
  title: string;
  company: string;
  photo?: string;
  bio?: string;
};

type Session = {
  time: string;
  title?: string;
  description?: string;
  speakers?: Speaker[];
  moderator?: Speaker;
  bullets?: string[];
  isPanel?: boolean;
  panelNumber?: number;
  panelTitle?: string;
  isSpecial?: boolean;
  specialImage?: string;
};

const mainStageSchedule: Session[] = [
  { time: "09:40 - 09:45", title: "Welcoming Address", description: "", speakers: [{ name: "Lim Pinn Yang", title: "Chief Executive Officer", company: "Foodie Media Berhad", photo: pinnyang, bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.` }] },
  { time: "09:45 - 09:55", title: "Industrial Address", description: "" },
  { time: "09:55 - 10:05", title: "Opening Address", description: "", speakers: [{ name: "Yang Berhormat Liew Chin Tong", title: "Deputy Minister of Finance", company: "Government of Malaysia", photo: '/optimized/liewChinTong.png', bio: liewBio }] },
  { time: "10:05 - 10:10", title: "Official Launch", description: "", speakers: [
      { name: "Yang Berhormat Liew Chin Tong", title: "Deputy Minister of Finance", company: "Government of Malaysia", photo: '/optimized/liewChinTong.png', bio: liewBio },
      { name: "Lim Pinn Yang", title: "Chief Executive Officer", company: "Foodie Media Berhad", photo: pinnyang, bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.` },
      {
        name: "George Poh, CFP®",
        title: "Chief Executive Officer",
        company: "Spire Digital Sdn. Bhd.",
        photo: george,
        bio: `George Poh, CFP® is the Chief Executive Officer of Spire Digital Sdn Bhd, a finance-focused digital media company under EE Cameron Group, built with one mission: to make financial literacy more accessible, responsible, and impactful for everyday Malaysians. Spire Digital stands for one purpose — Inspiring Confidence, Empowering Financial Decisions.

Before leading Spire Digital, George built hands-on experience in banking and wealth-related roles, including Hong Leong Bank Berhad, where he served more than 150 High Net Worth Individuals (HNWI) in wealth management and asset financing solutions. He later led performance outcomes in asset financing, achieving more than RM150 million in new loan acquisition during the 2020/21 financial year.

Driven by the belief that education is the foundation of better money choices, George transitioned in 2H 2022 to focus on financial planning and education, combining industry experience with professional standards as a Licensed Financial Planner and CFP® professional. With his team, he has since educated 1,120+ young working adults on personal finance and investing through his proprietary learning approach.

At Monie Fest, George represents a long-term vision: building a credible financial media ecosystem that raises literacy, strengthens decision-making, and creates lasting financial confidence.`
      },
    ] },
  { time: "10:10 - 11:00", title: "Event Walkabout & Press Conference", description: "", speakers: [
      { name: "Yang Berhormat Liew Chin Tong", title: "Deputy Minister of Finance", company: "Government of Malaysia", photo: '/optimized/liewChinTong.png', bio: liewBio },
      { name: "Lim Pinn Yang", title: "Chief Executive Officer", company: "Foodie Media Berhad", photo: pinnyang, bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.` },
      {
        name: "George Poh, CFP®",
        title: "Chief Executive Officer",
        company: "Spire Digital Sdn. Bhd.",
        photo: george,
        bio: `George Poh, CFP® is the Chief Executive Officer of Spire Digital Sdn Bhd, a finance-focused digital media company under EE Cameron Group, built with one mission: to make financial literacy more accessible, responsible, and impactful for everyday Malaysians. Spire Digital stands for one purpose — Inspiring Confidence, Empowering Financial Decisions.

Before leading Spire Digital, George built hands-on experience in banking and wealth-related roles, including Hong Leong Bank Berhad, where he served more than 150 High Net Worth Individuals (HNWI) in wealth management and asset financing solutions. He later led performance outcomes in asset financing, achieving more than RM150 million in new loan acquisition during the 2020/21 financial year.

Driven by the belief that education is the foundation of better money choices, George transitioned in 2H 2022 to focus on financial planning and education, combining industry experience with professional standards as a Licensed Financial Planner and CFP® professional. With his team, he has since educated 1,120+ young working adults on personal finance and investing through his proprietary learning approach.

At Monie Fest, George represents a long-term vision: building a credible financial media ecosystem that raises literacy, strengthens decision-making, and creates lasting financial confidence.`
      },
    ] },
  { time: "11:00 - 11:45"},
  { time: "11:45 - 12:00", title: "Break", description: "" },
  { time: "12:00 - 12:45", title: "Investment Talk 1", description: "", speakers: [{ name: "Exhibitor A", title: "Exhibitor", company: "" }] },
  { time: "12:45 - 13:30", title: "Investment Talk 2", description: "", speakers: [{ name: "Exhibitor B", title: "Exhibitor", company: "" }] },
  { time: "13:30 - 14:15", title: "Investment Talk 3", description: "", speakers: [{ name: "Exhibitor C", title: "Exhibitor", company: "" }] },
  { time: "14:15 - 15:00", isPanel: true, panelNumber: 2, panelTitle: "How Government Policies Quietly Shape Your Personal Finances", bullets: [], speakers: [
      { name: "Exhibitor D & Panelists", title: "Exhibitor & Panelists", company: "" },
    ]},
  { time: "15:00 - 15:45", title: "Investment Talk", description: "", speakers: [{ name: "Jeroni Khoo", title: "Deputy Country Manager", company: "Luno Malaysia", photo: jeroni, bio: `Jeroni Khoo is the Deputy Country Manager at Luno Malaysia, a leading digital asset
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
Marketing and Economics, from Monash University.` }] },
  { time: "15:45 - 16:00", title: "Lucky Draw — Win a Xiaomi 55' TV!", isSpecial: true, specialImage: "https://via.placeholder.com/600x300?text=Xiaomi+55%27+TV", description: "Stand a chance to win a Xiaomi 55' Smart TV — stay till the draw and keep your ticket handy!" },
  { time: "16:00 - 16:45", title: "Investment Talk", description: "", speakers: [{ name: "microLEAP", title: "", company: "", photo: '/optimized/microleap.webp' }] },
  { time: "16:45 - 17:30", isPanel: true, panelNumber: 3, panelTitle: "Can Crypto Coexist With a Boring, Stable Financial Plan?", bullets: [], speakers: [
      { name: "Datuk Clifford Hii", title: "Chief Executive Officer", company: "Gambit Group" },
    ], description: "" },
  { time: "17:30 - 18:15", title: "Investment Talk 4", description: "", speakers: [{ name: "Exhibitor F", title: "Exhibitor", company: "" }] },
  { time: "18:15 - 19:00", isPanel: true, panelNumber: 4, panelTitle: "When Passion Meets Planning: How to Turn Dreams into Reality", bullets: [], speakers: [
    ], description: "" },
  { time: "19:00 - 19:45", title: "Investment Talk 5", description: "", speakers: [{ name: "Exhibitor G", title: "Exhibitor", company: "" }] },
  { time: "19:45 - 20:00", title: "Lucky Draw — Win an iPhone 17 Pro!", isSpecial: true, specialImage: "https://via.placeholder.com/600x300?text=iPhone+17+Pro", description: "Final draw of the night — stand a chance to win the brand-new iPhone 17 Pro. Keep your ticket ready and stay until the end!" },
  { time: "20:00 - 20:10", title: "Day 1 End" },
];

const engagementStageSchedule: Session[] = [
  { time: "11:30 - 12:00", title: "Investment Talk 1", description: "", speakers: [{ name: "Exhibitor A", title: "Exhibitor", company: "" }] },
  { time: "12:00 - 12:30", },
  { time: "12:30 - 13:00", },
  { time: "13:00 - 13:30", title: "Podcast 1: Passive Income — Reality vs Expectation Across Four Paths", description: "", speakers: [
    { name: "Exhibitor B & Panelists", title: "Exhibitor & Panelists", company: "" },
  ] },

  { time: "13:30 - 14:00", title: "Investment Talk 2", description: "", speakers: [{ name: "Exhibitor D", title: "Exhibitor", company: "" }] },

  { time: "14:00 - 14:30", },

  { time: "14:30 - 15:00", title: "Podcast 2: When Is It Actually Safe to Upgrade Your Lifestyle?", description: "", speakers: [
    { name: "Exhibitor E & Panelists", title: "Exhibitor & Panelists", company: "" },
  ] },

  { time: "15:00 - 15:30", },

  { time: "15:30 - 16:00", title: "Investment Talk 3", description: "", speakers: [{ name: "Exhibitor G", title: "Exhibitor", company: "" }] },

  { time: "16:00 - 16:30", title: "Podcast 3: Alternative Investments for Beginners: What You Must Know Before You Enter", description: "", speakers: [
    { name: "Exhibitor H & Panelists", title: "Exhibitor & Panelists", company: "" },
  ] },

  { time: "16:30 - 17:00", },

  { time: "17:00 - 18:00", title: "Investment Talk 4", description: "", speakers: [{ name: "Exhibitor J", title: "Exhibitor", company: "" }] },

  { time: "18:00 - 18:30", title: "Podcast 4: Planning for the Unexpected — Family Finance Lessons We Learn Too Late", description: "", },

  { time: "18:30 - 19:00", title: "Investment Talk 5", description: "", speakers: [{ name: "Exhibitor K", title: "Exhibitor", company: "" }] },

  { time: "19:00 - 19:30", },

  { time: "19:30 - 20:00", },
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
      { name: "Exhibitor H & Panelists", title: "Exhibitor & Panelists", company: "" },
    ],
    description: "",
  },

  { time: "11:15 - 12:00", title: "Investment Talk 6", description: "", speakers: [{ name: "Exhibitor J", title: "Exhibitor", company: "" }] },

  {
    time: "12:00 - 12:45",
    isPanel: true,
    panelNumber: 2,
    panelTitle: "US Fed Policy & Global Rate Cycles",
    bullets: [],
    speakers: [
      { name: "Exhibitor K & Panelists", title: "Exhibitor & Panelists", company: "" },
    ],
    description: "",
  },

  { time: "12:45 - 13:00", title: "Lucky Draw — Win a Nespresso Coffee Machine!", isSpecial: true, specialImage: "https://via.placeholder.com/600x300?text=Nespresso+Creatista", description: "Stand a chance to win a Nespresso Creatista — stay till the draw and keep your ticket handy!" },

  { time: "13:00 - 13:45", title: "Investment Talk 7", description: "", speakers: [{ name: "Exhibitor M", title: "Exhibitor", company: "" }] },

  {
    time: "13:45 - 14:30",
    isPanel: true,
    panelNumber: 3,
    panelTitle: "Gaji Naik, Kenapa Duit Tetap Tak Cukup?",
    bullets: [],
    speakers: [
      { name: "Exhibitor N & Panelists", title: "Exhibitor & Panelists", company: "" },
    ],
    description: "",
  },

  {
    time: "14:30 - 15:15",
    isPanel: true,
    panelNumber: 4,
    panelTitle: "Entrepreneurship in Malaysia: What Needs to Change by 2026",
    bullets: [],
    speakers: [],
    description: "",
  },

  { time: "15:15 - 16:30", title: "Investment Talk 8", description: "", speakers: [{ name: "Exhibitor O", title: "Exhibitor", company: "" }] },

  {
    time: "16:30 - 17:15",
    isPanel: true,
    panelNumber: 5,
    panelTitle: "Why East Malaysia Policy Direction Matters to Long-Term Investors",
    bullets: [],
    speakers: [
      { name: "Exhibitor P & Panelists", title: "Exhibitor & Panelists", company: "" },
    ],
    description: "",
  },

  { time: "17:15 - 18:00", title: "Investment Talk 9", description: "", speakers: [{ name: "Exhibitor R", title: "Exhibitor", company: "" }] },

  { time: "18:00 - 18:45", title: "Investment Talk 10", description: "", speakers: [{ name: "Exhibitor S", title: "Exhibitor", company: "" }] },

  {
    time: "18:45 - 19:30",
    isPanel: true,
    panelNumber: 6,
    panelTitle: "What Changes After You Make Your First Million?",
    bullets: [],
    speakers: [],
    description: "",
  },

  { time: "19:30 - 20:00", title: "Grand Finale Lucky Draw — Win a Dyson Airsonic & Louis Vuitton Handbag!", isSpecial: true, specialImage: "https://via.placeholder.com/600x300?text=Dyson+Airwrap+%26+LV+Handbag", description: "Final draw of the night — stand a chance to win a Dyson Airsonic and a Louis Vuitton handbag. Keep your ticket ready and stay until the end!" },
  { time: "20:00 - 20:15", title: "Day 2 End" },
];

const engagementStageScheduleDay2: Session[] = [
  { time: "10:30 - 11:00", },
  { time: "11:00 - 11:30", },
  { time: "11:30 - 12:00", title: "Podcast 1: Future Skills for Malaysia's Youth: What Employers Really Look For",},
  { time: "12:00 - 12:30", },
  { time: "12:30 - 13:00", title: "Investment Talk 6", description: "", speakers: [{ name: "Exhibitor K", title: "Exhibitor", company: "" }] },
  { time: "13:00 - 13:30", title: "Podcast 2: Financial Independence for Women — Planning, Investing & Growing",},
  { time: "13:30 - 14:00", },
  { time: "14:00 - 14:30", title: "Investment Talk 7", description: "", speakers: [{ name: "Exhibitor L", title: "Exhibitor", company: "" }] },
  { time: "14:30 - 15:00", title: "Podcast 3: From Scam to Justice — What Happens After You Report?", description: "", },
  { time: "15:00 - 15:30", },
  { time: "15:30 - 16:00", title: "Investment Talk 8", description: "", speakers: [{ name: "Exhibitor M", title: "Exhibitor", company: "" }] },
  { time: "16:00 - 16:30", },
  { time: "16:30 - 17:00", },
  { time: "17:00 - 17:30", title: "Investment Talk 9", description: "", speakers: [{ name: "Exhibitor N", title: "Exhibitor", company: "" }] },
  { time: "17:30 - 18:00", },
  { time: "18:00 - 18:30", },
  { time: "18:30 - 18:40", title: "Wrap" },
];

const SpeakerCard = ({ speaker, onClick }: { speaker: Speaker; onClick?: (s: Speaker) => void }) => {
  const displayName = speaker?.name || "TBD Speaker";
  const initials = displayName.split(" ").map((n) => n[0]).slice(0, 2).join("");
  const clickable = !!onClick;
  const containerProps: any = {};
  if (clickable) {
    containerProps.role = 'button';
    containerProps.tabIndex = 0;
    containerProps.onClick = (e: any) => { e.stopPropagation(); onClick && onClick(speaker); };
    containerProps.onKeyDown = (e: any) => { if (e.key === 'Enter' || e.key === ' ') { e.stopPropagation(); onClick && onClick(speaker); } };
  }

  const isLogo = !!(speaker.photo && speaker.photo.toLowerCase().includes('microleap')) || (speaker.name || '').toLowerCase().includes('microleap');
  const avatarWrapperClass = isLogo
    ? 'w-14 h-14 rounded-md overflow-hidden bg-transparent flex items-center justify-center text-primary-foreground font-bold text-lg'
    : 'w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-navy-light to-navy-deep flex items-center justify-center text-primary-foreground font-bold text-lg';
  const imgClass = isLogo ? 'w-full h-full object-contain' : 'w-full h-full object-cover object-top';

  return (
    <div
      className={`flex items-center gap-3 my-2 ${clickable ? 'cursor-pointer' : ''}`}
      {...containerProps}
    >
      <div className={avatarWrapperClass}>
          {speaker.photo ? (
          <img src={speaker.photo} alt={displayName} className={imgClass} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">{initials}</div>
        )}
      </div>
      <div>
        <p className="font-semibold text-navy-deep">{displayName}</p>
        <p className="text-sm text-primary italic">{speaker.title}</p>
        <p className="text-sm text-foreground">{speaker.company}</p>
      </div>
    </div>
  );
};
const SessionRow = ({ session, onSpeakerClick }: { session: Session; onSpeakerClick?: (sp: Speaker) => void }) => {
  const isDayEnd = !!(session.title && /Day\s*\d+\s*End/i.test(session.title));
  const isInvestmentTalk = !!(session.title && session.title.startsWith('Investment Talk'));
  return (
    <div
      className="border-b border-border last:border-b-0 py-4"
    >
      <div className={`flex gap-6 ${isDayEnd ? 'items-center' : 'items-start'}`}>
      <div className="w-16 md:w-28 flex-shrink-0">
        <div className="bg-primary/10 text-primary px-3 py-2 rounded-md text-sm font-medium text-center">
          {session.time}
        </div>
      </div>

      <div className="flex-1 pr-4">
        {session.isPanel ? (
          <>
            <p className="text-muted-foreground font-medium mb-1 text-center">Panel Discussion</p>
            <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500 mb-2 text-center text-lg md:text-xl">{session.panelTitle}</h3>
          </>
        ) : session.title && (
          <h3 className={`font-bold ${session.isSpecial ? 'text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400 text-center' : isInvestmentTalk ? 'bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-600 text-center text-lg md:text-xl' : 'bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500 text-center text-lg md:text-xl'}`}>
            {session.title}
          </h3>
        )}

        {session.description && (
          <p className="text-muted-foreground mt-3 text-center md:text-left">{session.description}</p>
        )}

        {session.bullets && (
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground text-sm">
            {session.bullets.map((bullet, i) => (
              <li key={i} className="text-muted-foreground">{bullet}</li>
            ))}
          </ul>
        )}

        {session.speakers && session.speakers.length > 0 && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {session.speakers.map((speaker, i) => {
                const nameLower = (speaker.name || '').toLowerCase();
                const isExhibitor = /exhibitor|panelists?/.test(nameLower) || nameLower.includes('microleap');
                return (
                <div key={i} className="p-3 bg-primary/5 rounded-md">
                  <SpeakerCard speaker={speaker} onClick={!isExhibitor ? ((sp) => onSpeakerClick && onSpeakerClick(sp)) : undefined} />
                </div>
              );
            })}
          </div>
        )}

        {session.moderator && (
          <div className="mt-4">
            <p className="font-semibold text-navy-deep mb-2">Moderated by</p>
            <SpeakerCard speaker={session.moderator} />
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

  const placeholderImage = (name = "Speaker") => `https://via.placeholder.com/160?text=${encodeURIComponent(name)}`;

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
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 hero-gradient opacity-60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white text-center tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-xl">
              Programme
            </h1>
              <p className="mt-3 text-sm md:text-lg text-primary-foreground/90 text-center max-w-3xl mx-auto">
              Join industry leaders and investors for a full day of insights, panels and networking focused on Monie Fest and real estate investing.
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
                day === 1 ? "cta-pill text-black" : "bg-transparent text-muted-foreground hover:text-primary border border-primary/10"
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setDay(2)}
              aria-pressed={day === 2}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                day === 2 ? "cta-pill text-black" : "bg-transparent text-muted-foreground hover:text-primary border border-primary/10"
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
              Capital Stage
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
            <div className="grid grid-cols-[64px_1fr] md:grid-cols-[120px_1fr] bg-gradient-to-r from-primary to-primary/80">
              <div className="px-4 py-3 text-black font-bold">Time</div>
              <div className="px-4 py-3 text-black font-bold text-center">Topic</div>
            </div>

            {/* Table Body */}
            <div className="bg-card px-4">
              {((day === 1 ? (activeTab === "main" ? mainStageSchedule : engagementStageSchedule) : (activeTab === "main" ? mainStageScheduleDay2 : engagementStageScheduleDay2))).map((session, index) => (
                <SessionRow key={index} session={session} onSpeakerClick={openSpeakerModal} />
              ))}
            </div>
          </div>

          {/* Session modal removed - only speaker popup is shown when speakers are clicked */}

          {/* Modal for speaker profile (opens when clicking a speaker) */}
          {speakerModalOpen && activeSpeaker && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
              <div role="dialog" aria-modal="true" className="bg-card rounded-lg w-full mx-4 sm:mx-auto max-w-2xl sm:max-w-xl md:max-w-2xl p-4 sm:p-6 relative max-h-[90vh] overflow-auto">
                <button onClick={closeSpeakerModal} aria-label="Close" className="absolute right-3 top-3 text-muted-foreground text-lg">×</button>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img src={activeSpeaker.photo || placeholderImage(activeSpeaker.name)} alt={activeSpeaker.name} className="w-full h-full object-cover object-top" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold text-navy-deep">{activeSpeaker.name}</h3>
                    <p className="text-xs sm:text-sm text-primary italic mt-1">{activeSpeaker.title}</p>
                    <p className="text-sm text-foreground font-semibold mt-1">{activeSpeaker.company}</p>
                    <div className="mt-3 text-muted-foreground text-sm leading-relaxed">
                      {activeSpeaker.bio ? (
                        activeSpeaker.bio.split(/\n\s*\n/).map((para, idx) => (
                            <p key={idx} className="mb-2 text-left">{para}</p>
                          ))
                      ) : (
                        activeSpeaker.name === 'Datuk Clifford Hii' ? null : (
                          <p className="italic">Speaker profile not available.</p>
                        )
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
