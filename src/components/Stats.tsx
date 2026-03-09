const stats = [
  { number: "30,000+", label: "Attendees", icon: 'partners' },
  { number: "100+", label: "Speakers", icon: 'speakers' },
  { number: "100+", label: "Exhibitors", icon: 'exhibitors' },
];

const Icon = ({ name }: { name: string }) => {
  if (name === 'partners') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20v-1c0-2.21 1.79-4 4-4h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 20v-1c0-2.21-1.79-4-4-4h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === 'exhibitors') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8h10M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === 'speakers') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // fallback
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const Stats = () => {
  return (
    <section className="py-8 bg-background">
      <div className="section-container">
         <div className="flex justify-center">
           <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4 px-2 justify-items-center">
          {stats.map((stat, index) => (
            <article
              key={index}
              className={`relative rounded-xl p-3 sm:p-6 bg-card border border-border text-center animate-slide-up min-w-0 flex flex-col items-center justify-center w-full sm:w-auto max-w-[170px] sm:max-w-none mx-auto`}
              style={{ animationDelay: `${index * 80}ms` }}
              aria-labelledby={`stat-${index}-label`}
            >
              <div className="flex items-center justify-center mb-3 text-primary">
                <div className="bg-primary/10 p-2 rounded-md text-primary-foreground">
                  <Icon name={stat.icon} />
                </div>
              </div>

              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary mb-1 leading-tight">{stat.number}</p>
              <p id={`stat-${index}-label`} className="text-foreground text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase">{stat.label}</p>
            </article>
          ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
