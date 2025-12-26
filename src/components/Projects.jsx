import ProjectCard from './ProjectCard';
import Logo from '/Img/aboutUsLogo.svg';
import projectInfo from '../data/Project';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const projectContainerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set('.project-card-item', {
        opacity: 0,
        y: 60,
      });

      ScrollTrigger.batch('.project-card-item', {
        start: 'top 85%',
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.15,
          });
        },
        once: true,
      });

    }, projectContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="project--section">
      <div className="project-section">
        <div className="project-info">
          <h5 className="project-name">
            <span>
              <img src={Logo} alt="logo-img" />
            </span>
            Our projects
          </h5>
          <h4 className="project-heading">selected works</h4>
        </div>
        <div className="project-card" ref={projectContainerRef}>
          <div className="card-list">
            {projectInfo.map((ele, ind) => {
              return (
                <ProjectCard
                  heading={ele.heading}
                  para={ele.para}
                  img={ele.img}
                  className={ele.className}
                  key={ind}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
