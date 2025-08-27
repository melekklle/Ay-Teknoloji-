import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>İletişim</h2>
      <form>
        <input type="text" placeholder="Ad Soyad" required />
        <input type="email" placeholder="E-posta" required />
        <textarea placeholder="Mesajınız..."></textarea>
        <button type="submit">Gönder</button>
      </form>
    </section>
  );
}

export default Contact;
