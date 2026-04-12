import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import WeddingEvents from "@/components/WeddingEvents";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WeddingEvents/>
      <Fleet />
      <WhyChooseUs />
      <FAQ />
      <Footer />
      <SocialSidebar />
      {/* <></> */}
    </main>
  );
};

export default Index;
