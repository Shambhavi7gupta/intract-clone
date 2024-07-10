import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuestList from "./components/QuestList";
import CryptoList from "./components/CryptoList";
import CryptoDictionary from "./components/CryptoDictionary";
import Footer from "./components/Footer";
import RewardCard from "./components/RewardCard";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <QuestList />
      <RewardCard />
      <CryptoList />
      <CryptoDictionary />
      <Footer />
    </div>
  );
}

export default App;
