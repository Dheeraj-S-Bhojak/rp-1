import Marquee from "../../components/influencer/brandLoop/socialMarquee";
import FeaturesInfluencer from "../../components/influencer/features/features.component";
import HeroInfluencer from "../../components/influencer/hero._influencer.componet";
import InfluencerStatic from "../../components/influencer/influencer_stats.component";
import Newsletter from "../../components/influencer/newsLetter.component";

const HomeInfluencer = () => {
  return (
    <>
      <HeroInfluencer />

      <InfluencerStatic />
      <FeaturesInfluencer />
      <Newsletter />
      <Marquee />
    </>
  );
};
export default HomeInfluencer;
