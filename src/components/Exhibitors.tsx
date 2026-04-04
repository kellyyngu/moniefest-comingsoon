import React from "react";
import { Button } from "@/components/ui/button";
// Logos served from public/optimized (WebP)
const foodieLogo = "/optimized/Foodie-Red.webp";
const spireLogo = "/optimized/Spire-Black.webp";
const benchxcapitalLogo = "/optimized/benchxcapital.webp";
const gambitTrusteesLogo = "/optimized/gambitTrustees.webp";
const gambitCustodyLogo = "/optimized/gambitCustody.webp";
const lunoLogo = "/optimized/luno.webp";
const moomooLogo = "/optimized/moomoo.webp";
const microleapLogo = "/optimized/microleap.webp";
const fimmLogo = "/optimized/FIMM.webp";
const fsmOneLogo = "/optimized/FSM_One.png";
const phillipLogo = "/optimized/phillipCapital.png";
const societyMalaysiaLogo = "/society-malaysia.svg";
const fundingSocietiesLogo = "/optimized/fundingSocieties.svg";
const spgLogo = "/optimized/spg_dji.png";
const bursaLogo = "/optimized/bursa.svg";
const capbayLogo = "/optimized/capbay.png";
const ncspaceLogo = "/optimized/NCSPACE.svg";
const wealthFortLogo = "/optimized/WealthFort.svg";
const cgsiLogo = "/optimized/CGSI.svg";
const ctosLogo = "/optimized/CTOS.svg";
const publicMutualLogo = "/optimized/publicMutual.png";
const cboeLogo = "/optimized/CBOE.svg";
const stayWokePropertyLogo = "/optimized/stayWokeProperty.svg";
const zietLogo = "/optimized/ziet.svg";
const noMoneyLahLogo = "/optimized/NoMoneyLah.svg";
const bbkNetworkLogo = "/optimized/BBKNetwork.svg";
const iherngLogo = "/optimized/iherng.png";
const insightInvestsLogo = "/optimized/insightInvests.svg";
const financeLangLogo = "/optimized/financeLang.PNG";
const insightsAnalyticsBerhadLogo = "/optimized/insightsAnalyticsBerhad.svg";
const traddictivLogo = "/optimized/traddictiv.svg";
const tealiveLogo = "/optimized/tealive.svg";
const kenangaLogo = "/optimized/kenanga.png";
const mrmoneyLogo = "/optimized/MrMoney.avif";
const wabikongLogo = "/optimized/wabikong.svg";
const taylorsUniversityLogo = "/optimized/taylorsUniversity.svg";
const tianGeLogo = "/optimized/tianGe.svg";
const gyakuCapitalLogo = "/optimized/gyakuCapital.svg";
const printciousLogo = "/optimized/printcious.svg";
const saturnaLogo = "/optimized/saturna.svg";
const ecoAsiaCapitalLogo = "/optimized/ecoAsiaCapital.svg";
const grandpineCapitalLogo = "/optimized/grandpineCapital.svg";
const mpgLogo = "/optimized/MPG.svg";
const endeavorLogo = "/optimized/endeavor.svg";
const asriAhmadAcademyLogo = "/optimized/asriAhmadAcademy.svg";
const uhnwLogo = "/optimized/UHNW.jpeg";
const skyworldLogo = "/optimized/skyworld.png";
const sinegyLogo = "/optimized/sinegy.svg";
const zusLogo = "/optimized/zus.svg";
const bbbWealthLogo = "/optimized/BBBwealth.svg";
const colonyLogo = "/optimized/colony.svg";
const pmbLogo = "/optimized/PMB.svg";
const asnbLogo = "/optimized/ASNB.svg";
const rytBankLogo = "/optimized/rytBank.svg";
const hlbLogo = "/optimized/HLB.svg";
const activ8Logo = "/optimized/ACTIV8.svg";
const financialFaizLogo = "/optimized/financialFaiz.svg";
const fnbTalkLogo = "/optimized/F&B.svg";
const jaLogo = "/optimized/JA.svg";
const moneyBraderLogo = "/optimized/moneyBrader.svg";
const dasherLogo = "/optimized/dasher.png";
const paramountPropertyLogo = "/optimized/paramountProperty.png";
const chuckLogo = "/optimized/chuckLogo.PNG";
const talentCorpLogo = "/optimized/talentCorp.png";
const ekonomiRakyatLogo = "/optimized/ekonomiRakyat.svg";
const beyondInsightsLogo = "/optimized/beyondInsights.svg";
const fpamLogo = "/optimized/FPAM.png";
const maybankLogo = "/optimized/maybank.svg";
const mybwLogo = "/optimized/MYBW.svg";
const ijmRimbayuLogo = "/optimized/IJMRimbayu.svg";
const rianaDutamasLogo = "/optimized/rianaDutamas.svg";
const epfLogo = "/optimized/EPF.svg";
const greatEasternLogo = "/optimized/greatEastern.jpeg";
const tradeViewCapitalLogo = "/optimized/TradeViewCapital.svg";
const oppoLogo = "/optimized/oppo.png";
const grabLogo = "/optimized/grab.svg";
const uncleJeffLogo = "/optimized/uncleJeff.svg";
const vanzoLogo = "/optimized/vanzo.jpeg";
const ticketmelonLogo = "/optimized/ticketmelon.svg";
const nineSharesLogo = "/optimized/9shares.jpeg";
const pYTCHLogo = "/optimized/PYTCH.png";
const theFinancialTodayLogo = "/optimized/theFinancialToday.jpg";
const ddnkLogo = "/optimized/DDNK.png";
const bondsupermartLogo = "/optimized/bondsupermart.png";
const LFFGroupLogo = "/optimized/LFFGroup.png";
const saatDimensiLogo = "/optimized/saatDimensi.jpeg";
const troopersLogo = "/optimized/troopers.png";

const placeholderImg = (label = "Logo") =>
  `https://via.placeholder.com/280x140?text=${encodeURIComponent(label)}`;

// Logo URLs
const logoUrls: Record<string, string> = {
  [foodieLogo]: "https://foodiemedia.com/",
  [spireLogo]: "https://www.financelang.com",
  [benchxcapitalLogo]: "https://www.benchxcapital.com/",
  [microleapLogo]: "http://www.microleapasia.com",
  [fimmLogo]: "https://www.fimm.com.my/",
  [lunoLogo]: "https://www.luno.com",
  [fsmOneLogo]: "https://bit.ly/4kJDDNs",
  [gambitCustodyLogo]: "https://gambitcustody.com/",
  [gambitTrusteesLogo]: "https://digitaltrustees.com.my/",
  [bursaLogo]: "https://my.bursamalaysia.com/",
  [capbayLogo]: "https://capbay.com/invest/",
  [spgLogo]: "http://www.spglobal.com/spdji/",
  [phillipLogo]: "https://www.phillip.com.my/",
  [financeLangLogo]: "https://www.youtube.com/@finance.lang88",
  [mrmoneyLogo]: "https://www.mrmoneytv.com/",
  [tealiveLogo]: "https://www.loob.com.my/our-company",
  [skyworldLogo]: "https://skyworldgroup.com.my/",
  [fundingSocietiesLogo]:
    "https://fundingsocieties.com.my/invest?tab=conventional&utm_source=marketing&utm_campaign=marketing_campaign_moniefest2026&utm_medium=offline-event&utm_content=moniefest_website",
  [rytBankLogo]: "https://www.rytbank.my/",
  [hlbLogo]: "https://www.hlbislamic.com.my/",
  [saturnaLogo]: "https://saturna.com.my/",
  "/versa.svg": "https://versa.com.my/",
  [cgsiLogo]: "https://www.cgsi.com",
  [ijmRimbayuLogo]: "https://rimbayu.ijmland.com/home",
  [rianaDutamasLogo]: "https://rianadutamas.com/stellaris/",
  [saatDimensiLogo]: "https://www.saatdimensi.com/",
  [epfLogo]: "https://www.kwsp.gov.my/en/member/savings",
  [greatEasternLogo]:
    "https://www.greateasternlife.com/my/en/personal-insurance.html",
  [tradeViewCapitalLogo]: undefined,
  [oppoLogo]: undefined,
  [grabLogo]: undefined,
  [ctosLogo]: "https://www.ctoscredit.com.my",
  [sinegyLogo]: "https://exchange.sinegy.com/",
  [publicMutualLogo]: "https://www.publicmutual.com.my",
  [dasherLogo]: "https://www.dasher.com.my/",
  [paramountPropertyLogo]:
    "https://paramountproperty.my/developments/atwater/atwaters-corporate-office-towers/",
  [cboeLogo]: "https://www.cboe.com/",
  [moomooLogo]:
    "https://www.moomoo.com/my/promotion/welcome?global_content=%7B%22promote_id%22%3A14071,%22sub_promote_id%22%3A26%7D&campaignid=21056393726&adgroupid=&targetid=&matchtype=&network=x&device=m&gclid=Cj0KCQiA8KTNBhD_ARIsAOvp6DLXX4ENPHyBQebyRUL--5iLD4btVGWf2teN0jdag9_GNRNTnouLYUYaAqAjEALw_wcB&creative=&keyword=&placement=&gad_source=1&gad_campaignid=21759930953&gbraid=0AAAAAC1CKHWokj22JfKkCq4QCcM-2vkcf",
  [societyMalaysiaLogo]: "https://www.cfasociety.org/malaysia/home",
  [asnbLogo]: "https://www.asnb.com.my/V2/asnbv2_0index.php",
  [bbbWealthLogo]: undefined,
  [colonyLogo]: undefined,
  [zusLogo]: undefined,
  [pmbLogo]: "https://www.pmbinvestment.com.my/",
  [printciousLogo]:
    "https://www.printcious.com/my?utm_source=sps&utm_medium=monie",
  [beyondInsightsLogo]:
    "https://www.beyondinsights.net/?utm_source=moniefest&utm_campaign=moniefest2026",
  [fpamLogo]: "https://fpam.org.my/",
};

const coOrganizers = [foodieLogo, spireLogo];
const strategicPartners = [benchxcapitalLogo];
const platinumSponsors = [
  bursaLogo,
  gambitTrusteesLogo,
  gambitCustodyLogo,
  fsmOneLogo,
  hlbLogo,
  kenangaLogo,
  lunoLogo,
  maybankLogo,
  moomooLogo,
];
const supportingPartners = [bursaLogo, societyMalaysiaLogo, fimmLogo, fpamLogo];
const silverSponsors = [
  capbayLogo,
  ctosLogo,
  fimmLogo,
  fundingSocietiesLogo,
  ijmRimbayuLogo,
  epfLogo,
  microleapLogo,
  paramountPropertyLogo,
  pmbLogo,
  publicMutualLogo,
  rianaDutamasLogo,
  saatDimensiLogo,
  saturnaLogo,
  sinegyLogo,
];
const goldSponsors = [
  asnbLogo,
  cgsiLogo,
  dasherLogo,
  greatEasternLogo,
  phillipLogo,
  rytBankLogo,
  skyworldLogo,
];
const giftPartners = Array.from({ length: 4 }).map((_, i) =>
  placeholderImg(`Gift+${i + 1}`),
);
const giftSponsors = [tealiveLogo, zusLogo, printciousLogo, uncleJeffLogo];
const exclusivePhonePartners = [oppoLogo];
const knowledgePartners = [cboeLogo, spgLogo];
const mediaPartners = [
  nineSharesLogo,
  ekonomiRakyatLogo,
  pYTCHLogo,
  theFinancialTodayLogo,
];
const friendsOfMonie = [
  asriAhmadAcademyLogo,
  bbbWealthLogo,
  bbkNetworkLogo,
  beyondInsightsLogo,
  bondsupermartLogo,
  chuckLogo,
  colonyLogo,
  ddnkLogo,
  ecoAsiaCapitalLogo,
  endeavorLogo,
  financeLangLogo,
  financialFaizLogo,
  fnbTalkLogo,
  grandpineCapitalLogo,
  gyakuCapitalLogo,
  iherngLogo,
  insightInvestsLogo,
  insightsAnalyticsBerhadLogo,
  jaLogo,
  LFFGroupLogo,
  mpgLogo,
  moneyBraderLogo,
  mrmoneyLogo,
  mybwLogo,
  ncspaceLogo,
  noMoneyLahLogo,
  stayWokePropertyLogo,
  talentCorpLogo,
  taylorsUniversityLogo,
  tianGeLogo,
  ticketmelonLogo,
  traddictivLogo,
  tradeViewCapitalLogo,
  troopersLogo,
  uhnwLogo,
  vanzoLogo,
  wabikongLogo,
  wealthFortLogo,
  zietLogo,
];

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
  const base =
    nameOrFilename.split("?")[0].split("/").pop()?.split("\\").pop() ||
    nameOrFilename;
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

const LogoGrid = ({
  title,
  logos,
  fullUrls,
  hideCaption,
  logoOnly,
  logoUrls,
}: LogoGridProps) => (
  <div className="mb-16 w-full">
    <h3 className="text-2xl font-bold text-foreground text-center mb-8">
      {title}
    </h3>
    <div className="max-w-6xl mx-auto">
      {logoOnly ? (
        <div className="flex flex-wrap items-center justify-center gap-4 px-4 sm:gap-6">
          {logos.map((logo, index) => {
            const logoSrc = fullUrls ? logo : `${baseUrl}${logo}`;
            const logoUrl = logoUrls?.[logo];
            const isKenanga = (logo || "")
              .toString()
              .toLowerCase()
              .includes("kenanga");
            const needsBlackBg = (logo || "")
              .toString()
              .toLowerCase()
              .includes("asriahmadacademy");
            const imgClass = isKenanga
              ? "max-w-full max-h-full object-contain"
              : "max-w-[100%] max-h-[100%] object-contain";
            const imageElement = (
              <img
                src={logoSrc}
                alt={formatAlt(fullUrls ? logo : logo)}
                title={formatAlt(fullUrls ? logo : logo)}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className={imgClass}
              />
            );
            const wrappedImage = needsBlackBg ? (
              <div className="w-full h-full flex items-center justify-center bg-black rounded-md p-2">
                {imageElement}
              </div>
            ) : (
              imageElement
            );

            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-3 sm:p-6 flex items-center justify-center w-[calc(50%-0.5rem)] sm:w-56 h-28 sm:h-44 shadow-sm relative"
              >
                {logoUrl ? (
                  <a
                    href={logoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full hover:opacity-80 transition-opacity"
                    aria-label={`Visit ${formatAlt(fullUrls ? logo : logo)} website`}
                  >
                    {wrappedImage}
                  </a>
                ) : (
                  wrappedImage
                )}

                {logoUrl && (
                  <>
                    {/* Desktop: top-right pill (similar to mobile) */}
                    <a
                      href={logoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${formatAlt(fullUrls ? logo : logo)} website`}
                      className="absolute right-3 top-3 hidden sm:inline-flex items-center bg-black/65 hover:bg-black/75 text-white text-xs px-2 py-1 rounded-full shadow-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white opacity-90"
                      >
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 21H3V3" />
                      </svg>
                    </a>

                    {/* Mobile: always-visible small pill (tap target) */}
                    <a
                      href={logoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${formatAlt(fullUrls ? logo : logo)} website`}
                      className="absolute right-3 top-3 inline-flex items-center gap-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full shadow-sm sm:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white opacity-90"
                      >
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 21H3V3" />
                      </svg>
                    </a>
                  </>
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
            const isKenanga = (logo || "")
              .toString()
              .toLowerCase()
              .includes("kenanga");
            const needsBlackBg = (logo || "")
              .toString()
              .toLowerCase()
              .includes("asriahmadacademy");
            const imgClass = isKenanga
              ? "max-w-full max-h-[90%] object-contain"
              : "max-w-[85%] max-h-[60%] object-contain";
            const imageElement = (
              <img
                src={logoSrc}
                alt={formatAlt(fullUrls ? logo : logo)}
                title={formatAlt(fullUrls ? logo : logo)}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className={imgClass}
              />
            );
            const wrappedImage = needsBlackBg ? (
              <div className="w-full h-full flex items-center justify-center bg-black rounded-md p-2">
                {imageElement}
              </div>
            ) : (
              imageElement
            );

            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center w-full sm:w-64 h-36 sm:h-44 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 relative"
              >
                {logoUrl ? (
                  <a
                    href={logoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label={`Visit ${formatAlt(fullUrls ? logo : logo)} website`}
                  >
                    {needsBlackBg ? (
                      <div className="w-full h-24 sm:h-28 flex items-center justify-center bg-black rounded-md p-2">
                        {imageElement}
                      </div>
                    ) : (
                      imageElement
                    )}
                  </a>
                ) : needsBlackBg ? (
                  <div className="w-full h-24 sm:h-28 flex items-center justify-center bg-black rounded-md p-2">
                    {imageElement}
                  </div>
                ) : (
                  imageElement
                )}
                {!hideCaption && (
                  <div className="mt-3 text-sm text-muted-foreground text-center">
                    {formatAlt(fullUrls ? logo : logo)}
                  </div>
                )}

                {logoUrl && (
                  <>
                    <a
                      href={logoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${formatAlt(fullUrls ? logo : logo)} website`}
                      className="absolute right-3 top-3 hidden sm:inline-flex items-center bg-black/65 hover:bg-black/75 text-white text-xs px-2 py-1 rounded-full shadow-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white opacity-90"
                      >
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 21H3V3" />
                      </svg>
                    </a>

                    <a
                      href={logoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${formatAlt(fullUrls ? logo : logo)} website`}
                      className="absolute right-3 top-3 inline-flex items-center gap-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full shadow-sm sm:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white opacity-90"
                      >
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 21H3V3" />
                      </svg>
                    </a>
                  </>
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
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSccASbfJveT-OWwXSjLi1dkbBjp-pxMoa1l1Xp0yBqDPZi_-g/viewform";
  return (
    <section
      className="py-20 bg-background"
      id="exhibitors"
      aria-labelledby="exhibitors-title"
    >
      <div className="section-container flex flex-col items-center">
        <div className="mb-12">
          <h2
            id="exhibitors-title"
            className="text-3xl font-bold text-primary text-center mb-6"
          >
            Supporting Partners & Sponsors
          </h2>
          {/* Exhibitor CTA positioned below heading and above the descriptive paragraph */}
          <div className="w-full max-w-6xl mx-auto px-4 mb-4 flex justify-center">
            <a href={formUrl} target="_blank" rel="noopener noreferrer">
              <Button
                style={{ animationDuration: "2.5s" }}
                className="h-auto py-2 px-4 sm:py-3 sm:px-5 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl transition-all duration-300 transform rounded-full flex items-center gap-3 text-sm sm:text-base animate-bounce"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2z" />
                </svg>
                <span className="font-semibold">Join as Exhibitor</span>
              </Button>
            </a>
          </div>
          <p className="text-center text-muted-foreground">
            We gratefully acknowledge the organisations supporting Monie Fest —
            supporting partners and sponsors are featured below.
          </p>
        </div>

        <LogoGrid
          title="Co-organisers"
          logos={coOrganizers}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Strategic Partner"
          logos={strategicPartners}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Platinum Sponsors"
          logos={platinumSponsors}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Gold Sponsors"
          logos={goldSponsors}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Silver Sponsors"
          logos={silverSponsors}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Supporting Partners"
          logos={supportingPartners}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Knowledge Partners"
          logos={knowledgePartners}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Gift Sponsors"
          logos={giftSponsors}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Exclusive Phone Partner"
          logos={exclusivePhonePartners}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Transport Partner"
          logos={[grabLogo]}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Media Partner"
          logos={mediaPartners}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        <LogoGrid
          title="Friends of Monie"
          logos={friendsOfMonie}
          fullUrls
          hideCaption
          logoOnly
          logoUrls={logoUrls}
        />
        {showAllSponsors && (
          <>
            <LogoGrid
              title="Supporting Partners"
              logos={supportingPartners}
              fullUrls
            />
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
