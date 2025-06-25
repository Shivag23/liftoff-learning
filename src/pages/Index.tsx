import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
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
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
