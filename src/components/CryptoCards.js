import React from "react";
import styles from "./CryptoCard.module.css";

const CryptoCard = ({ image, title, videoLink }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <a href={videoLink} className={styles.playButton}>
          <img src="/path-to-play-icon.png" alt="Play Video" />
        </a>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default CryptoCard;
