// =========================
// Light/Dark Mode Toggle
// =========================

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Dark Theme";
    toggleBtn.style.margin = "1rem";
    toggleBtn.style.padding = "0.5rem 1rem";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.backgroundColor = "#008751";
    toggleBtn.style.color = "#fff";
    toggleBtn.style.border = "none";
    toggleBtn.style.borderRadius = "5px";

    // Add button to header
    document.querySelector("header").appendChild(toggleBtn);

    // Toggle dark mode on click
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

// =========================
// Footer: Current Year & Last Modified
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    // Current year
    const currentYear = new Date().getFullYear();

    // Last modified date
    const lastModified = document.lastModified;

    // Update footer content
    footer.innerHTML = `
    <p>©${currentYear} Elizabeth Shonibare</p>
    <p>Last Modification: ${lastModified}</p>
  `;

    // =========================
    // Weather: Wind Chill Calculation
    // =========================

    // Static values (match your weather section)
    const temperatureC = 10;   // °C
    const windSpeedKmh = 5;    // km/h

    // Function to calculate wind chill (Celsius formula)
    function calculateWindChill(tempC, windKmh) {
        return (
            13.12 +
            0.6215 * tempC -
            11.37 * Math.pow(windKmh, 0.16) +
            0.3965 * tempC * Math.pow(windKmh, 0.16)
        );
    }

    // Check conditions for viable wind chill calculation
    let windChillDisplay = "N/A";
    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        const windChill = calculateWindChill(temperatureC, windSpeedKmh);
        windChillDisplay = windChill.toFixed(1) + " °C";
    }

    // Display wind chill in the Weather section
    const weatherSection = document.querySelector(".weather");
    const windChillElement = document.createElement("p");
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChillDisplay}`;
    weatherSection.appendChild(windChillElement);
});
