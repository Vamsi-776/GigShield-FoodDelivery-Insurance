def calculate_premium(zone_risk, income):

    base = 20

    if zone_risk == "medium":
        base += 10
    elif zone_risk == "high":
        base += 20

    if income > 3000:
        base += 5

    return base


premium = calculate_premium("medium", 3500)
print("Weekly Premium:", premium)