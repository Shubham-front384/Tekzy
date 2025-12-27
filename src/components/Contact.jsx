import Logo from "/Img/aboutUsLogo.svg"
import contactImg from "/Img/contactUs.jpg"
import rightArrow from "/Img/rightArrow.svg"
import contactData from "../data/Contact"
import ContactForm from "./ContactForm"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.from(imgRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          bottomRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact--section" ref={sectionRef}>
      <div className="contact-section">
        <div className="contact-top">
          <div className="contact-info">
            <h5 className="contact-name">
              <span>
                <img src={Logo} alt="logo-img" />
              </span>
              <span>
                Contact us
              </span>
            </h5>
            <p className="contact-para">
              We’d love to hear from you! Whether you have a question, need a quote, or want to discuss your next project, our team is ready to help.
            </p>
          </div>
          <div className="contact-img" ref={imgRef}>
            <img src={contactImg} alt="contact-img" />
          </div>
        </div>
        <div className="contact-bottom" ref={bottomRef}>
          <h3 className="contact-heading">
            Need expert guidance?<br />
            Let’s discuss your project and turn your vision into reality.
          </h3>
          <div className="contact-form">
            <form action="">
              <div className="form-wrap">
                {
                  contactData.map((ele, ind) => {
                    return (
                      <ContactForm logoImg={ele.logoImg} name={ele.name} key={ind} />
                    )
                  })
                }
              </div>
              <a href="/" className="contact-btn">
                <span>see our works</span>
                <span>
                  <img src={rightArrow} alt="rightArrow-img" />
                </span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
