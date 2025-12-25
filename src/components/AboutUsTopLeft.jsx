import rightArrow from '/Img/rightArrow.svg';
import aboutUsLogo from '/Img/aboutUsLogo.svg';

const AboutUsTopLeft = () => {
  return (
    <>
      <div className="about-left">
        <div>
          <h5 className="about-heading">
            <span>
              <img src={aboutUsLogo} alt="aboutus-logo" />
            </span>
            <span className="about-name">About us</span>
          </h5>
          <h4 className="about-subheading">
            We believe in the power of creativity, strategy, and technology to
            drive business success.
          </h4>
          <p className="about-para">
            Whether you are a startup looking to establish your brand or an
            established company seeking to revamp your digital presence.
          </p>
        </div>
        <a href="/" className="about-btn">
          <span>about us</span>
          <span>
            <img src={rightArrow} alt="right-arrow" />
          </span>
        </a>
      </div>
    </>
  );
};

export default AboutUsTopLeft;
