import Logo from '/Img/aboutUsLogo.svg';
import rightArrow from '/Img/rightArrow.svg';
import highPer from '/Img/highPerformance.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
const Fact = () => {
  const containerRef = useRef();
  const imgRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 100,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="fact--section" ref={containerRef}>
      <div className="fact-section">
        <div className="fact-wrapper">
          <div className="fact-left">
            <div>
              <h5 className="fact-name">
                <span>
                  <img src={Logo} alt="logo-img" />
                </span>
                <span>statistical insights</span>
              </h5>
              <p className="fact-para">
                At Tekzy, we leverage data-driven insights to create impactful
                solutions for our clients.
              </p>
            </div>
            <a href="/" className="fact-btn">
              <span>explore more</span>
              <span>
                <img src={rightArrow} alt="rightArrow-img" />
              </span>
            </a>
          </div>
          <div className="fact-right">
            <div className="fact-data">
              <div className="fact-block">
                <span>Developed with High-Performance Optimization</span>
                <span>300+</span>
              </div>
              <div className="fact-img">
                <img src={highPer} alt="fact-img" />
                <div className="img-overlay" ref={imgRef}></div>
              </div>
            </div>
            <div className="fact-right-grid">
              <div className="fact-block-bg">
                <span>Client Satisfaction Rate</span>
                <span>98%</span>
              </div>
              <div className="fact-block">
                <span>Award-Winning Campaigns</span>
                <span>50+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fact;
