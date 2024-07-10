import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2>intract.</h2>
          <p>
            We are your personal guide for exploring
            <br />
            <span>web3 projects & earning 100x rewards</span>
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h3>INTRACT</h3>
            <ul>
              <li>
                <a>Explore Quests</a>
              </li>
              <li>
                <a>Communities</a>
              </li>
              <li>
                <a>Alpha Hub</a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>EARN</h3>
            <ul>
              <li>
                <a>Refer & Earn</a>
              </li>
              <li>
                <a href="#">Leaderboard</a>
              </li>
              <li>
                <a href="#">Achievements</a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>ABOUT</h3>
            <ul>
              <li>
                <a href="#">Product Roadmap</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Sign up Program</a>
              </li>
              <li>
                <a href="#">Growth Community</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>SUPPORT</h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Create your quest</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Community Guidelines</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.disclaimer}>
          <p>
            <span>Disclaimer:</span>
            Crypto Products, Virtual Digital Assets, and NFTs are unregulated
            and can be highly risky. There may be no regulatory recourse for any
            loss from such transactions. We advise the viewer to proceed with
            caution. Nothing in this website or any communication published by
            us amounts to, is intended to be, or should be construed as
            investment or purchase advice of any kind or financial advice or
            promotion under any applicable laws. Any decision made based on the
            content provided on this website or any communication published by
            us shall not be attributable to us.
          </p>
        </div>
        <div className={styles.footerBottom}>
          <p>CREATED BY INTRACT</p>
          <div className={styles.socials}>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#">
              <i className="fab fa-spotify"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
