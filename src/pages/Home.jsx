import AboutUs from '../components/AboutUs';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Fact from '../components/Fact';
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
      <Contact />
      <Fact />
      <Blog />
    </>
  );
};

export default Home;
