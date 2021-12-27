import React, { useState } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

export const Contact = ({ contactRef }) => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      )
    e.target.reset()
    setShowConfirmation(true)
  }

  const closeConfirmation = () => {
    setShowConfirmation(false)
  }
  return (
    <div ref={contactRef} id="contact" className="contact-background">
      <form className="contact-container" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="url" name="website" placeholder="Website" />
        <textarea rows="10" cols="50" name="message" required />
        <input type="submit" className="submit-button" value="SEND" />
      </form>
      {showConfirmation && (
        <div className="confirmation-container transition">
          <div className="confirmation-card">
            <div>Thank you for your message,</div>
            <div>I will get back to you as soon as possible!</div>
            <button onClick={closeConfirmation}>OK</button>
          </div>
        </div>
      )}
    </div>
  )
}
