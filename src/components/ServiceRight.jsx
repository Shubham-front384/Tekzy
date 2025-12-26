import { useLayoutEffect, useRef } from "react";
import serviceData from "../data/Service"
import ServiceCard from "./ServiceCard"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
const ServiceRight = () => {
  const cardContainerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.card-info', {
        opacity: 0,
        y: 60,
      });

      ScrollTrigger.batch('.card-info', {
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
    }, cardContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="service-right" ref={cardContainerRef}>
        {
          serviceData.map((ele, ind) => {
            return (
              <ServiceCard heading={ele.heading} para={ele.para} img={ele.img} key={ind} />
            )
          })
        }
      </div>
    </>
  )
}

export default ServiceRight
