import { useState } from "react";
import Footer from "@/components/Footer";
const heroBg = "/optimized/banner_bg.webp";
const pinnyang = "/optimized/pinnyang.webp";
const george = "/optimized/george.webp";

type Speaker = {
  name: string;
  title: string;
  company: string;
  photo?: string;
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
  { time: "11:00 - 11:15", title: "Opening Speech", description: "", speakers: [{ name: "Guest of Honour", title: "Guest of Honour", company: "" }] },
  { time: "11:15 - 11:30", title: "Monie Introduction", description: "", speakers: [{ name: "Lim Pinn Yang", title: "Chief Executive Officer", company: "Foodie Media Berhad", photo: pinnyang }] },
  { time: "11:30 - 11:45", title: "Opening Ceremony", description: "", speakers: [
    { name: "Guest of Honour", title: "Guest of Honour", company: "" },
    { name: "Lim Pinn Yang", title: "Chief Executive Officer", company: "Foodie Media Berhad", photo: pinnyang },
    { name: "George Poh, CFP®", title: "Chief Executive Officer", company: "Spire Digital Sdn. Bhd.", photo: george },
  ] },
  { time: "11:45 - 12:00", title: "Break", description: "" },
  { time: "12:45 - 13:30", isPanel: true, panelNumber: 1, panelTitle: "Malaysia's Economic Growth Outlook for 2H 2026", bullets: [], speakers: [
      { name: "Exhibitor A & Panelists", title: "Exhibitor & Panelists", company: "" },
    ]},
  { time: "13:30 - 14:15", title: "Investment Talk 1", description: "", speakers: [{ name: "Exhibitor B", title: "Exhibitor & Panelists", company: "" }] },
  { time: "14:15 - 15:00", isPanel: true, panelNumber: 2, panelTitle: "How Government Policies Quietly Shape Your Personal Finances", bullets: [], speakers: [
      { name: "Exhibitor C & Panelists", title: "Exhibitor & Panelists", company: "" },
    ]},
  { time: "15:00 - 15:45", title: "Investment Talk 2", description: "", speakers: [{ name: "Exhibitor D", title: "Exhibitor & Panelists", company: "" }] },
  { time: "15:45 - 16:00", title: "Lucky Draw — Win a Xiaomi 55' TV!", isSpecial: true, specialImage: "https://via.placeholder.com/600x300?text=Xiaomi+55%27+TV", description: "Stand a chance to win a Xiaomi 55' Smart TV — stay till the draw and keep your ticket handy!" },
  { time: "16:00 - 16:45", title: "Investment Talk 3", description: "", speakers: [{ name: "Exhibitor E", title: "Exhibitor & Panelists", company: "" }] },
  { time: "16:45 - 17:30", isPanel: true, panelNumber: 3, panelTitle: "Can Crypto Coexist With a Boring, Stable Financial Plan?", bullets: [], speakers: [
    ], description: "" },
  { time: "17:30 - 18:15", title: "Investment Talk 4", description: "", speakers: [{ name: "Exhibitor F", title: "Exhibitor & Panelists", company: "" }] },
  { time: "18:15 - 19:00", isPanel: true, panelNumber: 4, panelTitle: "When Passion Meets Planning: How to Turn Dreams into Reality", bullets: [], speakers: [
    ], description: "" },
  { time: "19:00 - 19:45", title: "Investment Talk 5", description: "", speakers: [{ name: "Exhibitor G", title: "Exhibitor & Panelists", company: "" }] },
  { time: "19:45 - 20:00", title: "Lucky Draw — Win an iPhone 17 Pro!", isSpecial: true, specialImage: "https://via.placeholder.com/600x300?text=iPhone+17+Pro", description: "Final draw of the night — stand a chance to win the brand-new iPhone 17 Pro. Keep your ticket ready and stay until the end!" },
  { time: "20:00 - 20:10", title: "Day 1 End" },
];

const engagementStageSchedule: Session[] = [
  { time: "11:30 - 12:00", title: "Investment Talk 1", description: "", speakers: [{ name: "Exhibitor A", title: "Exhibitor & Panelists", company: "" }] },
  { time: "12:00 - 12:30", },
  { time: "12:30 - 13:00", },
  { time: "13:00 - 13:30", title: "Podcast 1: Passive Income — Reality vs Expectation Across Four Paths", description: "", speakers: [
    { name: "Exhibitor B & Panelists", title: "Exhibitor & Panelists", company: "" },
  ] },

  { time: "13:30 - 14:00", title: "Investment Talk 2", description: "", speakers: [{ name: "Exhibitor D", title: "Exhibitor & Panelists", company: "" }] },

  { time: "14:00 - 14:30", },

  { time: "14:30 - 15:00", title: "Podcast 2: When Is It Actually Safe to Upgrade Your Lifestyle?", description: "", speakers: [
    { name: "Exhibitor E & Panelists", title: "Exhibitor & Panelists", company: "" },
  ] },

  { time: "15:00 - 15:30", },

  { time: "15:30 - 16:00", title: "Investment Talk 3", description: "", speakers: [{ name: "Exhibitor G", title: "Exhibitor & Panelists", company: "" }] },

  { time: "16:00 - 16:30", title: "Podcast 3: Alternative Investments for Beginners: What You Must Know Before You Enter", description: "", speakers: [
    { name: "Exhibitor H & Panelists", title: "Exhibitor & Panelists", company: "" },
  ] },

  { time: "16:30 - 17:00", },

  { time: "17:00 - 18:00", title: "Investment Talk 4", description: "", speakers: [{ name: "Exhibitor J", title: "Exhibitor & Panelists", company: "" }] },

  { time: "18:00 - 18:30", title: "Podcast 4: Planning for the Unexpected — Family Finance Lessons We Learn Too Late", description: "", },

  { time: "18:30 - 19:00", title: "Investment Talk 5", description: "", speakers: [{ name: "Exhibitor K", title: "Exhibitor & Panelists", company: "" }] },

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

  { time: "11:15 - 12:00", title: "Investment Talk 6", description: "", speakers: [{ name: "Exhibitor J", title: "Exhibitor & Panelists", company: "" }] },

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

  { time: "13:00 - 13:45", title: "Investment Talk 7", description: "", speakers: [{ name: "Exhibitor M", title: "Exhibitor & Panelists", company: "" }] },

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

  { time: "15:15 - 16:30", title: "Investment Talk 8", description: "", speakers: [{ name: "Exhibitor O", title: "Exhibitor & Panelists", company: "" }] },

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

  { time: "17:15 - 18:00", title: "Investment Talk 9", description: "", speakers: [{ name: "Exhibitor R", title: "Exhibitor & Panelists", company: "" }] },

  { time: "18:00 - 18:45", title: "Investment Talk 10", description: "", speakers: [{ name: "Exhibitor S", title: "Exhibitor & Panelists", company: "" }] },

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
  { time: "12:30 - 13:00", title: "Investment Talk 6", description: "", speakers: [{ name: "Exhibitor K", title: "Exhibitor & Panelists", company: "" }] },
  { time: "13:00 - 13:30", title: "Podcast 2: Financial Independence for Women — Planning, Investing & Growing",},
  { time: "13:30 - 14:00", },
  { time: "14:00 - 14:30", title: "Investment Talk 7", description: "", speakers: [{ name: "Exhibitor L", title: "Exhibitor & Panelists", company: "" }] },
  { time: "14:30 - 15:00", title: "Podcast 3: From Scam to Justice — What Happens After You Report?", description: "", },
  { time: "15:00 - 15:30", },
  { time: "15:30 - 16:00", title: "Investment Talk 8", description: "", speakers: [{ name: "Exhibitor M", title: "Exhibitor & Panelists", company: "" }] },
  { time: "16:00 - 16:30", },
  { time: "16:30 - 17:00", },
  { time: "17:00 - 17:30", title: "Investment Talk 9", description: "", speakers: [{ name: "Exhibitor N", title: "Exhibitor & Panelists", company: "" }] },
  { time: "17:30 - 18:00", },
  { time: "18:00 - 18:30", },
  { time: "18:30 - 19:00", title: "Wrap: Sunset Wrap & Networking — Share, Connect, Celebrate", description: "Join for a relaxed wrap: share takeaways, meet speakers, and explore follow-up opportunities. Light refreshments served." },
  { time: "19:00 - 19:10", title: "Day 2 End" },
];

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  const displayName = speaker?.name || "TBD Speaker";
  const initials = displayName.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-navy-light to-navy-deep flex items-center justify-center text-primary-foreground font-bold text-lg">
        {speaker.photo ? (
          <img src={speaker.photo} alt={displayName} className="w-full h-full object-cover" />
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
const SessionRow = ({ session, onOpen }: { session: Session; onOpen: (s: Session) => void }) => {
  const isDayEnd = !!(session.title && /Day\s*\d+\s*End/i.test(session.title));
  const isInvestmentTalk = !!(session.title && session.title.startsWith('Investment Talk'));
  return (
    <div
      className="border-b border-border last:border-b-0 py-4 cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(session)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(session); }}
    >
      <div className={`flex gap-6 ${isDayEnd ? 'items-center' : 'items-start'}`}>
      <div className="w-28 flex-shrink-0">
        <div className="bg-primary/10 text-primary px-3 py-2 rounded-md text-sm font-medium text-center">
          {session.time}
        </div>
      </div>

      <div className="flex-1 pr-4">
        {session.isPanel ? (
          <>
            <p className="text-muted-foreground font-medium mb-1 text-center">Panel Discussion #{session.panelNumber}</p>
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
            {session.speakers.map((speaker, i) => (
              <div key={i} className="p-3 bg-primary/5 rounded-md">
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSession, setModalSession] = useState<Session | null>(null);

  const placeholderImage = (name = "Speaker") => `https://via.placeholder.com/160?text=${encodeURIComponent(name)}`;

  const openModal = (s: Session) => {
    // If speakers exist and no photo, assign a placeholder URL dynamically (non-mutating)
    if (s.speakers && s.speakers.length > 0) {
      s.speakers = s.speakers.map((sp) => ({ ...sp, photo: sp.photo || placeholderImage(sp.name) }));
    }
    setModalSession(s);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSession(null);
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
            <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] bg-gradient-to-r from-primary to-primary/80">
              <div className="px-4 py-3 text-black font-bold">Time</div>
              <div className="px-4 py-3 text-black font-bold text-center">Topic</div>
            </div>

            {/* Table Body */}
            <div className="bg-card px-4">
              {((day === 1 ? (activeTab === "main" ? mainStageSchedule : engagementStageSchedule) : (activeTab === "main" ? mainStageScheduleDay2 : engagementStageScheduleDay2))).map((session, index) => (
                <SessionRow key={index} session={session} onOpen={openModal} />
              ))}
            </div>
          </div>

          {/* Modal for session details */}
          {modalOpen && modalSession && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
              <div role="dialog" aria-modal="true" className="bg-card rounded-lg max-w-2xl w-full p-6 relative">
                <button onClick={closeModal} aria-label="Close" className="absolute right-4 top-4 text-muted-foreground text-xl">×</button>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    {modalSession.speakers && modalSession.speakers[0] ? (
                      <img src={modalSession.speakers[0].photo || placeholderImage(modalSession.speakers[0].name)} alt={modalSession.speakers[0].name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xl font-bold">{(modalSession.title || 'Session').split(' ').map(s => s[0]).slice(0,2).join('')}</div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-deep">{modalSession.title || modalSession.panelTitle || 'Session Details'}</h3>
                    {modalSession.speakers && modalSession.speakers[0] && (
                      <p className="text-sm text-foreground mt-1">Presented by <span className="font-semibold text-navy-deep">{modalSession.speakers[0].name}</span></p>
                    )}
                    {modalSession.description && (
                      <p className="mt-4 text-muted-foreground">{modalSession.description}</p>
                    )}
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
