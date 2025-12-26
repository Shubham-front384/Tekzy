const ServiceCard = ({heading, para, img}) => {
  return (
    <a href="/" className="card-info">
      <img src={img} alt="logo-img" />
      <div className="card-data">
        <h5>{heading}</h5>
        <p>{para}</p>
      </div>
    </a>
  )
}

export default ServiceCard
