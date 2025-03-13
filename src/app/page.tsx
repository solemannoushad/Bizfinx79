import CoreSpecialitiesSection from "@/components/CoreSpecialitiesSection";
import HomeHero from "@/components/HomeHero";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import SupportSection from "@/components/SupportSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TrustBadge from "@/components/TrustBadge";
import VideoBgSection from "@/components/VideoBgSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TargetAudienceSection />
      {/* <SpecialitiesSection /> */}
      <TrustBadge />
      <VideoBgSection />
      {/* <SupportSection /> */}
      <CoreSpecialitiesSection />
    </>
  );
}