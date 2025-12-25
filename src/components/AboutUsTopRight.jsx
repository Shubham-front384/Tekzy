import techSol from "/Img/technologySolution.svg";

const AboutUsTopRight = () => {
  return (
    <>
      <div className="about-right">
        <h5 className="about-right-name">
          <span>
            <img src={techSol} alt="technologySolutionImg" />
          </span>
          <span>
            technology-driven solution
          </span>
        </h5>
        <p>
          At Tekzy, we harness the power of advanced technology to create scalable, efficient, and future-ready solutions tailored to your business needs.
        </p>
      </div>
    </>
  )
}

export default AboutUsTopRight
