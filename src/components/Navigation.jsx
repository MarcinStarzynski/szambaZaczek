import styles from "../styles/Navigation.module.css";
import logoImage from "../assets/ŻaczekLogo.png";

function Navigation({ activePage, onPageChange }) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src={logoImage} alt="Żaczek Logo" className={styles.logoImage} />
        <div className={styles.brandText}>
          <span className={styles.brandSub}>Zakład Produkcyjno-Handlowy</span>
          <span className={styles.brandName}>&quot;Żaczek&quot;</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <button
          className={`${styles.navItem} ${
            activePage === "o-nas" ? styles.active : ""
          }`}
          onClick={() => onPageChange("o-nas")}
        >
          O nas
        </button>
        <button
          className={`${styles.navItem} ${
            activePage === "oferta" ? styles.active : ""
          }`}
          onClick={() => onPageChange("oferta")}
        >
          Oferta
        </button>
        <button
          className={`${styles.navItem} ${
            activePage === "kontakt" ? styles.active : ""
          }`}
          onClick={() => onPageChange("kontakt")}
        >
          Kontakt
        </button>
      </nav>
    </header>
  );
}

export default Navigation;
