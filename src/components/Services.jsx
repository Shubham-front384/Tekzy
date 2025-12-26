import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServiceLeft from "./ServiceLeft";
import ServiceRight from "./ServiceRight";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef();
  const leftTextRef = useRef();
  const leftBtnRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(leftTextRef.current, { opacity: 0, y: 60 });
      gsap.set(leftBtnRef.current, { opacity: 0, y: 60 });

      gsap.to(leftTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      ScrollTrigger.create({
        trigger: ".card-info:last-child",
        start: "top 80%",
        onEnter: () => {
          gsap.to(leftBtnRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        },
        once: true,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="service--section" ref={sectionRef}>
      <div className="service-section">
        <ServiceLeft textRef={leftTextRef} btnRef={leftBtnRef} />
        <ServiceRight />
      </div>
    </section>
  );
};

export default Services;
