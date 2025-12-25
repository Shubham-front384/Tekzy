import rightArrow from '/Img/rightArrow.svg';

const HeroLeft = ({ heroLeftRef }) => {
  return (
    <div className="hero-left" ref={heroLeftRef}>
      <h1 className="hero-heading">
        Shaping Tomorrow with Innovative Business Solution
      </h1>
      <div className="hero-btn">
        <a href="/" className="hero-work">
          <span>see our works</span>
          <span>
            <img src={rightArrow} alt="right-arrow" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeroLeft;
