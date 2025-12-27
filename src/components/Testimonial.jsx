import Logo from "/Img/aboutUsLogo.svg"
import customerData from "../data/Customer.js"
import TestimonialCard from "./TestimonialCard.jsx";
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
const Testimonial = () => {
  const testimonialCardContainerRef = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.testimonial-card .card', {
        opacity: 0,
        y: 40,
      });

      gsap.to('.testimonial-card .card', {
        opacity: 1,
        y: 0,
        duration: .6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialCardContainerRef.current,
          start: "top 80%",
          once: true,
        }
      });
    }, testimonialCardContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonial--section">
      <div className="testimonial-section">
        <div className="testimonial-info">
          <div className="testimonial-data">
            <h5 className="testimonial-name">
              <span>
                <img src={Logo} alt="logo-img" />
              </span>
              <span>
                testimonials
              </span>
            </h5>
            <h4 className="testimonial-subheading">
              customers review
            </h4>
          </div>
          <div className="testimonial-card" ref={testimonialCardContainerRef}>
            {
              customerData.map((ele, ind) => {
                return (
                  <TestimonialCard quote={ele.quote} text={ele.text} img={ele.img} name={ele.name} location={ele.location} key={ind} />
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
