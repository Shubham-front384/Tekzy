import People1 from '/Img/people1.jpg';
import People2 from '/Img/people2.jpg';
import People3 from '/Img/people3.jpg';

const HeroRight = ({ heroRightRef }) => {
  return (
    <div className="hero-right" ref={heroRightRef}>
      <div className="hero-profiles">
        <div className="customer-img">
          <img src={People1} alt="people1" />
        </div>
        <div className="customer-img">
          <img src={People2} alt="people2" />
        </div>
        <div className="customer-img">
          <img src={People3} alt="people3" />
        </div>
      </div>
      <div className="hero-info">
        <p>
          Passionate professionals delivering exceptional results every time.
        </p>
      </div>
    </div>
  );
};

export default HeroRight;
