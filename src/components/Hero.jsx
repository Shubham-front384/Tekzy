import { useLayoutEffect, useRef } from "react"
import img from "/Img/heroImg.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import HeroImg from "./HeroImg"
import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const imgContainerRef = useRef();
  const heroLeftRef = useRef();
  const heroRightRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgContainerRef.current,
        {
          width: "100%",
          ease: 'none',
          scrollTrigger: {
            trigger: imgContainerRef.current,
            // markers: true,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          }
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroLeftRef.current,
          start: "top 70%",
        }
      });

      tl.from(
        heroLeftRef.current.querySelectorAll("h1, .hero-btn"),
        {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );

      gsap.from(heroRightRef.current, {
        opacity: 0,
        y: 100,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero--section">
      <div className="hero_section">
        <HeroLeft heroLeftRef={heroLeftRef} />
        <HeroRight heroRightRef={heroRightRef} />
      </div>
      <HeroImg img={img} imgContainerRef={imgContainerRef} />
    </section>
  )
}

export default Hero
