import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>intract.</div>
      <nav className={styles.nav}>
        <a href="/">Compass</a>
        <a href="/">Explore</a>
        <a href="/" className={styles.active}>
          Academy
        </a>
        <a href="/">NFTs</a>
        <a href="/">For Projects</a>
      </nav>
      <div className={styles.actions}>
        <input
          type="text"
          placeholder="Search for ecosystems, trending quests etc.,"
        />
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
