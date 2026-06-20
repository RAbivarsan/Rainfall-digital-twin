🌧️ Rainfall Digital Twin Simulator

A simple and interactive Digital Twin web application that simulates rainfall impact based on user input.
Built using HTML, CSS, and JavaScript, this project demonstrates how environmental data can be visualized in real-time.

🚀 Features
🌦️ Input rainfall (in mm)
💧 Simulates:
Humidity
Water Level
Damage Risk
📊 Visual water level indicator (animated)
🎨 Clean dark-themed UI
⚡ Instant real-time calculations
🖥️ Demo Preview
Enter rainfall value
Click Simulate
View results instantly with animation
📂 Project Structure
rainfall-digital-twin/
│
├── index.html     # Main webpage
├── style.css      # Styling (UI design)
├── script.js      # Simulation logic
└── README.md      # Project documentation
⚙️ How It Works

The simulation uses simple formulas:

Humidity (%)

humidity = 40 + (rainfall × 0.6)

Water Level (m)

waterLevel = rainfall × 0.02

Damage Risk

0–50 mm     → Low
51–100 mm   → Moderate
>100 mm     → High
🛠️ How to Run Locally
Download or clone the project
git clone https://github.com/your-username/rainfall-digital-twin.git
Open the folder
Run:
Double-click index.html
OR
Open with Live Server (VS Code recommended)
