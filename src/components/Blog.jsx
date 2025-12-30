import BlogCard from './BlogCard';
import rightArrow from '/Img/rightArrow.svg';
import Logo from '/Img/aboutUsLogo.svg';
import blogData from '../data/Blogs';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import { useLayoutEffect, useRef } from 'react';
import '../blogs.css';

gsap.registerPlugin(ScrollTrigger);
const Blog = ({ limit, buttonOff }) => {
  const visibleCard = limit ? blogData.slice(0, limit) : blogData;
  const sectionRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.set('.blog-detail', {
        opacity: 0,
        y: 60,
      });

      mm.add('(max-width: 767px)', () => {
        ScrollTrigger.batch('.blog-detail', {
          start: 'top 95%',
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power3.out',
            });
          },
          once: true,
        });
      });

      mm.add('(min-width: 768px)', () => {
        gsap.to('.blog-detail', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="blog--section" ref={sectionRef}>
      <div className="blog-section">
        <div className="blog-top">
          <h5 className="blog-name">
            <span>
              <img src={Logo} alt="logo-img" />
            </span>
            <span>Our blogs</span>
          </h5>
          <h4 className="subheading">latest articles</h4>
        </div>
        <div className="blog-bottom">
          <div className="card-list">
            {visibleCard.map((ele, ind) => (
              <BlogCard
                postName={ele.postName}
                postDate={ele.postDate}
                postTitle={ele.postTitle}
                postImg={ele.postImg}
                key={ind}
              />
            ))}
          </div>
          {!buttonOff && (
            <div className="navigation">
              <a href="http://" className="next-btn">
                <span>next</span>
                <span>
                  <img src={rightArrow} alt="rightArrow-img" />
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
