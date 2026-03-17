import React from "react";

function WeatherCard() {
  return (
    <div style={styles.card}>
      <h3>Weather Risk Monitor</h3>
      <p>Heavy Rain Alert</p>
      <p>Delivery disruption possible</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#d0ebff",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px"
  }
};

export default WeatherCard;