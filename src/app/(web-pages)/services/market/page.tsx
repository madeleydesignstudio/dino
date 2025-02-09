import MarketingAnalytics from "./_components/marketing-analytics";
import MarketingCTA from "./_components/marketing-cta";
import MarketingHero from "./_components/marketing-hero";
import MarketingProcess from "./_components/marketing-process";
import MarketingServices from "./_components/marketing-services";

const Market = () => {
  return (
    <>
      <MarketingHero />
      <MarketingServices />
      <MarketingAnalytics />
      <MarketingProcess />
      <MarketingCTA />
    </>
  );
};

export default Market;
