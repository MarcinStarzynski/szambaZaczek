import styles from "../styles/OfferPage.module.css";

function OfferPage() {
  return (
    <div className={styles.contentSection}>
      <h2>Oferta</h2>
      <ul className={styles.offerList}>
        <li>Szamba betonowe</li>
        <li>Przydomowe oczyszczalnie ścieków</li>
        <li>Profesjonalny montaż</li>
        <li>Serwis i konserwacja</li>
        <li>Doradztwo techniczne</li>
      </ul>
    </div>
  );
}

export default OfferPage;
