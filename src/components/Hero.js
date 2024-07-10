import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
            alt="title-name"
          />
        </div>
        <div className={styles.content}>
          <p>
            <span>Intract users</span>
            "have together made more than"
            <span> $100 million</span>
            "in web3."
            <br></br>
            "Join them and"
            <span>learn how to earn crypto!</span>
          </p>
        </div>
        <button className={styles.cta}>Get Started →</button>
      </div>
    </section>
  );
};

export default Hero;
