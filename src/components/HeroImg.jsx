const HeroImg = ({ img, imgContainerRef }) => {
  return (
    <div className="hero-img" ref={imgContainerRef}>
      <img src={img} alt="hero-img" />
    </div>
  )
}

export default HeroImg
