import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <AboutUs />
      <Projects />
      <Services />
      <Testimonial />
    </>
  );
};

export default Home;
