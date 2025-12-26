import rightTopArrow from '/Img/rightTopArrow.svg';

const ProjectCard = ({ heading, para, img, className }) => {
  return (
    <div className={`project-card-item ${className}`}>
      <a href="/">
        <div className="work-top">
          <div className="work-info">
            <h3 className="work-title">{heading}</h3>
            <p className="single-text">{para}</p>
          </div>
          <img src={rightTopArrow} alt="rightArrow-img" />
        </div>
        <div className="work-img">
          <img src={img} alt="project-img" />
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
