import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Fact from '../components/Fact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Projects limit={3} buttonOff={true} />
      <Services />
      <Testimonial />
      <Contact />
      <Fact />
      <Blog limit={3} buttonOff={true} />
    </>
  );
};

export default Home;
