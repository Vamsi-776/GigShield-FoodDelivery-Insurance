# GigShield – AI Powered Parametric Insurance for Food Delivery Partners

## Problem Statement

Food delivery partners working with platforms such as Zomato, Swiggy, Zepto, Amazon, and other gig platforms depend on daily deliveries for their income. External disruptions such as heavy rain, extreme heat, floods, or severe pollution often reduce their working hours and lead to significant income loss.

Currently, gig workers do not have financial protection against these uncontrollable environmental disruptions.

GigShield is an AI-powered parametric insurance platform designed to automatically protect delivery partners from income loss caused by external disruptions.

---

## Solution Overview

GigShield provides a smart insurance system where delivery partners can subscribe to a **weekly insurance plan**. The platform continuously monitors environmental conditions using APIs such as weather and pollution data.

When a disruption occurs that affects delivery operations, the system automatically triggers an insurance claim and processes an instant payout for the affected worker.

The platform uses AI-based risk prediction models to dynamically adjust insurance premiums and detect fraudulent claims.

---

## Target Persona

Food Delivery Partners working with:

* Zomato
* Swiggy
* Dunzo
* Amazon
* Zepto

These workers depend on daily deliveries and are highly vulnerable to environmental disruptions that reduce their working hours.

---

## Key Features

### 1. AI-Based Risk Assessment

* Predicts environmental risks such as heavy rain, heat waves, and pollution
* Calculates weekly insurance premium dynamically
* Provides risk insights to delivery partners

### 2. Weekly Insurance Pricing Model

* Designed specifically for gig workers
* Affordable weekly subscription
* Example: ₹20–₹30 per week for income protection

### 3. Parametric Claim Automation

* Claims are triggered automatically when disruption conditions are detected
* No manual claim submission required
* Faster claim processing

### 4. Intelligent Fraud Detection

* Detects location spoofing
* Identifies duplicate claims
* Uses anomaly detection to prevent fraud

### 5. Instant Payout System

* Once the disruption is verified, payout is automatically triggered
* Simulated payment gateway integration

### 6. Analytics Dashboard

For Delivery Partner:

* Weekly coverage status
* Risk alerts
* Claim history
* Earnings protected

For Admin / Insurer:

* Active policies
* Disruption analytics
* Fraud alerts
* Claim statistics

---

## System Workflow

1. Delivery partner registers on the GigShield platform.
2. The system evaluates risk factors based on location and historical environmental data.
3. A weekly insurance premium is calculated.
4. The system continuously monitors disruption triggers such as:

   * Heavy rainfall
   * Extreme temperature
   * Severe pollution
5. If a disruption occurs, the parametric engine automatically triggers a claim.
6. The payout is processed instantly through the payment system.

---

## System Architecture

High Level Architecture:

Delivery Partner
↓
Frontend Dashboard (React)
↓
Backend API (Java Spring Boot)
↓
AI Risk Engine (Python)
↓
External APIs (Weather / Pollution)
↓
Parametric Trigger Engine
↓
Claims Processing System
↓
Payment Gateway Simulation

---

## Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Vite

### Backend

* Java
* Spring Boot (REST APIs)

### Database

* MySQL

### AI / Risk Engine

* Python (for risk modeling and prediction)

### APIs & Integrations

* Weather API
* Pollution Data API
* Payment Gateway Simulation

### Tools

* Git
* GitHub
* Postman
* Docker (future enhancement)

---

## Project Structure

```
GigShield-FoodDelivery-Insurance
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── services
│
├── backend
│   └── Spring Boot APIs
│
├── ai-engine
│   └── Risk Prediction Models
│
├── docs
│   └── Architecture diagrams
│
└── README.md
```

---

## Future Enhancements

* Real-time location tracking for accurate disruption validation
* Machine learning models for improved risk prediction
* Integration with delivery platforms (Zomato / Swiggy APIs)
* Real payment gateway integration
* Mobile application for delivery partners

---

## Demo

This project is being developed as part of the **Guidewire DEVTrails 2026 Hackathon**.

The demo includes:

* Delivery partner dashboard
* AI risk prediction
* Automated disruption detection
* Claim triggering simulation
* Instant payout demonstration

---

## Team

Project developed for **Guidewire DEVTrails 2026 Hackathon**.

Focus Area:
AI-Powered Parametric Insurance for Gig Economy Workers.
