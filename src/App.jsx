import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BioScroll from './components/BioScroll/BioScroll';
import Gallery from './components/Gallery/Gallery'; // Tu peux le garder plus bas si besoin, ou le renommer "Work" plus tard
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        {/* 1. L'image pleine page à l'ouverture */}
        <Hero />
        
        {/* 2. Le texte qui apparaît au scroll */}
        <BioScroll />
        
        {/* 3. La galerie existante (que tu pourras modifier plus tard pour la section WORK) */}
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}