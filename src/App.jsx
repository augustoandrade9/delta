import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sobre from './components/Sobre.jsx';
import Diferenciais from './components/Diferenciais';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-white">
            <Navbar />
            <Hero />
            <Sobre />
            <Diferenciais />
            <Partners />
            <Contact />
            <div className="flex-1" />
            <Footer />
        </div>
    );
}

export default App;