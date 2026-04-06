import Header from "@/components/layout/Header";
import AboutUs from "@/components/aboutUs/AboutUS";
import Credibility from "@/components/credibility/Credibility";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero-section/Hero";
import Industries from "@/components/industriesCom/Industries";
import OurPartners from "@/components/ourPartners/OurPartners";
import ProjectComp from "@/components/projectComp/ProjectComp";
import Questions from "@/components/questions/Questions";
import Solutions from "@/components/solutions/SolutionsCom";
import StatsKey from "@/components/statsKey/StatsKey";
import ContactSection from "@/components/contactSection/ContactSection";







export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <AboutUs /> */}
      {/* <ProjectComp /> */}
      {/* <Solutions /> */}
      {/* <StatsKey /> */}
      {/* <OurPartners /> */}
      {/* <Industries /> */}
      {/* <Credibility /> */}
      {/* <Questions /> */}
      {/* <ContactSection/> */}
      <Footer />
    </main>
  );
}