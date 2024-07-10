import React from "react";
import styles from "./CryptoList.module.css";
import CryptoCard from "./CryptoCards";

import catImage from "./images/Blackcat.png";
import frogImage from "./images/frog.png";
import unicornImage from "./images/Horse.png";
import apeImage from "./images/Monkey.png";

const cardsData = [
  {
    image: catImage,
    title: "How to plan your retirement with crypto?",
    videoLink: "https://example.com/video1",
  },
  {
    image: frogImage,
    title: "How about the limited plan of the Bitcoin ?",
    videoLink: "https://example.com/video2",
  },
  {
    image: unicornImage,
    title: "How does Uniswap actually work?",
    videoLink: "https://example.com/video3",
  },
  {
    image: apeImage,
    title: "How to spot crypto projects to invest in?",
    videoLink: "https://example.com/video4",
  },
];

const CryptoList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Top Crypto Creators and Projects to Follow
      </h1>
      <p className={styles.subheader}>
        Answers to your crypto doubts, straight from the experts
      </p>
      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <CryptoCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
