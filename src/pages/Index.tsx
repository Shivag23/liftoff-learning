
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Founder />
      <Impact />
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
