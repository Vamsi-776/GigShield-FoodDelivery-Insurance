import React from "react";

function RiskCard() {
  return (
    <div style={styles.card}>
      <h3>AI Risk Prediction</h3>
      <p>Risk Level: HIGH</p>
      <p>Expected income loss: ₹300 today</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffe3e3",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px"
  }
};

export default RiskCard;