import BlogsSection from "@/components/BlogsSection";
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
      <TrustBadge home={true} title="100% Financial Joy Guarantee" txt="With BizFinx, you're not just satisfied—you’ll be thrilled. If you're not over the moon, we'll work tirelessly to make it right." image="trust-1.png" navigateTo="/contact"  />
      <VideoBgSection />
      {/* <SupportSection /> */}
      <CoreSpecialitiesSection />
      <BlogsSection />
    </>
  );
}