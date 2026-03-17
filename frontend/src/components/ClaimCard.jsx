import React from "react";

function ClaimCard() {
  return (
    <div style={styles.card}>
      <h3>Insurance Claim</h3>
      <p>Status: Auto Triggered</p>
      <p>Payout: ₹300</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#d3f9d8",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px"
  }
};

export default ClaimCard;