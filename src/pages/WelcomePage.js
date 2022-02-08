import Skills from '../components/Skills';
import Section from '../components/Section';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Work from '../components/Work';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import About from '../components/About';

const WelcomePage = () => {
    return (
        <div className="bg-dark">
            <NavBar />
            <Hero />
            <About />
            <Experience/>
            <Skills />
            <Work />
            <Section />
            <Footer />
        </div>
    );
}

export default WelcomePage;