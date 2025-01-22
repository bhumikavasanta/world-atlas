import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  // const handleFormSubmit = (formData) => {
  //   // console.log(formData.entries());
  //   const formInputData = Object.fromEntries(formData.entries());
  //   console.log(formInputData);
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w51ip9y', 'template_lkm1me1', form.current, {
        publicKey: 'nr04lxYyFvKFa0e5M',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form
          ref={form}
          // action={handleFormSubmit}
          onSubmit={sendEmail}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Name"
            name='your_name'
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email"
            name='your_email'
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your Message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
    );
}

export default Contact;
