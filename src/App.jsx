import Header from './components/Header';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Problem from './components/Problem';
import CaseStudies from './components/CaseStudies';
import SavingsCalculator from './components/SavingsCalculator';
import Services from './components/Services';
import Process from './components/Process';
import MidCTA from './components/MidCTA';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import VideoProduction from './components/VideoProduction';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Proof />
        <Problem />
        <CaseStudies />
        <SavingsCalculator />
        <Services />
        <Process />
        <MidCTA />
        <Comparison />
        <Testimonials />
        <VideoProduction />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
