import Header from './components/Header';
import Hero from './components/Hero';
import VideoProduction from './components/VideoProduction';
import Automation from './components/Automation';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <VideoProduction />
        <Automation />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
