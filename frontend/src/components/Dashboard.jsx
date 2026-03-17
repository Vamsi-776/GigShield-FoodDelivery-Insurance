import React from "react";

function Dashboard() {
  return (
    <div style={styles.card}>
      <h2>GigShield Dashboard</h2>
      <p>Food Delivery Partner Insurance</p>
      <p>Weekly Premium: ₹25</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px"
  }
};

export default Dashboard;