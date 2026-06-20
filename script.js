function simulate() {
    let rainfall = document.getElementById("rainInput").value;

    if (rainfall === "" || rainfall < 0) {
        alert("Enter valid rainfall value!");
        return;
    }

    rainfall = parseFloat(rainfall);

    // Simple simulation logic
    let humidity = Math.min(100, 40 + rainfall * 0.6);
    let waterLevel = rainfall * 0.02;

    let risk = "Low";
    if (rainfall > 50) risk = "Moderate";
    if (rainfall > 100) risk = "High";

    // Update UI
    document.getElementById("humidity").innerText = humidity.toFixed(1);
    document.getElementById("water").innerText = waterLevel.toFixed(2);
    document.getElementById("risk").innerText = risk;

    // Animate water bar
    let heightPercent = Math.min(100, rainfall);
    document.getElementById("waterBar").style.height = heightPercent + "%";
}