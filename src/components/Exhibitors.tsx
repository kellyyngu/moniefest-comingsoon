import React from "react";
// Logos served from public/optimized (WebP)
const foodieLogo = '/optimized/Foodie-Red.webp';
const spireLogo = '/optimized/Spire-Black.webp';
const benchxcapitalLogo = '/optimized/benchxcapital.webp';
const gambitTrusteesLogo = '/optimized/gambitTrustees.webp';
const gambitCustodyLogo = '/optimized/gambitCustody.webp';
const lunoLogo = '/optimized/luno.webp';
const moomooLogo = '/optimized/moomoo.webp';
const webullLogo = '/optimized/webull.webp';
const microleapLogo = '/optimized/microleap.webp';
const fimmLogo = '/optimized/FIMM.webp';
const fsmOneLogo = '/optimized/FSM_One.png';
const societyMalaysiaLogo = '/society-malaysia.svg';
const fundingSocietiesLogo = '/optimized/fundingSocieties.svg';
const spgLogo = '/optimized/spg_dji.png';

const placeholderImg = (label = "Logo") => `https://via.placeholder.com/280x140?text=${encodeURIComponent(label)}`;

// Logo URLs
const logoUrls: Record<string, string> = {
  [foodieLogo]: 'https://foodiemedia.com/',
  [spireLogo]: 'https://www.financelang.com',
  [benchxcapitalLogo]: 'https://www.benchxcapital.com/',
  [microleapLogo]: 'http://www.microleapasia.com',
  [fimmLogo]: 'https://www.fimm.com.my/',
  [lunoLogo]: 'https://www.luno.com',
  [spgLogo]: 'http://www.spglobal.com/spdji/',
  [fundingSocietiesLogo]: 'https://fundingsocieties.com.my/invest?tab=conventional&utm_source=marketing&utm_campaign=marketing_campaign_moniefest2026&utm_medium=offline-event&utm_content=moniefest_website',
  '/versa.svg': 'https://versa.com.my/',
};

const coOrganizers = [foodieLogo, spireLogo];
const strategicPartners = [benchxcapitalLogo];
const platinumSponsors = [ gambitTrusteesLogo, fsmOneLogo, gambitCustodyLogo, lunoLogo, moomooLogo, webullLogo];
const goldSponsors = ['/versa.svg'];
const supportingPartners = [
  societyMalaysiaLogo,
  fimmLogo,
];
const silverSponsors = [fimmLogo, fundingSocietiesLogo, microleapLogo];
const giftPartners = Array.from({ length: 4 }).map((_, i) => placeholderImg(`Gift+${i+1}`));
const knowledgePartners = [spgLogo];

const baseUrl = "";

interface LogoGridProps {
  title: string;
  logos: string[];
  fullUrls?: boolean;
  hideCaption?: boolean;
  logoOnly?: boolean;
  logoUrls?: Record<string, string>;
}

const formatAlt = (nameOrFilename: string) => {
  if (!nameOrFilename) return "logo";
  // Remove query params, directories, and extensions, then normalize separators
  const base = nameOrFilename.split("?")[0].split("/").pop()?.split("\\").pop() || nameOrFilename;
  const cleaned = base
    .replace(/^img[_-]?/i, "")
    .replace(/\.(jpg|jpeg|png|svg|webp)$/i, "")
    .replace(/[_-]+/g, " ")
    .trim();
  return cleaned
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
};

const LogoGrid = ({ title, logos, fullUrls, hideCaption, logoOnly, logoUrls }: LogoGridProps) => (
  <div className="mb-16 w-full">
    <h3 className="text-2xl font-bold text-foreground text-center mb-8">{title}</h3>
    <div className="max-w-6xl mx-auto">
      {logoOnly ? (
        <div className="flex flex-wrap items-center justify-center gap-4 px-4 sm:gap-6">
          {logos.map((logo, index) => {
            const logoSrc = fullUrls ? logo : `${baseUrl}${logo}`;
            const logoUrl = logoUrls?.[logo];
            const imageElement = (
              <img
                src={logoSrc}
                alt={formatAlt(fullUrls ? logo : logo)}
                title={formatAlt(fullUrls ? logo : logo)}
                loading="eager"
                decoding="async"
                className="max-w-[90%] max-h-[80%] object-contain"
              />
            );

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-3 sm:p-6 flex items-center justify-center w-[calc(50%-0.5rem)] sm:w-56 h-28 sm:h-44 shadow-sm"
              >
                {logoUrl ? (
                  <a
                    href={logoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full hover:opacity-80 transition-opacity"
                    aria-label={`Visit ${formatAlt(fullUrls ? logo : logo)} website`}
                  >
                    {imageElement}
                  </a>
                ) : (
                  imageElement
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center justify-center">
          {logos.map((logo, index) => {
            const logoSrc = fullUrls ? logo : `${baseUrl}${logo}`;
            const logoUrl = logoUrls?.[logo];
            const imageElement = (
              <img
                src={logoSrc}
                alt={formatAlt(fullUrls ? logo : logo)}
                title={formatAlt(fullUrls ? logo : logo)}
                loading="eager"
                decoding="async"
                className="max-w-[85%] max-h-[60%] object-contain"
              />
            );

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center w-full sm:w-64 h-36 sm:h-44 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
              >
                {logoUrl ? (
                  <a
                    href={logoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label={`Visit ${formatAlt(fullUrls ? logo : logo)} website`}
                  >
                    {imageElement}
                  </a>
                ) : (
                  imageElement
                )}
                {!hideCaption && (
                  <div className="mt-3 text-sm text-muted-foreground text-center">{formatAlt(fullUrls ? logo : logo)}</div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  </div>
);

const Exhibitors = () => {
  // Toggle to hide sponsor categories below platinum
  const showAllSponsors = false;
  return (
    <section className="py-20 bg-background" id="exhibitors" aria-labelledby="exhibitors-title">
      <div className="section-container flex flex-col items-center">
        <div className="mb-12">
          <h2 id="exhibitors-title" className="text-3xl font-bold text-primary text-center mb-6">Supporting Partners & Sponsors</h2>
          <p className="text-center text-muted-foreground">We gratefully acknowledge the organisations supporting Monie Fest — supporting partners and sponsors are featured below.</p>
        </div>

        <LogoGrid title="Co-organisers" logos={coOrganizers} fullUrls hideCaption logoOnly logoUrls={logoUrls} />
        <LogoGrid title="Strategic Partner" logos={strategicPartners} fullUrls hideCaption logoOnly logoUrls={logoUrls} />
        <LogoGrid title="Platinum Sponsors" logos={platinumSponsors} fullUrls hideCaption logoOnly logoUrls={logoUrls} />
        <LogoGrid title="Gold Sponsors" logos={goldSponsors} fullUrls hideCaption logoOnly logoUrls={logoUrls} />
        <LogoGrid title="Silver Sponsors" logos={silverSponsors} fullUrls hideCaption logoOnly logoUrls={logoUrls}/>
        <LogoGrid title="Supporting Partners" logos={supportingPartners} fullUrls hideCaption logoOnly logoUrls={logoUrls} />
        <LogoGrid title="Knowledge Partners" logos={knowledgePartners} fullUrls hideCaption logoOnly logoUrls={logoUrls} />
        {showAllSponsors && (
          <>
            <LogoGrid title="Supporting Partners" logos={supportingPartners} fullUrls />
            <LogoGrid title="Gold Sponsors" logos={goldSponsors} fullUrls />
            <LogoGrid title="Silver Sponsors" logos={silverSponsors} fullUrls />
            <LogoGrid title="Gift Partners" logos={giftPartners} fullUrls />
          </>
        )}
      </div>
    </section>
  );
};

export default Exhibitors;
