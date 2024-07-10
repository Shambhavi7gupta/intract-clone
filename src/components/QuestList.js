import React, { useState } from "react";
import styles from "./QuestList";
import Box from "./QuestCard";

const QuestList = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Box
        index={0}
        activeBox={activeBox}
        handleBoxClick={handleBoxClick}
        title="Basics of Crypto"
        subtitle="The safest and easiest place to start your crypto journey!"
        xp="1490 XPs"
        tasks={[" #1: But what is crypto and web3?", "Task 2", "Task 3"]}
      />
    </div>
  );
};

export default QuestList;
