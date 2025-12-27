const ContactForm = ({ logoImg, name }) => {
  return (
    <div>
      <div className="field-label">
        <img src={logoImg} alt="logo-img" />
        <h5 className="name">
          {name}
        </h5>
      </div>
      {
        name === "Write your message here*" ? (
        <textarea name="Message" id="message" maxLength={"5000"}></textarea>
        ): (
          <input type="text" name="" id="" maxLength={"256"} />
        )
      }
    </div>
  )
}

export default ContactForm
