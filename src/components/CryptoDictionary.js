import React from "react";
import styles from "./CryptoDictionary.module.css";
import cryptoImage from "./images/machine.png"; // Adjust the path as needed

const CryptoDictionary = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Crypto Dictionary</h1>
        <p>Your one-stop to catch up on all crypto terms</p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={cryptoImage}
          alt="Crypto Dictionary"
          className={styles.image}
        />
        <div className={styles.imageOverlay}>
          <h2>Web3 + Degen Glossary</h2>
          <p>Your own crypto dictionary</p>
        </div>
      </div>
      <div className={styles.iconContainer}>
        {/* <button className={styles.iconButton}>
          <span className="material-icons">book</span>
        </button> */}
      </div>
    </div>
  );
};

export default CryptoDictionary;
