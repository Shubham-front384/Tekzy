import imgData from "../data/Img";

const AboutUsBottom = () => {
  return (
    <>
      <div className="about-bottom">
        {
          imgData.map((ele, ind) => {
            return (
              <img src={ele.img} alt={ele.AltName} className={ele.ClassName} key={ind} />
            )
          })
        }
      </div>
    </>
  )
}

export default AboutUsBottom
