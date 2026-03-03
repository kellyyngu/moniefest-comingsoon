import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mic, Users } from "lucide-react";

type Speaker = { name: string; photo?: string; title?: string; company?: string };
type Slide = {
  id: string;
  day: 1 | 2;
  stage: "Monie Stage" | "Creator Stage";
  time: string;
  topic: string;
  type: "talk" | "panel" | "podcast";
  speakers: Speaker[];
};

/** A curated selection of real sessions from the Programme page */
const programmeSlides: Slide[] = [
  {
    id: 'p1',
    day: 1,
    stage: 'Monie Stage',
    time: '11:15 – 12:00',
    topic: "Malaysia's Economic Growth Outlook for 2H 2026",
    type: 'talk',
    speakers: [
      {
        name: 'Mohammad Bazli Che Rozenan, CFA',
        title: 'Director, Members Engagement',
        company: 'CFA Society Malaysia',
        photo: '/optimized/mohammadBazli.jpg',
      },
    ],
  },
  {
    id: 'p2',
    day: 1,
    stage: 'Monie Stage',
    time: '15:00 – 15:45',
    topic: "Don't Fall For These Bitcoin (& Crypto) Myths",
    type: 'talk',
    speakers: [
      {
        name: 'Jeroni Khoo',
        title: 'Deputy Country Manager',
        company: 'Luno Malaysia',
        photo: '/optimized/jeroni.jpg',
      },
    ],
  },
  {
    id: 'p3',
    day: 1,
    stage: 'Monie Stage',
    time: '16:45 – 17:30',
    topic: 'Can Crypto Coexist With a Boring, Stable Financial Plan?',
    type: 'panel',
    speakers: [
      {
        name: 'Datuk Clifford Hii',
        title: 'Chief Executive Officer',
        company: 'Gambit Group',
        photo: '/optimized/datuk_clifford_hii.jpg',
      },
    ],
  },
  {
    id: 'p4',
    day: 1,
    stage: 'Monie Stage',
    time: '16:00 – 16:45',
    topic: 'Big Returns Without Big Barriers: From RM10 to 18%',
    type: 'talk',
    speakers: [
      {
        name: 'Afiq Ismail',
        title: 'PR & Marketing Manager',
        company: 'microLEAP',
        photo: '/optimized/afiq.webp',
      },
    ],
  },
  {
    id: 'p5',
    day: 2,
    stage: 'Creator Stage',
    time: '11:00 – 11:30',
    topic: 'Building Your Dividend Machine',
    type: 'talk',
    speakers: [
      {
        name: 'Tan Kyzen, Max',
        title: 'Director',
        company: 'Gyaku Capital Sdn. Bhd.',
        photo: '/optimized/max.jpg',
      },
    ],
  },
  {
    id: 'p6',
    day: 2,
    stage: 'Creator Stage',
    time: '17:00 – 17:30',
    topic: 'Why Stock Investing is For You?',
    type: 'talk',
    speakers: [
      {
        name: 'Shane Choo',
        title: 'Director, WealthFort',
        company: 'WealthFort',
        photo: '/optimized/shane.png',
      },
    ],
  },
  {
    id: 'p7',
    day: 2,
    stage: 'Monie Stage',
    time: '14:30 – 15:15',
    topic: 'Entrepreneurship in 2026: Building Businesses That Last in a Changing Economy',
    type: 'panel',
    speakers: [],
  },
  {
    id: 'p8',
    day: 2,
    stage: 'Monie Stage',
    time: '18:45 – 19:30',
    topic: 'What Changes After You Make Your First Million?',
    type: 'panel',
    speakers: [],
  },
];

const TYPE_LABEL: Record<Slide["type"], string> = {
  talk: 'Talk',
  panel: 'Panel Discussion',
  podcast: 'Podcast',
};

const TYPE_COLOURS: Record<Slide["type"], string> = {
  talk: 'from-primary to-green-400',
  panel: 'from-violet-500 to-primary',
  podcast: 'from-orange-400 to-yellow-400',
};

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/);
  return <>{parts.map((p) => p[0]).join('').slice(0, 2).toUpperCase()}</>;
}

export default function ProgrammePreview({
  slides = programmeSlides,
  durationMs = 5000,
}: {
  slides?: Slide[];
  durationMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const length = slides.length;

  const goTo = (i: number) => {
    if (i === index) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(i);
      setAnimating(false);
    }, 220);
  };

  useEffect(() => {
    if (paused) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      goTo((index + 1) % length);
    }, durationMs);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [index, paused, length, durationMs]);

  const current = slides[index];
  const hasSpeakers = current.speakers.length > 0;

  return (
    <section className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">Line-up</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Programme Highlights</h2>
          </div>
          <Link
            to="/programme"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition"
          >
            Full Schedule <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Card */}
        <div className="relative rounded-2xl border border-white/8 bg-card overflow-hidden shadow-xl">
          {/* Progress bar */}
          {!paused && (
            <div key={`bar-${index}`} className="absolute top-0 left-0 h-[3px] bg-primary rounded-full animate-progress-bar" style={{ animationDuration: `${durationMs}ms` }} />
          )}

          <Link to="/programme" className="block p-6 md:p-8">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {/* Type badge */}
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-black bg-gradient-to-r ${TYPE_COLOURS[current.type]}`}>
                {current.type === 'panel' ? <Users className="w-3 h-3" /> : <Mic className="w-3 h-3" />}
                {TYPE_LABEL[current.type]}
              </span>
              {/* Day badge */}
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/8 text-muted-foreground">
                Day {current.day}
              </span>
              {/* Stage badge */}
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/8 text-muted-foreground">
                {current.stage}
              </span>
              {/* Time */}
              <span className="ml-auto text-xs font-mono text-primary font-semibold">{current.time}</span>
            </div>

            {/* Topic */}
            <h3
              className={`text-xl md:text-2xl font-bold text-foreground leading-snug mb-5 transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}
            >
              {current.topic}
            </h3>

            {/* Speakers */}
              {hasSpeakers ? (
              <div className="flex flex-wrap gap-4">
                {current.speakers.map((s) => {
                  const isClifford = s.name.toLowerCase().includes('clifford');
                  const isShane = s.name.toLowerCase().includes('shane');
                  const isAfiq = s.name.toLowerCase().includes('afiq');
                  const isWhiteBg = isShane || isAfiq;
                  return (
                    <div key={s.name} className={`flex items-center gap-4 bg-white/5 rounded-xl px-4 py-3`}>
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 ${isWhiteBg ? 'bg-white' : 'bg-gradient-to-br from-navy-light to-navy-deep'} flex items-center justify-center text-xs md:text-sm font-bold text-primary-foreground`}>
                        {s.photo ? (
                          <img
                            src={s.photo}
                            alt={s.name}
                            className="w-full h-full object-cover block"
                            style={isClifford ? { objectPosition: 'center 18%', transform: 'scale(1.65)', transformOrigin: 'center 22%', display: 'block' } : isShane ? { objectPosition: 'center 12%' } : isAfiq ? { objectPosition: 'center 22%' } : { objectPosition: 'top' }}
                          />
                        ) : (
                          <Initials name={s.name} />
                        )}
                      </div>
                      <div>
                        <p className="text-sm md:text-base font-semibold text-foreground leading-tight">{s.name}</p>
                        {s.title && <p className="text-[11px] md:text-sm text-primary italic leading-tight">{s.title}</p>}
                        {s.company && <p className="text-[11px] md:text-sm text-muted-foreground leading-tight">{s.company}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">Speakers to be announced</p>
            )}
          </Link>

          {/* Bottom bar: dots + view all link (mobile) */}
          <div className="flex items-center justify-between px-6 pb-5">
            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-5 h-2 bg-primary'
                      : 'w-2 h-2 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <Link
              to="/programme"
              className="sm:hidden inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition"
            >
              Full Schedule <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
