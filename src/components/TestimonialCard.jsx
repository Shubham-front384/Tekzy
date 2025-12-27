const TestimonialCard = ({ quote, text, img, name, location }) => {
  return (
    <div className="card">
      <div className="card-info">
        <h5 className="review-quote">
          {quote}
        </h5>
        <p className="review-text">
          {text}
        </p>
      </div>
      <div className="card-data">
        <div className="card-img">
          <img src={img} alt="person-img" />
        </div>
        <h5 className="card-detail">
          <span>{name}</span>
          <span>{location}</span>
        </h5>
      </div>
    </div>
  )
}

export default TestimonialCard
