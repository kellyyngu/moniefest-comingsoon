
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
// Background served from public/optimized (WebP)
const heroBg = '/optimized/speakerBanner.webp';

type Speaker = { name: string; title?: string; company?: string; photo?: string; nowrapName?: boolean; bio?: string };

const speakers: Speaker[] = [
  {
    name: "Lim Pinn Yang",
    title: "Chief Executive Officer",
    company: "Foodie Media Berhad",
    photo: '/optimized/pinnyang.webp',
    bio: `Lim Pinn Yang is the Founder and CEO of Foodie Media Berhad, a leading digital media company in Malaysia. Starting from a simple food page, he grew it into a multi-brand media and commerce ecosystem reaching millions today. He is passionate about financial literacy, long-term thinking, and showing that wealth is built through consistency, discipline, and belief.`
  },
  {
    name: "Yang Berhormat Liew Chin Tong",
    title: "Deputy Minister of Finance",
    company: "Government of Malaysia",
    photo: '/optimized/liewChinTong.png',
    bio: `Liew Chin Tong is the Deputy Minister of Finance of Malaysia, appointed on 16 December 2025. He is currently the Member of Parliament for Iskandar Puteri, after being elected on 19 November 2022. He is also the State Assemblyperson for Perling, Johor.

While serving as the Deputy Minister of Investment, Trade and Industry from December 2022 to December 2025, he worked closely with Minister Tengku Zafrul Aziz, with the New Industrial Master Plan (NIMP 2030) as the guiding document, to shape the strategic directions of Malaysia’s industrial development, especially for the semiconductor, iron and steel, and automotive sectors.

He was a Senator in Dewan Negara from 2018 to 2021 and served as Deputy Minister of Defence from July 2018 to February 2020. He was first elected Member of Parliament for Bukit Bendera (2008-2013) and was subsequently the Member of Parliament for Kluang (2013-2018).

Since 1999, Chin Tong has served the Democratic Action Party (DAP) in various capacities and is now a member of its Central Executive Committee, serving as the Strategic Director.

Chin Tong graduated with a degree in Political Science and an honours degree in Asian Studies from the Australian National University and holds an International Masters in Regional Integration from the Asia-Europe Institute, University of Malaya.

Chin Tong was the Chairman of Research for Social Advancement (REFSA) from 2012 to May 2025. Prior to that, he was the Executive Director of Penang Institute from 2009-2012. He was also formerly a Visiting Senior Fellow at the Institute of Southeast Asian Studies (ISEAS), Singapore.

He recently published the book Second Takeoff: Strategies for Malaysia’s Economic Resurgence which outlined his vision for the emergence of Malaysia as a middle-class society.`
  },
  {
    name: "George Poh, CFP®",
    title: "Chief Executive Officer",
    company: "Spire Digital Sdn. Bhd.",
    photo: '/optimized/george.webp',
    nowrapName: true,
    bio: `George Poh, CFP® is the Chief Executive Officer of Spire Digital Sdn Bhd, a finance-focused digital media company under EE Cameron Group, built with one mission: to make financial literacy more accessible, responsible, and impactful for everyday Malaysians. Spire Digital stands for one purpose — Inspiring Confidence, Empowering Financial Decisions.

Before leading Spire Digital, George built hands-on experience in banking and wealth-related roles, including Hong Leong Bank Berhad, where he served more than 150 High Net Worth Individuals (HNWI) in wealth management and asset financing solutions. He later led performance outcomes in asset financing, achieving more than RM150 million in new loan acquisition during the 2020/21 financial year.

Driven by the belief that education is the foundation of better money choices, George transitioned in 2H 2022 to focus on financial planning and education, combining industry experience with professional standards as a Licensed Financial Planner and CFP® professional. With his team, he has since educated 1,120+ young working adults on personal finance and investing through his proprietary learning approach.

At Monie Fest, George represents a long-term vision: building a credible financial media ecosystem that raises literacy, strengthens decision-making, and creates lasting financial confidence.`
  },
  { name: "Jeroni Khoo", title: "Deputy Country Manager", company: "Luno Malaysia", photo: '/optimized/jeroni.jpg', bio: `Jeroni Khoo is the Deputy Country Manager at Luno Malaysia, a leading digital asset
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
Marketing and Economics, from Monash University.` },
  {
    name: "Sean Freer",
    title: "Director, Global Exchange Indices",
    company: "S&P Dow Jones Indices (S&P DJI)",
    photo: '/optimized/seanFreer.jpg',
    bio: `Sean Freer is Director, Global Exchange Indices at S&P Dow Jones Indices (S&P DJI). He is responsible for the product management of S&P DJI’s global exchange partnered indices including the S&P/ASX series. In this role, Sean supports S&P DJI’s efforts developing new benchmarks for local and international equity markets and promotes their use among clients in the Asia‑Pacific region. He also regularly publishes research, analytical reports and market commentary on a variety of international investment topics.

Prior to joining S&P DJI, Sean was a senior product specialist at Franklin Templeton, supporting a number of business development and client retention activities for their global, emerging market and U.S. equity investment platforms. He has also had roles as a product manager and proposal and investment writer at AMP Capital Investors, Russell Investments and Fidelity International. Before joining the financial services industry in 2006, Sean was a broadcast journalist in Queensland, Australia.

Sean holds a master’s degree in International Relations from Dublin City University and bachelor’s degree in Journalism from the University of Queensland.`
  },
];

// Grouping for page layout
const guestOfHonour = (speakers.find(s => s.name.includes('Liew Chin Tong')) as Speaker) || null;
const organisersList = speakers.filter(s => s.name.includes('Lim Pinn Yang') || s.name.includes('George Poh'));
const mainSpeakersList = speakers.filter(s => s !== guestOfHonour && !organisersList.includes(s));

const SpeakerCard = ({ s, singleCol }: { s: Speaker; singleCol?: boolean }) => {
  const isLogo = !!(s.photo && s.photo.toLowerCase().includes('microleap')) || (s.name || '').toLowerCase().includes('microleap');

  // 1-per-row on mobile: horizontal layout, full width, larger avatar
  if (singleCol) {
    return (
      <div className="bg-card rounded-xl p-4 border border-white/5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 w-full h-24 sm:w-56 sm:h-64 sm:flex-col sm:text-center sm:p-6 overflow-hidden">
        <div className="flex-shrink-0">
          <div className={isLogo
            ? 'w-20 h-20 sm:w-28 sm:h-28 rounded-md overflow-hidden bg-transparent flex items-center justify-center'
            : 'w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-muted flex items-center justify-center'
          }>
            {s.photo ? (
              <img src={s.photo} alt={s.name} loading="eager" decoding="async" className={isLogo ? 'w-full h-full object-contain' : 'w-full h-full object-cover object-top'} />
            ) : (
              <span className="text-primary-foreground font-bold text-xl">{s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</span>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0 text-left sm:text-center">
          <p className="font-semibold text-sm sm:text-base text-navy-deep leading-tight mb-0.5">{s.name}</p>
          {s.title && <p className="text-xs text-primary italic leading-tight mb-0.5">{s.title}</p>}
          {s.company && <p className="text-xs text-foreground/80 leading-tight">{s.company}</p>}
        </div>
      </div>
    );
  }

  // 2-per-row: compact vertical card
  return (
    <div className="bg-card rounded-xl p-5 sm:p-6 border border-white/5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center w-full h-64 sm:h-64 overflow-hidden">
      <div className="mb-3">
        <div className={isLogo
          ? 'w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden bg-transparent flex items-center justify-center'
          : 'w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-muted flex items-center justify-center'
        }>
          {s.photo ? (
            <img src={s.photo} alt={s.name} loading="eager" decoding="async" className={isLogo ? 'w-full h-full object-contain' : 'w-full h-full object-cover object-top'} />
          ) : (
            <span className="text-primary-foreground font-bold text-2xl">{s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</span>
          )}
        </div>
      </div>
      <p className="font-semibold text-sm sm:text-base text-navy-deep leading-tight mb-1">{s.name}</p>
      {s.title && <p className="text-xs text-primary italic leading-tight mb-0.5">{s.title}</p>}
      {s.company && <p className="text-xs text-foreground/80 leading-tight">{s.company}</p>}
    </div>
  );
};

const SpeakersPage = () => {
  const [mobileCols, setMobileCols] = useState<number>(() => {
    try { const v = localStorage.getItem('speakersMobileCols'); return v ? Number(v) : 2; } catch { return 2; }
  });
  useEffect(() => {
    try { localStorage.setItem('speakersMobileCols', String(mobileCols)); } catch {}
  }, [mobileCols]);

  const singleCol = mobileCols === 1;

  const [speakerModalOpen, setSpeakerModalOpen] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    // Use CSS-only lock: toggle a class that sets `overflow: hidden` on the body.
    try {
      if (speakerModalOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    } catch (e) {}

    // Cleanup: ensure class is removed when component unmounts
    return () => {
      try { document.body.classList.remove('modal-open'); } catch {}
    };
  }, [speakerModalOpen]);

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
            Meet the experts and leaders joining our panels and sessions. Their combined experience spans research, asset management and corporate leadership.
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
                  ? 'bg-primary text-black border-primary'
                  : 'border-white/10 text-white/70 bg-transparent hover:bg-white/5'
              }`}
            >
              1 per row
            </button>
            <button
              aria-label="Two per row"
              onClick={() => setMobileCols(2)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                mobileCols === 2
                  ? 'bg-primary text-black border-primary'
                  : 'border-white/10 text-white/70 bg-transparent hover:bg-white/5'
              }`}
            >
              2 per row
            </button>
          </div>

          {/* short instruction note */}
          <div className="text-center text-sm text-muted-foreground mb-4">Click on speaker card to view the speaker profile.</div>

          {/* ── Guest of Honour ── */}
          {guestOfHonour && (
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">Guest of Honour</h2>
              <div className="flex justify-center">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openSpeakerModal(guestOfHonour)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSpeakerModal(guestOfHonour); }}
                  className="max-w-2xl w-full cursor-pointer focus:outline-none rounded-xl"
                >
                  <div className="bg-card rounded-xl p-6 sm:p-8 shadow-md border border-white/6 flex flex-col items-center sm:flex-row sm:items-center gap-5 sm:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-muted">
                        <img src={guestOfHonour.photo || placeholderImage(guestOfHonour.name)} alt={guestOfHonour.name} className="w-full h-full object-cover object-top" />
                      </div>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <span className="inline-block text-[10px] uppercase tracking-widest text-primary/80 font-semibold mb-1.5">Guest of Honour</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-deep leading-tight">{guestOfHonour.name}</h3>
                      {guestOfHonour.title && <p className="text-sm text-primary italic mt-1">{guestOfHonour.title}</p>}
                      {guestOfHonour.company && <p className="text-sm text-foreground/80 mt-1">{guestOfHonour.company}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── Organisers ── */}
          {organisersList.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">Organisers</h2>
              <div className={singleCol ? 'flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 px-2 mb-12' : 'flex flex-wrap items-stretch justify-center gap-4 sm:gap-6 px-2 mb-12'}>
                {organisersList.map((o, idx) => (
                  <div key={idx} role="button" tabIndex={0} className={`cursor-pointer ${singleCol ? 'w-full max-w-md sm:w-auto' : 'w-[calc(50%-0.5rem)] sm:w-56'}`} onClick={() => openSpeakerModal(o)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSpeakerModal(o); }}>
                    <SpeakerCard s={o} singleCol={singleCol} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Speakers ── */}
          {mainSpeakersList.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">Speakers</h2>
              <div className={singleCol ? 'flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 px-2 mb-12' : 'flex flex-wrap items-stretch justify-center gap-4 sm:gap-6 px-2 mb-12'}>
                {mainSpeakersList.map((s, i) => (
                  <div key={i} role="button" tabIndex={0} className={`cursor-pointer ${singleCol ? 'w-full max-w-md sm:w-auto' : 'w-[calc(50%-0.5rem)] sm:w-56'}`} onClick={() => openSpeakerModal(s)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openSpeakerModal(s); }}>
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
              <div role="dialog" aria-modal="true" className="bg-card rounded-lg w-full mx-4 sm:mx-auto max-w-2xl p-0 relative max-h-[90vh] overflow-hidden">
                <div className="relative">
                  <div className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm p-4 sm:p-6 border-b border-white/6">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                          <img src={activeSpeaker.photo || placeholderImage(activeSpeaker.name)} alt={activeSpeaker.name} className="w-full h-full object-cover object-top" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg sm:text-2xl font-bold text-navy-deep">{activeSpeaker.name}</h3>
                        <p className="text-xs sm:text-sm text-primary italic mt-1">{activeSpeaker.title}</p>
                        <p className="text-sm text-foreground font-semibold mt-1">{activeSpeaker.company}</p>
                      </div>

                      <button onClick={closeSpeakerModal} aria-label="Close" className="ml-4 text-muted-foreground text-lg">×</button>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 overflow-auto max-h-[70vh]">
                    <div className="speaker-bio text-muted-foreground text-sm leading-relaxed">
                      {activeSpeaker.bio ? (
                        activeSpeaker.bio.split(/\n\s*\n/).map((para, idx) => (
                          <p key={idx} className="mb-2 text-left sm:text-justify">{para}</p>
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

      <Footer />
    </div>
  );
};

export default SpeakersPage;
