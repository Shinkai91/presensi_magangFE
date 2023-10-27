import './card.css'
import React from "react";

const Cards = ({ data }) => {
  const colors = [
  "#FF5733", "#FFC300", "#85C1E9", "#D2B4DE", "#48C9B0", "#3B667E", "#3B7E76", "#275C33", "#8D9B37", "#AF642D", 
  "#9E2D2D", "#851666", "#FFD1DC", "#FFABAB", "#FFC3A0", "#FF677D", "#D4A5A5", "#DAC4FF", "#9A8C98", "#B5EAD7", 
  "#A2D2FF", "#FFE156", "#FF6F61", "#6A0572", "#FFC857", "#1A508B", "#E71D36", "#FF9F1C", "#00BFB2", "#2EC4B6", 
  "#FFD700", "#8338EC", ];

  const randomNumber = Math.floor(Math.random() * 32);

  return (
    <div className="card">
      <h2 className="card-body" style={{backgroundColor: colors[randomNumber] }}>{data.title}</h2>
      <p>{data.description}</p>
      <div class="deadline">{data.deadline}</div>
    </div>
  );
};

export default Cards;

