import { useState } from "react";
import Navigation from "./components/Navigation";
import AboutPage from "./components/AboutPage";
import OfferPage from "./components/OfferPage";
import ContactPage from "./components/ContactPage";
import styles from "./styles/App.module.css";

function App() {
  const [activePage, setActivePage] = useState("o-nas");

  const renderContent = () => {
    switch (activePage) {
      case "o-nas":
        return <AboutPage />;
      case "oferta":
        return <OfferPage />;
      case "kontakt":
        return <ContactPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.mainCard}>
        <Navigation activePage={activePage} onPageChange={setActivePage} />
        <main className={`${styles.mainContent} main-content`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
