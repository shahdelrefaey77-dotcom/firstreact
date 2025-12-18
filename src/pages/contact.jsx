function Contact() {
  return (
    <section className="contact">
  <div className="container">
    <h2>CONTACT SECTION</h2>

    <div className="divider">
      <span></span>
      <i className="star">★</i>
      <span></span>
    </div>

    <form className="contact-form">
      <input type="text" placeholder="userName" />
      <input type="text" placeholder="userAge" />
      <input type="text" placeholder="userEmail" />
      <input type="text" placeholder="userPassword" />

      <button type="submit">send Message</button>
    </form>
  </div>
</section>

  );
}

export default Contact;
