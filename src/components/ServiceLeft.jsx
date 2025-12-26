import { forwardRef } from "react";
import Logo from "/Img/aboutUsLogo.svg";
import rightArrow from "/Img/rightArrow.svg";

const ServiceLeft = forwardRef(({ textRef, btnRef }, ref) => {
  return (
    <div className="service-left" ref={ref}>
      <div ref={textRef}>
        <h5 className="service-heading">
          <span>
            <img src={Logo} alt="logo-img" />
          </span>
          What we do
        </h5>
        <h4 className="service-subheading">our services</h4>

        <p className="service-para">
          We offer a comprehensive suite of services designed to help your brand thrive. From innovative digital marketing strategies to custom web development and creative design, our services are tailored to meet your business needs.
        </p>
      </div>

      <a href="/" className="service-btn" ref={btnRef}>
        <span>view all services</span>
        <span>
          <img src={rightArrow} alt="rightArrow-img" />
        </span>
      </a>
    </div>
  );
});

export default ServiceLeft;
