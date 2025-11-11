import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sobre from './components/Sobre.jsx';

function App() {
    return (
        <div className="bg-white">
            <Navbar />
            <Hero />
            <Sobre />
        </div>
    );
}

export default App;