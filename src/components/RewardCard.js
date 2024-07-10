// src/components/RewardCard.js
import React from "react";
import styles from "./RewardCard.module.css";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const RewardCard = () => {
  return (
    <div style={{ background: "black" }}>
      <div className={styles.rewardCard}>
        <div className={styles.right}>
          {/* <div className={styles.header}>
            <div className={styles.pepe}>10,000 $PEPE</div>
            <div className={styles.airdrop}>Memecoin Airdrop</div>
          </div> */}
          <div className={styles.timer}>
            <div className={styles.time}>
              <div className={styles.unit}>00</div>
              <div className={styles.label}>Days</div>
            </div>
            <div className={styles.time}>
              <div className={styles.unit}>09</div>
              <div className={styles.label}>Hrs</div>
            </div>
            <div className={styles.time}>
              <div className={styles.unit}>02</div>
              <div className={styles.label}>Mins</div>
            </div>
            <div className={styles.time}>
              <div className={styles.unit}>38</div>
              <div className={styles.label}>Sec</div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.luckyDraw}>
              Lucky Draw
              <img
                className={styles.gif}
                src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"
                alt="reward"
              />
            </div>

            <div className={styles.exclusive}>
              <h4>Exclusive Community</h4>
              <p>Complete all Essential quests</p>
              <p>Complete at least 1 Alpha Hub quest today</p>
              <button className={styles.claimBtn}>Claim Now →</button>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.info}>
            <h3>Reward info</h3>
            <p>Free access to paid KOL (crypto earning) communities!</p>
            <p style={{ color: " rgb(168, 166, 163)" }}>
              Win access to exclusive earning communities of some of the
              greatest earners in crypto for a month, every 24 hours. Get access
              to unmatched insights, a close-knit community of the best airdrop
              earners, and more.
            </p>
            <p style={{ color: " rgb(168, 166, 163)" }}>
              To win: make sure you've connected your Twitter and Discord
              accounts – and follow our criteria!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
