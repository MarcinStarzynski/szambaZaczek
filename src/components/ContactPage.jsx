import styles from "../styles/ContactPage.module.css";

function ContactPage() {
  return (
    <div className={styles.contentSection}>
      <h2>Kontakt</h2>
      <div className={styles.contactInfo}>
        <p>
          <strong>Telefon:</strong> +48 123 456 789
        </p>
        <p>
          <strong>Email:</strong> kontakt@szamba.pl
        </p>
        <p>
          <strong>Adres:</strong> ul. Przykładowa 123, 00-000 Miasto
        </p>
      </div>

      <form className={styles.contactForm}>
        <div className={styles.formInline}>
          <div className={styles.formRow}>
            <label htmlFor="phone">Numer telefonu</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="np. 500 600 700"
            />
          </div>
          <div className={styles.formRow}>
            <label htmlFor="name">Imię i nazwisko</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jan Kowalski"
            />
          </div>
          <div className={styles.formRow}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="kontakt@szamba.pl"
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <label htmlFor="message">Treść</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Napisz wiadomość"
          ></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
