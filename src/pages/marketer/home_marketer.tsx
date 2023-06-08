import Hero from "../../components/marketer/hero.component";
import Stats from "../../components/marketer/stats.component";
import Teams from "../../components/marketer/teams.component";
import Features from "../../components/marketer/features.component";
import FAQ from "../../components/marketer/FAQ_company.component";
import Pricing from "../../components/marketer/pricing.componet";

/**
 * marketerHome
 * @returns
 */
const MarketerHome: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Teams />
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
};
export default MarketerHome;
