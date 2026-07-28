import HeroSection from "../../components/landing/HeroSection";
import StatsSection from "../../components/landing/StatsSection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import WhyChooseSection from "../../components/landing/WhyChooseSection";
import Footer from "../../components/common/Footer";

export default function LandingPage() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <WhyChooseSection />
            <Footer />
        </>
    );
}