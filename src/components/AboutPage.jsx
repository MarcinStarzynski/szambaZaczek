import styles from "../styles/AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.contentSection}>
      <h2>O nas</h2>
      <p>
        Jesteśmy firmą specjalizującą się w profesjonalnych rozwiązaniach dla
        instalacji przydomowych oczyszczalni ścieków.
      </p>
      <p>
        Z wieloletnim doświadczeniem oferujemy kompleksową obsługę - od
        doradztwa, przez montaż, aż po serwis.
      </p>
    </div>
  );
}

export default AboutPage;
