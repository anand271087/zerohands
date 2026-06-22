import Header from './components/Header';
import Hero from './components/Hero';
import VideoProduction from './components/VideoProduction';
import MidCTA from './components/MidCTA';
import Automation from './components/Automation';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <VideoProduction />
        <MidCTA />
        <Automation />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
