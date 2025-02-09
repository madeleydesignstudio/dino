import { motion } from "framer-motion";
import MarketingHero from "./_components/marketing-hero";
import MarketingServices from "./_components/marketing-services";
import MarketingAnalytics from "./_components/marketing-analytics";
import MarketingProcess from "./_components/marketing-process";
import MarketingCTA from "./_components/marketing-cta";

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
