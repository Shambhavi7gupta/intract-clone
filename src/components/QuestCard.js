import React from "react";
import styles from "./QuestCard.module.css";

const QuestCard = ({
  index,
  activeBox,
  handleBoxClick,
  title,
  subtitle,
  xp,
  tasks,
}) => {
  return (
    <div className={styles.Outerbox}>
      <div
        className={styles.boxContainer}
        onClick={() => handleBoxClick(index)}
      >
        <div className={styles.boxHeader}>
          <img src="Images/BCrypto.png" alt="Crypto" className={styles.image} />
          <div className={styles.info}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.xp}>{xp}</div>
          </div>
        </div>
        {activeBox === index && (
          <div className={styles.expandableContent}>
            {tasks.map((task, i) => (
              <div key={i} className={styles.task}>
                <img
                  src="Images/task.png"
                  alt="Task Icon"
                  className={styles.taskIcon}
                />
                {task}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <img src="Images/line.png" alt="dotted line" style={{ width: "78%" }} /> */}
      <div className={styles.rightContainer}>
        <img src="Images/cat.png" alt="Crypto" className={styles.catimage} />
        {/* <p style={{ color: "white", marginLeft: "680px", marginTop: "90px" }}>
          Intract Certified: Learner NFT
          <p>Your crypto black-belt certificate</p>
        </p> */}
      </div>
      <div
        className={styles.boxContainer2}
        onClick={() => handleBoxClick(index)}
      >
        <div className={styles.boxHeader}>
          <img src="Images/BCrypto.png" alt="Crypto" className={styles.image} />
          <div className={styles.info}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.xp}>{xp}</div>
          </div>
        </div>

        {activeBox === index && (
          <div className={styles.expandableContent}>
            {tasks.map((task, i) => (
              <div key={i} className={styles.task}>
                <img
                  src="Images/task.png"
                  alt="Task Icon"
                  className={styles.taskIcon}
                />
                {task}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.riContainer}>
        <img
          src="Images/whitecat.png"
          alt="Crypto"
          className={styles.whitecatimage}
        />
      </div>
    </div>
  );
};

export default QuestCard;
